import React, { useState, useEffect } from 'react'
import GameContainer from './components/GameContainer'
import MenuScreen from './components/MenuScreen'
import GameHUD from './components/GameHUD'
import ItemPopup from './components/ItemPopup'
import PauseScreen from './components/PauseScreen'
import GameOverScreen from './components/GameOverScreen'

function App() {
  const [gameState, setGameState] = useState('menu') // menu, playing, paused, gameover
  const [gameData, setGameData] = useState({
    score: 0,
    distance: 0,
    risk: 0,
    combo: 0
  })
  const [currentItem, setCurrentItem] = useState(null)
  const [gameOverData, setGameOverData] = useState(null)

  useEffect(() => {
    // Wait for gameBridge to be available (loaded by GameContainer)
    const checkBridge = setInterval(() => {
      if (window.gameBridge) {
        clearInterval(checkBridge)
        setupBridgeListeners()
      }
    }, 100)

    function setupBridgeListeners() {
      // Listen for item collection
      window.gameBridge.onPhaserEvent('itemCollected', (data) => {
        setCurrentItem(data.item)
        setGameData(prev => ({
          ...prev,
          score: data.score,
          risk: data.risk,
          combo: data.combo
        }))
        setGameState('paused')
      })

      // Listen for game state updates
      window.gameBridge.onPhaserEvent('gameState', (state) => {
        if (state === 'playing') {
          setGameState('playing')
        } else if (state === 'gameover') {
          setGameState('gameover')
          // Get game over data from registry or bridge
          if (window.gameBridge.getPhaserGame) {
            const phaserGame = window.gameBridge.getPhaserGame()
            if (phaserGame && phaserGame.registry) {
              setGameOverData({
                score: phaserGame.registry.get('finalScore') || 0,
                distance: phaserGame.registry.get('finalDistance') || 0,
                risk: phaserGame.registry.get('finalRisk') || 0,
                report: phaserGame.registry.get('report')
              })
            }
          }
        }
      })

      // Listen for game data updates (score, distance, risk, combo)
      window.gameBridge.onPhaserEvent('gameData', (data) => {
        setGameData(prev => ({
          score: data.score !== undefined ? data.score : prev.score,
          distance: data.distance !== undefined ? data.distance : prev.distance,
          risk: data.risk !== undefined ? data.risk : prev.risk,
          combo: data.combo !== undefined ? data.combo : prev.combo
        }))
      })
    }

    return () => {
      clearInterval(checkBridge)
    }
  }, [])

  const handleStartGame = () => {
    setGameState('playing')
    // Start game via Phaser scene
    const startGame = () => {
      // Try multiple ways to get the Phaser game
      let phaserGame = null
      
      if (window.gameBridge && window.gameBridge.getPhaserGame) {
        phaserGame = window.gameBridge.getPhaserGame()
      } else if (window.phaserGameInstance) {
        phaserGame = window.phaserGameInstance
      }
      
      if (phaserGame && phaserGame.scene) {
        // Stop any running scenes
        phaserGame.scene.stop('BootScene')
        phaserGame.scene.stop('MenuScene')
        phaserGame.scene.stop('GameOverScene')
        // Start the game scene
        phaserGame.scene.start('GameScene')
        console.log('GameScene started')
      } else {
        console.error('Phaser game not available')
        // Retry after a delay
        setTimeout(() => {
          startGame()
        }, 300)
      }
    }

    // Wait for game to be initialized - try multiple times
    const tryStart = () => {
      let phaserGame = null
      
      if (window.gameBridge && window.gameBridge.getPhaserGame) {
        phaserGame = window.gameBridge.getPhaserGame()
      }
      
      if (!phaserGame && window.phaserGameInstance) {
        phaserGame = window.phaserGameInstance
      }
      
      if (phaserGame && phaserGame.scene) {
        startGame()
      } else {
        // Keep retrying until game is ready
        setTimeout(() => {
          tryStart()
        }, 100)
      }
    }
    
    tryStart()
  }

  const handlePopupDismiss = () => {
    setCurrentItem(null)
    setGameState('playing')
    if (window.gameBridge) {
      window.gameBridge.emitToPhaser('popupDismissed', {})
    }
  }

  const handlePause = () => {
    setGameState('paused')
  }

  const handleResume = () => {
    setGameState('playing')
  }

  const handleRestart = () => {
    setGameState('playing')
    setGameOverData(null)
    // Restart game via Phaser scene
    if (window.gameBridge && window.gameBridge.getPhaserGame) {
      const phaserGame = window.gameBridge.getPhaserGame()
      if (phaserGame && phaserGame.scene) {
        phaserGame.scene.start('GameScene')
      }
    }
  }

  const handleBackToMenu = () => {
    setGameState('menu')
    setGameOverData(null)
    // Return to menu via Phaser scene
    if (window.gameBridge && window.gameBridge.getPhaserGame) {
      const phaserGame = window.gameBridge.getPhaserGame()
      if (phaserGame && phaserGame.scene) {
        phaserGame.scene.start('MenuScene')
      }
    }
  }

  return (
    <div className="app">
      {/* Always mount GameContainer to ensure scripts load */}
      <GameContainer />
      
      {gameState === 'menu' && (
        <MenuScreen onStart={handleStartGame} />
      )}
      
      {(gameState === 'playing' || gameState === 'paused') && (
        <>
          <GameHUD 
            score={gameData.score}
            distance={gameData.distance}
            risk={gameData.risk}
            combo={gameData.combo}
          />
          {gameState === 'paused' && currentItem && (
            <ItemPopup 
              item={currentItem}
              onDismiss={handlePopupDismiss}
            />
          )}
          {gameState === 'paused' && !currentItem && (
            <PauseScreen onResume={handleResume} />
          )}
        </>
      )}

      {gameState === 'gameover' && gameOverData && (
        <GameOverScreen 
          data={gameOverData}
          onRestart={handleRestart}
          onMenu={handleBackToMenu}
        />
      )}
    </div>
  )
}

export default App

