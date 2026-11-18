import React, { useEffect, useRef } from 'react'

function GameContainer() {
  const containerRef = useRef(null)
  const gameRef = useRef(null)
  const scriptsLoadedRef = useRef(false)
  const gameInitializedRef = useRef(false)

  useEffect(() => {
    // Prevent loading scripts multiple times
    if (scriptsLoadedRef.current) {
      return
    }

    // Load Phaser from CDN if not already loaded
    if (typeof Phaser === 'undefined') {
      const phaserScript = document.createElement('script')
      phaserScript.src = 'https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js'
      phaserScript.onload = () => {
        loadGameScripts()
      }
      phaserScript.onerror = () => {
        console.error('Failed to load Phaser')
      }
      document.body.appendChild(phaserScript)
    } else {
      loadGameScripts()
    }

    function loadGameScripts() {
      if (scriptsLoadedRef.current) {
        return
      }

      // Load game scripts in order (from public folder - served as static assets)
      const scripts = [
        '/js/gameBridge.js',
        '/js/items.js',
        '/js/player.js',
        '/js/spawner.js',
        '/js/ui.js',
        '/js/report.js',
        '/js/scenes/BootScene.js',
        '/js/scenes/MenuScene.js',
        '/js/scenes/GameScene.js',
        '/js/scenes/GameOverScene.js',
        '/js/main.js'
      ]

      let loadedCount = 0
      const loadedScripts = new Set()

      scripts.forEach((src) => {
        // Check if script already exists in DOM
        const existing = Array.from(document.querySelectorAll('script')).find(
          s => s.src && (s.src.endsWith(src) || s.src.includes(src.split('/').pop()))
        )
        if (existing || loadedScripts.has(src)) {
          loadedCount++
          if (loadedCount === scripts.length) {
            scriptsLoadedRef.current = true
            initializeGame()
          }
          return
        }

        loadedScripts.add(src)
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
          loadedCount++
          if (loadedCount === scripts.length) {
            scriptsLoadedRef.current = true
            initializeGame()
          }
        }
        script.onerror = () => {
          console.error(`Failed to load script: ${src}`)
          loadedCount++
          if (loadedCount === scripts.length) {
            scriptsLoadedRef.current = true
            initializeGame()
          }
        }
        document.body.appendChild(script)
      })
    }

    function initializeGame() {
      if (gameInitializedRef.current) {
        console.log('Game already initialized, skipping')
        return
      }

      // Wait a bit for everything to be ready
      setTimeout(() => {
        // Initialize Phaser game
        if (window.initPhaserGame && typeof Phaser !== 'undefined') {
          gameInitializedRef.current = true
          gameRef.current = window.initPhaserGame()
          
          // Ensure game container element exists
          const container = document.getElementById('game-container')
          if (!container) {
            console.error('game-container element not found')
            return
          }
          
          // Verify canvas was created
          const canvas = container.querySelector('canvas')
          if (canvas) {
            console.log('Phaser canvas created successfully')
            canvas.style.display = 'block'
            canvas.style.position = 'absolute'
            canvas.style.zIndex = '1'
          } else {
            console.warn('Phaser canvas not found in container')
          }
          
          // Start BootScene which will immediately transition
          if (gameRef.current && gameRef.current.scene) {
            console.log('Phaser game initialized successfully')
            // BootScene will stop immediately, React controls the menu
          }
        } else {
          console.error('initPhaserGame or Phaser not available', {
            hasInitPhaserGame: !!window.initPhaserGame,
            hasPhaser: typeof Phaser !== 'undefined'
          })
        }
      }, 300)
    }

    // Cleanup
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true)
        gameRef.current = null
        gameInitializedRef.current = false
      }
    }
  }, [])

  return (
    <div 
      id="game-container" 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'auto' // Enable pointer events for game interaction
      }} 
    />
  )
}

export default GameContainer

