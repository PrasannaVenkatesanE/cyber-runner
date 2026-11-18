/**
 * Learning Report Generator
 * Generates personalized cybersecurity awareness reports
 */

class LearningReport {
    constructor() {
        this.itemCounts = {
            Social: { good: 0, bad: 0 },
            Malware: { good: 0, bad: 0 },
            Network: { good: 0, bad: 0 },
            Auth: { good: 0, bad: 0 },
            Crypto: { good: 0, bad: 0 }
        };
        
        this.totalGood = 0;
        this.totalBad = 0;
    }
    
    /**
     * Record an item collection
     */
    recordItem(item) {
        const category = item.category;
        if (item.type === 'good') {
            this.itemCounts[category].good++;
            this.totalGood++;
        } else {
            this.itemCounts[category].bad++;
            this.totalBad++;
        }
    }
    
    /**
     * Calculate weakest security area
     */
    getWeakestArea() {
        let weakestArea = null;
        let highestBadRatio = 0;
        
        const categories = ['Social', 'Malware', 'Network', 'Auth', 'Crypto'];
        
        categories.forEach(category => {
            const total = this.itemCounts[category].good + this.itemCounts[category].bad;
            if (total > 0) {
                const badRatio = this.itemCounts[category].bad / total;
                if (badRatio > highestBadRatio) {
                    highestBadRatio = badRatio;
                    weakestArea = category;
                }
            }
        });
        
        // If no interactions, default to first category with bad items
        if (!weakestArea && this.totalBad > 0) {
            for (const category of categories) {
                if (this.itemCounts[category].bad > 0) {
                    weakestArea = category;
                    break;
                }
            }
        }
        
        return weakestArea || 'General';
    }
    
    /**
     * Generate personalized improvement tips
     */
    generateTips(weakestArea) {
        const tips = [];
        
        // Tip 1: Based on weakest area
        switch (weakestArea) {
            case 'Social':
                tips.push('Focus on recognizing social engineering attacks. Verify sender identities, check URLs carefully, and be skeptical of urgent requests.');
                break;
            case 'Malware':
                tips.push('Strengthen your malware defenses. Keep antivirus updated, use backups regularly, and avoid downloading from untrusted sources.');
                break;
            case 'Network':
                tips.push('Improve network security. Use VPNs on public WiFi, close unnecessary ports, and implement proper firewall rules.');
                break;
            case 'Auth':
                tips.push('Enhance authentication practices. Use strong, unique passwords, enable multi-factor authentication, and avoid password reuse.');
                break;
            case 'Crypto':
                tips.push('Improve cryptography knowledge. Use modern encryption algorithms (AES, RSA), properly manage keys, and avoid weak hashing.');
                break;
            default:
                tips.push('Continue learning about cybersecurity best practices. Stay updated on the latest threats and defenses.');
        }
        
        // Tip 2: Based on most common mistake
        const mostBadCategory = this.getMostProblematicCategory();
        if (mostBadCategory && mostBadCategory !== weakestArea) {
            switch (mostBadCategory) {
                case 'Social':
                    tips.push('Practice identifying phishing attempts and social engineering tactics. When in doubt, verify through another channel.');
                    break;
                case 'Malware':
                    tips.push('Be cautious with email attachments and downloads. Scan files before opening and maintain regular backups.');
                    break;
                case 'Network':
                    tips.push('Secure your network connections. Avoid unencrypted WiFi, use VPNs, and implement network monitoring.');
                    break;
                case 'Auth':
                    tips.push('Use a password manager to create and store unique passwords. Enable MFA wherever possible.');
                    break;
                case 'Crypto':
                    tips.push('Understand the difference between encoding and encryption. Use proven cryptographic libraries, not custom solutions.');
                    break;
            }
        }
        
        // Tip 3: General best practice
        if (this.totalBad > this.totalGood) {
            tips.push('You collected more threats than defenses. Focus on preventive measures and security tools to protect your systems.');
        } else {
            tips.push('Great job collecting security tools! Remember to implement a defense-in-depth strategy with multiple security layers.');
        }
        
        // Ensure we have 3 tips
        while (tips.length < 3) {
            tips.push('Stay vigilant and keep learning. Cybersecurity is an ongoing process, not a one-time task.');
        }
        
        return tips.slice(0, 3);
    }
    
    /**
     * Get category with most bad items
     */
    getMostProblematicCategory() {
        let maxBad = 0;
        let problematicCategory = null;
        
        for (const [category, counts] of Object.entries(this.itemCounts)) {
            if (counts.bad > maxBad) {
                maxBad = counts.bad;
                problematicCategory = category;
            }
        }
        
        return problematicCategory;
    }
    
    /**
     * Get threat breakdown
     */
    getThreatBreakdown() {
        return {
            Social: this.itemCounts.Social.bad,
            Malware: this.itemCounts.Malware.bad,
            Network: this.itemCounts.Network.bad,
            Auth: this.itemCounts.Auth.bad,
            Crypto: this.itemCounts.Crypto.bad
        };
    }
    
    /**
     * Get defense breakdown
     */
    getDefenseBreakdown() {
        return {
            Social: this.itemCounts.Social.good,
            Malware: this.itemCounts.Malware.good,
            Network: this.itemCounts.Network.good,
            Auth: this.itemCounts.Auth.good,
            Crypto: this.itemCounts.Crypto.good
        };
    }
    
    /**
     * Reset report data
     */
    reset() {
        this.itemCounts = {
            Social: { good: 0, bad: 0 },
            Malware: { good: 0, bad: 0 },
            Network: { good: 0, bad: 0 },
            Auth: { good: 0, bad: 0 },
            Crypto: { good: 0, bad: 0 }
        };
        this.totalGood = 0;
        this.totalBad = 0;
    }
}

