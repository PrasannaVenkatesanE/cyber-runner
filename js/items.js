/**
 * Cybersecurity Items Configuration
 * All items with their properties: type, category, score impact, risk impact, and educational description
 */

// Prevent duplicate declaration
if (typeof CYBERSECURITY_ITEMS === 'undefined') {
    window.CYBERSECURITY_ITEMS = [
    // ===== BAD ITEMS (Threats & Mistakes) =====
    
    // Social Engineering
    {
        id: 'phishing_link',
        name: 'Phishing Link',
        type: 'bad',
        category: 'Social',
        scoreChange: -50,
        riskChange: 10,
        description: 'Phishing links are fraudulent URLs designed to impersonate legitimate websites and steal your credentials. Attackers often use URL shortening services or similar-looking domains (like "paypa1.com" instead of "paypal.com") to deceive users. When clicked, these links lead to fake login pages that capture usernames, passwords, and other sensitive data. Real-world example: The 2020 Twitter hack used phishing links to compromise high-profile accounts. Best practice: Always hover over links to verify the actual URL, check for HTTPS, and never enter credentials on suspicious pages.',
        color: 0xff0000
    },
    {
        id: 'fake_email',
        name: 'Fake Email',
        type: 'bad',
        category: 'Social',
        scoreChange: -50,
        riskChange: 10,
        description: 'Fake emails use spoofing techniques to make messages appear from trusted sources like banks, colleagues, or service providers. Attackers manipulate email headers to forge sender addresses, making malicious emails look legitimate. These emails often contain urgent requests, fake invoices, or links to malicious websites. The 2016 Hillary Clinton campaign email hack started with a phishing email. Best practices: Verify sender email addresses carefully, watch for spelling errors and suspicious domains, never click links or download attachments from unexpected emails, and contact the sender through a different channel to verify urgent requests.',
        color: 0xff4444
    },
    {
        id: 'social_engineer',
        name: 'Social Engineer',
        type: 'bad',
        category: 'Social',
        scoreChange: -75,
        riskChange: 15,
        description: 'Social engineering attacks manipulate human psychology to trick people into revealing sensitive information or performing actions that compromise security. Attackers impersonate trusted individuals, create false urgency, or exploit human tendencies to help and trust others. These attacks can happen via phone (vishing), email (phishing), or in-person interactions. Famous example: The 2011 RSA Security breach started with a social engineering attack using an Excel file. Best practices: Always verify the identity of anyone requesting sensitive information, be suspicious of urgent requests, implement verification procedures for high-risk actions, and train employees to recognize social engineering tactics.',
        color: 0xff0000
    },
    
    // Malware
    {
        id: 'malware',
        name: 'Malware',
        type: 'bad',
        category: 'Malware',
        scoreChange: -100,
        riskChange: 20,
        description: 'Malware (malicious software) is any program designed to damage, disrupt, or gain unauthorized access to computer systems. It includes viruses, trojans, spyware, ransomware, and other harmful software that can steal data, destroy files, or turn devices into botnets. Malware often spreads through email attachments, infected websites, or removable media. The 2017 WannaCry ransomware attack infected over 300,000 computers worldwide. Best practices: Install and update antivirus software, avoid downloading files from untrusted sources, keep operating systems and software patched, use a firewall, and practice safe browsing habits.',
        color: 0xff0000
    },
    {
        id: 'spyware',
        name: 'Spyware',
        type: 'bad',
        category: 'Malware',
        scoreChange: -80,
        riskChange: 15,
        description: 'Spyware is malicious software that secretly monitors user activities, collects personal information, and tracks browsing habits without consent. It can capture keystrokes (keyloggers), steal passwords, track location, and monitor communications. Spyware often comes bundled with free software downloads or enters through browser vulnerabilities. The Pegasus spyware case revealed how governments used spyware to surveil journalists and activists. Best practices: Use reputable antivirus software with anti-spyware features, be cautious with free software downloads, regularly scan your system, keep browsers updated, and review app permissions on mobile devices.',
        color: 0xff3333
    },
    {
        id: 'ransomware',
        name: 'Ransomware',
        type: 'bad',
        category: 'Malware',
        scoreChange: -150,
        riskChange: 25,
        description: 'Ransomware encrypts victim files and demands payment (usually in cryptocurrency) to restore access, effectively holding data hostage. Attackers use encryption algorithms that make files unrecoverable without the decryption key. Modern ransomware often exfiltrates data before encryption, threatening to publish sensitive information. The 2021 Colonial Pipeline attack disrupted fuel supplies across the U.S. East Coast. Best practices: Maintain regular backups (test restoration), use the 3-2-1 backup strategy (3 copies, 2 different media, 1 offsite), keep systems patched, use email filtering, never pay ransoms (funds criminal activity), and have an incident response plan.',
        color: 0xcc0000
    },
    {
        id: 'usb_trap',
        name: 'USB Trap',
        type: 'bad',
        category: 'Malware',
        scoreChange: -60,
        riskChange: 12,
        description: 'USB traps are malicious USB devices designed to automatically execute malware when plugged into a computer, exploiting the autorun feature in operating systems. These "USB drops" can contain malware, keyloggers, or even function as hardware-based attack devices (like USB Kill devices that deliver electrical surges). Attackers often drop infected USB drives in parking lots, hoping curious employees will plug them in. The 2010 Stuxnet worm spread via infected USB drives. Best practices: Disable autorun features, never plug in unknown USB devices, scan all USB media before use, use USB port blocking devices if needed, and educate users about this threat.',
        color: 0xff6600
    },
    {
        id: 'worm',
        name: 'Worm',
        type: 'bad',
        category: 'Malware',
        scoreChange: -90,
        riskChange: 18,
        description: 'Computer worms are self-replicating malware that spread across networks without human interaction, exploiting vulnerabilities to infect multiple systems rapidly. Unlike viruses, worms don\'t need to attach to existing programs and can spread automatically through network shares, email, or internet connections. Worms can cause denial-of-service attacks, steal data, or create backdoors for attackers. The 2003 SQL Slammer worm infected 75,000 systems in just 10 minutes. Best practices: Keep all systems patched and updated, use network segmentation to limit spread, deploy intrusion detection systems, maintain firewall rules, and have incident response procedures ready.',
        color: 0xff3300
    },
    
    // Network Threats
    {
        id: 'open_wifi',
        name: 'Open WiFi',
        type: 'bad',
        category: 'Network',
        scoreChange: -40,
        riskChange: 8,
        description: 'Open public WiFi networks transmit data without encryption, allowing attackers on the same network to intercept and read your internet traffic using tools like packet sniffers. Attackers can create fake WiFi hotspots with legitimate-sounding names (like "Free Airport WiFi") to trick users into connecting. They can also use "man-in-the-middle" attacks to steal login credentials and personal information. Real-world risk: Banking sessions, email logins, and personal data can be captured. Best practices: Always use a VPN on public WiFi, avoid accessing sensitive accounts on open networks, verify network names with staff, and consider using your mobile hotspot instead.',
        color: 0xff8800
    },
    {
        id: 'open_port',
        name: 'Open Port',
        type: 'bad',
        category: 'Network',
        scoreChange: -60,
        riskChange: 12,
        description: 'Open network ports are network endpoints that accept incoming connections, and when left unnecessarily open, they provide attackers with potential entry points into your system. Attackers scan for open ports to identify running services and exploit their vulnerabilities. Common targets include SSH (port 22), RDP (port 3389), and database ports. The 2017 Equifax breach exploited an unpatched vulnerability on an open Apache Struts port. Best practices: Close all unused ports using firewalls, disable unnecessary services, use port scanning tools to audit open ports, implement network segmentation, and regularly review firewall rules.',
        color: 0xff6600
    },
    {
        id: 'brute_force',
        name: 'Brute Force',
        type: 'bad',
        category: 'Network',
        scoreChange: -70,
        riskChange: 14,
        description: 'Brute force attacks use automated tools to systematically guess passwords by trying millions of common or dictionary-based password combinations. Attackers use powerful computers and botnets to rapidly attempt logins, often targeting SSH, FTP, or web application login pages. These attacks can succeed against weak passwords in minutes or hours. The 2013 Adobe breach exposed 150 million accounts, many with weak passwords vulnerable to brute force. Best practices: Use long, complex passwords (12+ characters), implement account lockout policies after failed attempts, enable rate limiting, use CAPTCHA on login forms, and consider passwordless authentication like MFA.',
        color: 0xff5500
    },
    {
        id: 'data_leak',
        name: 'Data Leak',
        type: 'bad',
        category: 'Network',
        scoreChange: -120,
        riskChange: 20,
        description: 'Data leaks occur when sensitive information is accidentally exposed or intentionally stolen and released publicly. This can happen through misconfigured cloud storage buckets, exposed databases, insider threats, or successful cyberattacks. Leaked data often includes passwords, personal information, financial records, or intellectual property. The 2018 Facebook-Cambridge Analytica scandal involved data leaks affecting 87 million users. Best practices: Implement data classification and encryption, use access controls and least privilege principles, regularly audit data access, secure cloud storage configurations, monitor for exposed data online, and have data breach response procedures ready.',
        color: 0xff0000
    },
    
    // Authentication Mistakes
    {
        id: 'weak_password',
        name: 'Weak Password',
        type: 'bad',
        category: 'Auth',
        scoreChange: -30,
        riskChange: 6,
        description: 'Weak passwords are short, simple, or easily guessable combinations that attackers can crack quickly using brute force or dictionary attacks. Common weak passwords include "password123", "12345678", or personal information like birthdays and pet names. Modern password cracking tools can test millions of combinations per second, making short passwords vulnerable in seconds. Studies show over 50% of users still use weak passwords. Best practices: Create passwords with at least 12 characters, mix uppercase, lowercase, numbers, and symbols, avoid dictionary words and personal information, use passphrases (like "CorrectHorseBatteryStaple!"), and consider password managers to generate strong passwords.',
        color: 0xffaa00
    },
    {
        id: 'password_reuse',
        name: 'Password Reuse',
        type: 'bad',
        category: 'Auth',
        scoreChange: -40,
        riskChange: 8,
        description: 'Password reuse occurs when the same password is used across multiple accounts, creating a "domino effect" where a breach in one service compromises all accounts using that password. Attackers obtain passwords from data breaches and then try them on popular services, a technique called "credential stuffing". Research shows that 65% of people reuse passwords across accounts. Real-world impact: When LinkedIn was breached in 2012, millions of passwords were used to access other services. Best practices: Use unique passwords for every account, especially for email and banking, employ a password manager to track unique passwords, enable two-factor authentication as an additional layer, and monitor if your passwords appear in known breach databases.',
        color: 0xff9900
    },
    {
        id: 'plaintext_password',
        name: 'Plaintext Password',
        type: 'bad',
        category: 'Auth',
        scoreChange: -50,
        riskChange: 10,
        description: 'Storing passwords in plaintext (unencrypted) means passwords are saved exactly as users type them, making them immediately readable if the database is compromised. This is one of the most serious authentication security failures, as any attacker gaining database access instantly has all user credentials. Major breaches like the 2012 LinkedIn hack revealed millions of plaintext passwords. Best practices: Always hash passwords using secure algorithms like bcrypt, Argon2, or PBKDF2, never store passwords in plaintext or reversible encryption, add salt to password hashes to prevent rainbow table attacks, and use established authentication libraries that handle password security correctly.',
        color: 0xff7700
    },
    
    // Cryptography Mistakes
    {
        id: 'base64',
        name: 'Base64 (encoding misuse)',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -60,
        riskChange: 12,
        description: 'Base64 is a binary-to-text encoding scheme, NOT encryption, meaning it provides zero security protection. It simply converts binary data into ASCII characters for transmission but can be decoded by anyone instantly. Using Base64 to "hide" passwords or sensitive data is a critical security mistake, as the data remains completely readable. Real-world impact: Many data breaches have exposed "encrypted" passwords that were actually just Base64 encoded. Best practices: Never use Base64 for security purposes, understand the difference between encoding and encryption, use proper encryption algorithms like AES for sensitive data, and always use established cryptographic libraries rather than DIY solutions.',
        color: 0xff5500
    },
    {
        id: 'caesar_cipher',
        name: 'Caesar Cipher',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -50,
        riskChange: 10,
        description: 'The Caesar cipher is an ancient encryption technique that shifts letters by a fixed number of positions (e.g., A becomes D with shift 3). This cipher is trivially broken through frequency analysis or brute force, as there are only 25 possible shifts. Modern attackers can crack Caesar ciphers instantly using automated tools. Historical ciphers like this have no place in modern security. Best practices: Never use historical or classical ciphers for real security, use modern, proven encryption standards like AES-256, rely on well-tested cryptographic libraries, and remember that security through obscurity is not security at all.',
        color: 0xff6600
    },
    {
        id: 'md5_hash',
        name: 'MD5 Hash',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -70,
        riskChange: 14,
        description: 'MD5 (Message Digest 5) is a cryptographic hash function that is cryptographically broken and should never be used for security purposes. Researchers found collision vulnerabilities in 2004, meaning different inputs can produce the same hash, making it unsuitable for password storage or integrity verification. Attackers can create forged files with the same MD5 hash as legitimate files. Best practices: Use SHA-256 or SHA-3 for hashing, use bcrypt or Argon2 for password hashing, avoid MD5 and SHA-1 completely, and stay informed about cryptographic best practices and deprecated algorithms.',
        color: 0xff4400
    },
    {
        id: 'hardcoded_key',
        name: 'Hardcoded Key',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -80,
        riskChange: 16,
        description: 'Hardcoding encryption keys directly in source code is a severe security vulnerability because anyone with access to the code (including attackers, employees, or through source code leaks) immediately has the keys. Keys stored in code are version-controlled, shared across environments, and cannot be rotated without code changes. The 2013 Adobe breach exposed hardcoded encryption keys. Best practices: Store keys in secure key management systems (like AWS KMS, HashiCorp Vault), use environment variables for non-production, never commit keys to version control, implement key rotation procedures, and use separate keys for each environment (dev, staging, production).',
        color: 0xff3300
    },
    {
        id: 'reused_key',
        name: 'Reused Key',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -70,
        riskChange: 14,
        description: 'Reusing encryption keys across multiple contexts or applications violates the fundamental principle of key management and significantly weakens security. If one system is compromised, all systems using the same key are at risk. Key reuse also makes it harder to isolate and respond to security incidents. Different contexts require different keys to maintain proper security boundaries. Best practices: Generate unique encryption keys for each application, service, or data type, use key derivation functions if needed, implement proper key lifecycle management, and rotate keys regularly according to your security policy.',
        color: 0xff4400
    },
    {
        id: 'homemade_crypto',
        name: 'Homemade Crypto',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -100,
        riskChange: 20,
        description: 'Creating custom encryption algorithms is extremely dangerous because cryptography is extraordinarily difficult to implement correctly, and amateur implementations almost always contain critical vulnerabilities. Professional cryptographers spend years analyzing and testing algorithms before they\'re considered secure. Even experts make mistakes, as seen in numerous broken cryptographic implementations. Best practices: Always use well-tested, proven cryptographic algorithms (AES, RSA, ECC), rely on established cryptographic libraries from reputable sources, never invent your own cryptographic schemes, and follow the principle: "Don\'t roll your own crypto" - it\'s one of the most critical security rules.',
        color: 0xff0000
    },
    {
        id: 'no_salt',
        name: 'No Salt',
        type: 'bad',
        category: 'Crypto',
        scoreChange: -60,
        riskChange: 12,
        description: 'Hashing passwords without salt (random data added before hashing) makes them vulnerable to rainbow table attacks, where attackers use precomputed hash tables to quickly reverse password hashes. Without salt, identical passwords produce identical hashes, allowing attackers to identify common passwords instantly. Real-world impact: The 2012 LinkedIn breach exposed unsalted password hashes, making millions recoverable. Best practices: Always use cryptographically random salts for each password, combine salt with the password before hashing, store salts alongside hashes (they don\'t need to be secret), and use appropriate hashing algorithms like bcrypt or Argon2 that include salting automatically.',
        color: 0xff5500
    },
    
    // ===== GOOD ITEMS (Defenses & Best Practices) =====
    
    // Defenses
    {
        id: 'antivirus',
        name: 'Antivirus',
        type: 'good',
        category: 'Malware',
        scoreChange: 80,
        riskChange: -12,
        description: 'Antivirus software is essential security software that scans, detects, and removes malicious software including viruses, trojans, spyware, and ransomware. Modern antivirus uses signature-based detection, heuristic analysis, and machine learning to identify threats. It provides real-time protection by monitoring system activity and blocking suspicious files before they execute. Studies show antivirus prevents 90%+ of known malware infections. Best practices: Keep antivirus definitions updated daily, enable real-time scanning, schedule regular full system scans, choose reputable antivirus solutions, and complement with endpoint detection and response (EDR) tools for advanced threats.',
        color: 0x00ff00
    },
    {
        id: 'backup',
        name: 'Backup',
        type: 'good',
        category: 'Malware',
        scoreChange: 100,
        riskChange: -15,
        description: 'Regular backups create copies of your data that can restore systems after ransomware attacks, hardware failures, or accidental deletions. The 3-2-1 backup strategy (3 copies total, 2 different media types, 1 offsite copy) ensures redundancy and disaster recovery capability. Automated backups eliminate human error, while offline backups protect against ransomware that encrypts network drives. Organizations with tested backup procedures can restore operations quickly without paying ransoms. Best practices: Automate backup schedules, test restoration regularly, keep backups offline or air-gapped, encrypt backup data, use multiple backup locations, and document recovery procedures.',
        color: 0x00cc00
    },
    {
        id: 'security_training',
        name: 'Security Training',
        type: 'good',
        category: 'Social',
        scoreChange: 60,
        riskChange: -10,
        description: 'Security awareness training educates users about cybersecurity threats, social engineering tactics, and safe computing practices, making them the first line of defense. Training programs teach employees to recognize phishing emails, suspicious links, and social engineering attempts through interactive simulations and real-world examples. Research shows that organizations with regular security training reduce phishing susceptibility by 60%. Best practices: Conduct training quarterly or more frequently, use simulated phishing campaigns, make training engaging and relevant, include real-world examples, test knowledge with assessments, and keep training updated with current threats. Remember: humans are often the weakest security link, so education is crucial.',
        color: 0x00ff88
    },
    
    // Authentication Best Practices
    {
        id: 'strong_password',
        name: 'Strong Password',
        type: 'good',
        category: 'Auth',
        scoreChange: 40,
        riskChange: -6,
        description: 'Strong passwords are long (12+ characters), complex (mixing uppercase, lowercase, numbers, symbols), and unique to each account. They resist brute force attacks because the number of possible combinations makes them computationally infeasible to crack. A 12-character password with mixed character types has 95^12 possible combinations, taking centuries to crack even with powerful computers. Best practices: Use passphrases (like "CorrectHorseBatteryStaple!") that are memorable but strong, avoid dictionary words and personal information, make passwords at least 12 characters long, and use a password manager to generate and store strong passwords securely.',
        color: 0x00ff00
    },
    {
        id: 'password_manager',
        name: 'Password Manager',
        type: 'good',
        category: 'Auth',
        scoreChange: 70,
        riskChange: -10,
        description: 'Password managers securely generate, store, and autofill unique passwords for all your accounts, eliminating password reuse and the need to remember multiple complex passwords. They encrypt password databases with a master password and use zero-knowledge architecture, meaning even the service provider cannot access your passwords. Modern password managers also detect compromised passwords from data breaches. Best practices: Choose reputable password managers (1Password, Bitwarden, LastPass), use a strong master password, enable two-factor authentication on the password manager, regularly sync across devices, and use the built-in password generator for maximum security.',
        color: 0x00cc00
    },
    {
        id: 'mfa_token',
        name: 'MFA Token',
        type: 'good',
        category: 'Auth',
        scoreChange: 90,
        riskChange: -14,
        description: 'Multi-Factor Authentication (MFA) requires users to provide two or more verification factors (something you know like a password, something you have like a phone, something you are like biometrics) to access accounts. This adds a critical security layer because even if passwords are compromised, attackers cannot access accounts without the second factor. Microsoft research shows MFA prevents 99.9% of automated attacks. Best practices: Enable MFA on all important accounts (email, banking, cloud services), prefer authenticator apps over SMS (more secure), use hardware security keys for high-security accounts, and have backup codes stored securely.',
        color: 0x00ff88
    },
    {
        id: 'account_lockout',
        name: 'Account Lockout',
        type: 'good',
        category: 'Auth',
        scoreChange: 50,
        riskChange: -8,
        description: 'Account lockout policies automatically disable user accounts after a specified number of failed login attempts, preventing brute force attacks where attackers try thousands of password combinations. Lockouts can be temporary (30 minutes) or permanent (requiring admin intervention). This security control significantly slows attackers and alerts administrators to potential attacks. Best practices: Configure lockout after 5-10 failed attempts, use temporary lockouts (15-30 minutes) to avoid user frustration while preventing attacks, implement progressive delays, log lockout events for security monitoring, and balance security with usability.',
        color: 0x00ff66
    },
    {
        id: 'least_privilege',
        name: 'Least Privilege',
        type: 'good',
        category: 'Auth',
        scoreChange: 60,
        riskChange: -10,
        description: 'The principle of least privilege grants users and processes only the minimum permissions necessary to perform their functions, limiting the potential damage from compromised accounts. This reduces attack surface by ensuring that if an account is breached, attackers cannot access sensitive data or systems beyond what\'s needed. This principle applies to user accounts, service accounts, and application permissions. Best practices: Regularly audit user permissions, remove unnecessary admin rights, use role-based access control (RBAC), implement just-in-time (JIT) access for temporary elevated permissions, and review and revoke unused access regularly.',
        color: 0x00ff77
    },
    
    // Network Security
    {
        id: 'firewall',
        name: 'Firewall',
        type: 'good',
        category: 'Network',
        scoreChange: 80,
        riskChange: -12,
        description: 'Firewalls are network security devices that monitor and filter incoming and outgoing network traffic based on predefined security rules, acting as barriers between trusted internal networks and untrusted external networks. They can be hardware-based (network firewalls) or software-based (host firewalls), and use techniques like packet filtering, stateful inspection, and application-layer filtering. Firewalls are fundamental network security controls that prevent unauthorized access and block malicious traffic. Best practices: Use both network and host-based firewalls, follow the principle of deny-by-default (block all, allow specific), regularly review and update firewall rules, close unnecessary ports, and monitor firewall logs for suspicious activity.',
        color: 0x00ff00
    },
    {
        id: 'ids_sensor',
        name: 'IDS Sensor',
        type: 'good',
        category: 'Network',
        scoreChange: 70,
        riskChange: -11,
        description: 'Intrusion Detection Systems (IDS) monitor network traffic and system activities for suspicious patterns that may indicate security threats or policy violations. IDS sensors analyze network packets, log files, and system events to detect malware, unauthorized access attempts, and other security incidents. Unlike firewalls that block traffic, IDS alerts administrators to potential threats. Modern IDS use signature-based detection (known attack patterns) and anomaly-based detection (unusual behavior). Best practices: Deploy IDS sensors at network entry points, regularly update signature databases, tune IDS to reduce false positives, correlate IDS alerts with other security tools, and have incident response procedures ready for when threats are detected.',
        color: 0x00ff66
    },
    {
        id: 'vpn',
        name: 'VPN',
        type: 'good',
        category: 'Network',
        scoreChange: 60,
        riskChange: -9,
        description: 'A Virtual Private Network (VPN) creates an encrypted tunnel between your device and a remote server, protecting your internet traffic from interception on public networks. VPNs encrypt all data passing through them, making it unreadable to attackers on public WiFi or your ISP. They also mask your IP address and location, providing privacy benefits. VPNs are essential for remote workers and anyone using public WiFi networks. Best practices: Use reputable VPN services with strong encryption (OpenVPN, WireGuard), verify VPN providers\' no-logging policies, keep VPN clients updated, connect to VPNs before accessing sensitive data on public networks, and consider enterprise VPNs for business use.',
        color: 0x00ff88
    },
    {
        id: 'closed_port',
        name: 'Closed Port',
        type: 'good',
        category: 'Network',
        scoreChange: 50,
        riskChange: -8,
        description: 'Closed network ports are endpoints that do not accept incoming connections, meaning they cannot be exploited by attackers scanning for vulnerabilities. Keeping unnecessary ports closed reduces attack surface by eliminating potential entry points. This follows the security principle of minimizing exposed services - only open ports required for legitimate services to function. Best practices: Audit open ports regularly using port scanning tools, close all unnecessary ports using firewall rules, disable unused services that listen on ports, document which ports are open and why, and review port configurations after system changes.',
        color: 0x00ff66
    },
    
    // System Security
    {
        id: 'patch_update',
        name: 'Patch Update',
        type: 'good',
        category: 'Malware',
        scoreChange: 70,
        riskChange: -11,
        description: 'Security patches are software updates that fix discovered vulnerabilities, bugs, and security flaws in operating systems, applications, and firmware. Keeping software patched is critical because attackers actively exploit known vulnerabilities - many major breaches occurred because systems weren\'t patched in time. The 2017 WannaCry ransomware attack exploited a vulnerability for which a patch existed months earlier. Best practices: Enable automatic updates where possible, establish patch management procedures, prioritize critical security patches, test patches in non-production environments first, maintain an inventory of all software, and monitor for security advisories from vendors.',
        color: 0x00ff00
    },
    {
        id: 'secure_configuration',
        name: 'Secure Configuration',
        type: 'good',
        category: 'Network',
        scoreChange: 60,
        riskChange: -10,
        description: 'Secure configuration involves hardening systems, applications, and networks by disabling unnecessary features, removing default credentials, and applying security best practices from vendor documentation. Default configurations often prioritize ease of use over security, leaving systems vulnerable out of the box. Misconfigured cloud storage buckets, databases, and web servers are common attack vectors. Best practices: Follow security configuration guides (like CIS Benchmarks), change all default passwords, disable unnecessary services and ports, implement least privilege access, use security configuration scanners, and regularly audit system configurations against security baselines.',
        color: 0x00ff77
    },
    {
        id: 'incident_response',
        name: 'Incident Response',
        type: 'good',
        category: 'Malware',
        scoreChange: 80,
        riskChange: -12,
        description: 'Incident response plans provide structured procedures for detecting, responding to, and recovering from security breaches, minimizing damage and recovery time. A well-prepared incident response team can contain threats quickly, preserve evidence, and restore operations efficiently. The NIST incident response framework includes preparation, detection, containment, eradication, recovery, and post-incident lessons learned. Best practices: Develop detailed incident response procedures, establish an incident response team with clear roles, conduct regular tabletop exercises, maintain incident response toolkits, establish communication procedures for stakeholders, and document lessons learned after incidents to improve future responses.',
        color: 0x00cc00
    },
    
    // Cryptography Best Practices
    {
        id: 'aes_encryption',
        name: 'AES Encryption',
        type: 'good',
        category: 'Crypto',
        scoreChange: 90,
        riskChange: -14,
        description: 'Advanced Encryption Standard (AES) is a symmetric encryption algorithm that encrypts and decrypts data using the same key, widely adopted as the global standard for secure data encryption. AES-256 uses 256-bit keys and is considered secure against brute force attacks even with quantum computers in the foreseeable future. It\'s used for encrypting data at rest (hard drives, databases) and in various secure protocols. AES is fast, efficient, and has been thoroughly analyzed by cryptographers worldwide. Best practices: Use AES-256 for sensitive data, implement proper key management, use established cryptographic libraries (don\'t implement yourself), combine with secure modes like AES-GCM for authenticated encryption, and keep encryption keys secure and separate from encrypted data.',
        color: 0x00ff00
    },
    {
        id: 'rsa_key',
        name: 'RSA Key',
        type: 'good',
        category: 'Crypto',
        scoreChange: 85,
        riskChange: -13,
        description: 'RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem that uses pairs of keys - a public key for encryption and a private key for decryption. This asymmetric encryption enables secure key exchange, digital signatures, and encryption without requiring both parties to share a secret key beforehand. RSA keys are typically 2048 or 4096 bits for security, with larger keys being more secure but slower. Best practices: Use RSA-2048 minimum (RSA-4096 for long-term security), protect private keys carefully (use hardware security modules if possible), never share private keys, implement proper key generation using secure random number generators, and use RSA for key exchange, not bulk data encryption (AES is better for that).',
        color: 0x00ff66
    },
    {
        id: 'digital_signature',
        name: 'Digital Signature',
        type: 'good',
        category: 'Crypto',
        scoreChange: 80,
        riskChange: -12,
        description: 'Digital signatures use public-key cryptography to provide authentication, integrity, and non-repudiation for digital documents and messages. A sender signs data with their private key, and recipients verify the signature using the sender\'s public key, proving the data came from the claimed sender and hasn\'t been altered. Digital signatures are legally binding in many jurisdictions and are essential for secure communications, software distribution, and electronic contracts. Best practices: Use established signature algorithms like RSA-PSS or ECDSA, protect private signing keys with hardware security modules, maintain proper certificate management, verify signatures before trusting data, and implement certificate revocation checking.',
        color: 0x00ff88
    },
    {
        id: 'salted_hash',
        name: 'Salted Hash',
        type: 'good',
        category: 'Crypto',
        scoreChange: 70,
        riskChange: -11,
        description: 'Salting hashes means adding random data (salt) to input before hashing, ensuring that identical passwords produce different hashes. This prevents rainbow table attacks where attackers use precomputed hash tables to quickly reverse password hashes. Each password should have a unique, randomly generated salt, and salts are stored alongside hashes (they don\'t need to be secret). Best practices: Generate cryptographically random salts for each password (at least 16 bytes), store salts alongside password hashes, use appropriate hashing algorithms like bcrypt or Argon2 that include salting automatically, and never reuse salts across passwords.',
        color: 0x00ff66
    },
    {
        id: 'sha256',
        name: 'SHA-256',
        type: 'good',
        category: 'Crypto',
        scoreChange: 75,
        riskChange: -12,
        description: 'SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that produces a 256-bit hash value from input data. It\'s part of the SHA-2 family and is currently considered cryptographically secure for most applications. SHA-256 is used for data integrity verification, digital signatures, blockchain technology (Bitcoin), and password hashing (though bcrypt/Argon2 are better for passwords). It\'s designed to be one-way (cannot reverse the hash) and collision-resistant. Best practices: Use SHA-256 for data integrity and digital signatures, for password hashing prefer bcrypt or Argon2, verify hash implementations come from trusted cryptographic libraries, and stay informed about potential future vulnerabilities (SHA-2 is secure now, but quantum computing may change this).',
        color: 0x00ff00
    },
    {
        id: 'hmac',
        name: 'HMAC',
        type: 'good',
        category: 'Crypto',
        scoreChange: 80,
        riskChange: -12,
        description: 'HMAC (Hash-based Message Authentication Code) combines a cryptographic hash function (like SHA-256) with a secret key to verify both the authenticity and integrity of a message. Unlike regular hashes, HMAC requires knowledge of the secret key to produce a valid authentication code, preventing attackers from tampering with messages. HMAC is widely used in API authentication, secure communications, and data integrity verification. Best practices: Use HMAC-SHA256 or stronger variants, protect the secret key carefully (never transmit it with the message), use different keys for different contexts, and verify HMAC codes before trusting received data.',
        color: 0x00ff77
    },
    {
        id: 'tls',
        name: 'TLS',
        type: 'good',
        category: 'Crypto',
        scoreChange: 85,
        riskChange: -13,
        description: 'Transport Layer Security (TLS) is the cryptographic protocol that encrypts data in transit between clients and servers, protecting internet communications from interception and tampering. TLS provides encryption (data privacy), authentication (verify server identity), and integrity (detect tampering). It\'s used for HTTPS websites, email, VPNs, and any secure network communication. TLS 1.3 is the latest version with improved security and performance. Best practices: Use TLS 1.3 or TLS 1.2 minimum, disable older insecure versions (SSL 3.0, TLS 1.0, TLS 1.1), use strong cipher suites, properly configure certificates (avoid self-signed in production), and regularly update TLS libraries to patch vulnerabilities.',
        color: 0x00ff00
    },
    {
        id: 'key_management',
        name: 'Key Management',
        type: 'good',
        category: 'Crypto',
        scoreChange: 90,
        riskChange: -14,
        description: 'Proper cryptographic key management involves secure generation, storage, distribution, rotation, and disposal of encryption keys throughout their lifecycle. Weak key management can render strong encryption useless - compromised keys mean compromised data. Key management includes using hardware security modules (HSMs) for key storage, implementing key rotation policies, securely backing up keys, and properly destroying keys when no longer needed. Best practices: Store keys in secure key management systems (AWS KMS, HashiCorp Vault, hardware HSMs), implement key rotation policies (rotate keys regularly or after compromise), separate key storage from encrypted data, use different keys for different purposes, implement proper access controls for keys, and securely destroy keys when retired.',
        color: 0x00cc00
    },
    
    // ===== NEW CATEGORY: Pentesting Tools (Good Items) =====
    {
        id: 'kali_linux',
        name: 'Kali Linux',
        type: 'good',
        category: 'Pentest',
        scoreChange: 120,
        riskChange: -16,
        description: 'Kali Linux is a Debian-based Linux distribution specifically designed for digital forensics and penetration testing. It comes pre-installed with over 600 security tools including network analyzers, password crackers, exploitation frameworks, and forensic tools. Security professionals use Kali Linux for authorized security testing, vulnerability assessments, and security research. Real-world usage: The 2017 Equifax breach investigation used Kali Linux tools for forensic analysis. Best practices: Only use Kali Linux for authorized security testing, keep the system updated regularly, understand legal and ethical boundaries before using tools, and always obtain written permission before testing systems you don\'t own.',
        color: 0x00ff00
    },
    {
        id: 'burp_suite',
        name: 'Burp Suite',
        type: 'good',
        category: 'Pentest',
        scoreChange: 110,
        riskChange: -15,
        description: 'Burp Suite is a comprehensive web application security testing platform used by security professionals to identify vulnerabilities in web applications. It includes tools for intercepting and modifying HTTP requests, scanning for vulnerabilities, and automating security testing. Burp Suite helps discover SQL injection, XSS, CSRF, authentication flaws, and other web application security issues. Professional penetration testers rely on Burp Suite for thorough web app assessments. Best practices: Use Burp Suite only for authorized security testing, configure it properly for your testing environment, keep plugins updated, and document findings clearly for remediation teams.',
        color: 0x00ff66
    },
    {
        id: 'wireshark',
        name: 'Wireshark',
        type: 'good',
        category: 'Pentest',
        scoreChange: 105,
        riskChange: -14,
        description: 'Wireshark is a powerful network protocol analyzer that allows security professionals to capture and analyze network traffic in real-time. It can decode over 1000 network protocols and helps identify security issues like unencrypted transmissions, suspicious network activity, and protocol vulnerabilities. Network administrators and security analysts use Wireshark for troubleshooting, network forensics, and security monitoring. Best practices: Only capture traffic on networks you have permission to monitor, use capture filters to reduce data volume, protect captured data containing sensitive information, and use it for authorized security assessments and network diagnostics.',
        color: 0x00ff88
    },
    {
        id: 'metasploit',
        name: 'Metasploit',
        type: 'good',
        category: 'Pentest',
        scoreChange: 115,
        riskChange: -15,
        description: 'Metasploit is a penetration testing framework that provides security professionals with tools to develop, test, and execute exploit code. It includes a vast database of exploits, payloads, and auxiliary modules for testing system vulnerabilities. Security teams use Metasploit to verify that systems are properly patched and configured, and to test security controls effectiveness. The framework helps simulate real-world attacks in controlled environments. Best practices: Use Metasploit only in authorized testing environments, understand each exploit before using it, always test on isolated networks when possible, and ensure proper documentation and reporting of findings.',
        color: 0x00ff00
    },
    {
        id: 'nmap',
        name: 'Nmap',
        type: 'good',
        category: 'Pentest',
        scoreChange: 100,
        riskChange: -13,
        description: 'Nmap (Network Mapper) is a free and open-source network discovery and security auditing tool. It can discover hosts and services on a computer network, identify open ports, detect operating systems, and find vulnerabilities. Security professionals use Nmap for network inventory, security audits, and vulnerability scanning. It\'s essential for understanding network topology and identifying potential security risks. Best practices: Always obtain proper authorization before scanning networks, use stealth scanning techniques when appropriate, interpret results carefully as false positives can occur, and use Nmap scripts responsibly and ethically.',
        color: 0x00ff44
    },
    {
        id: 'john_ripper',
        name: 'John the Ripper',
        type: 'good',
        category: 'Pentest',
        scoreChange: 95,
        riskChange: -12,
        description: 'John the Ripper is a popular password cracking tool used by security professionals to test password strength and recover forgotten passwords in authorized contexts. It supports various hash formats and can perform dictionary, brute-force, and hybrid attacks. Security teams use it to verify password policies effectiveness and recover access to systems when authorized. Best practices: Only use John the Ripper on password hashes you have authorization to test, ensure legal compliance when password cracking, test against company password policies to improve security, and never use it maliciously to access unauthorized systems.',
        color: 0x00ff55
    },
    {
        id: 'aircrack_ng',
        name: 'Aircrack-ng',
        type: 'good',
        category: 'Pentest',
        scoreChange: 90,
        riskChange: -11,
        description: 'Aircrack-ng is a suite of tools for assessing WiFi network security. It can capture WiFi packets, perform dictionary attacks on WEP and WPA/WPA2-PSK keys, and test WiFi network security. Security professionals use Aircrack-ng to evaluate the security of wireless networks and ensure proper encryption is in place. Best practices: Only use Aircrack-ng on wireless networks you own or have explicit written permission to test, understand that capturing WiFi traffic may have legal implications, use it to verify WPA3 or strong WPA2 implementation, and always test in controlled environments.',
        color: 0x00ff33
    },
    {
        id: 'owasp_zap',
        name: 'OWASP ZAP',
        type: 'good',
        category: 'Pentest',
        scoreChange: 105,
        riskChange: -14,
        description: 'OWASP ZAP (Zed Attack Proxy) is an open-source web application security scanner developed by the OWASP Foundation. It helps find security vulnerabilities in web applications through automated scanning and manual testing capabilities. ZAP can detect common vulnerabilities like SQL injection, XSS, CSRF, and insecure direct object references. It\'s widely used in the development lifecycle to integrate security testing. Best practices: Integrate ZAP into CI/CD pipelines for automated security scanning, configure scan policies according to your application needs, review and verify findings before reporting, and use both automated and manual testing approaches for comprehensive coverage.',
        color: 0x00ff66
    },
    
    // ===== NEW CATEGORY: Network Concepts (Good Items) =====
    {
        id: 'https',
        name: 'HTTPS',
        type: 'good',
        category: 'Network',
        scoreChange: 85,
        riskChange: -12,
        description: 'HTTPS (HyperText Transfer Protocol Secure) encrypts data transmitted between browsers and websites using TLS/SSL encryption, preventing eavesdropping and man-in-the-middle attacks. It uses certificates to verify website authenticity and protects sensitive information like passwords, credit cards, and personal data. Modern web browsers flag non-HTTPS sites as insecure. Best practices: Always use HTTPS for all websites, especially those handling sensitive data, implement HSTS (HTTP Strict Transport Security) headers, use strong TLS configurations (TLS 1.2 or higher), obtain valid SSL/TLS certificates from trusted certificate authorities, and regularly renew certificates before expiration.',
        color: 0x00ff00
    },
    {
        id: 'vpn',
        name: 'VPN',
        type: 'good',
        category: 'Network',
        scoreChange: 80,
        riskChange: -11,
        description: 'A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a remote server, masking your IP address and encrypting internet traffic. VPNs protect data when using public WiFi, enable secure remote access to corporate networks, and help maintain privacy. They\'re essential for remote workers and anyone concerned about online privacy. Best practices: Choose reputable VPN providers with no-logs policies, use VPNs especially on public WiFi networks, prefer VPN protocols like WireGuard or OpenVPN, verify VPN providers\' security practices and jurisdiction, and consider self-hosted VPNs for maximum control.',
        color: 0x00ff44
    },
    {
        id: 'firewall',
        name: 'Firewall',
        type: 'good',
        category: 'Network',
        scoreChange: 90,
        riskChange: -13,
        description: 'Firewalls are network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as barriers between trusted internal networks and untrusted external networks, preventing unauthorized access and blocking malicious traffic. Both hardware and software firewalls are essential components of network security. Best practices: Configure firewall rules following the principle of least privilege (default deny), regularly review and update firewall rules, enable logging and monitoring, implement defense in depth with multiple firewall layers, and test firewall rules periodically to ensure effectiveness.',
        color: 0x00ff55
    },
    {
        id: 'ssl_tls',
        name: 'SSL/TLS',
        type: 'good',
        category: 'Network',
        scoreChange: 88,
        riskChange: -12,
        description: 'SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that provide secure communication over networks. TLS is the modern successor to SSL and is used to encrypt web traffic, email, and other network communications. These protocols ensure data confidentiality, integrity, and authentication between communicating parties. Best practices: Use TLS 1.2 or TLS 1.3 (never SSL or early TLS versions), configure servers to disable weak cipher suites, implement proper certificate management, monitor for certificate expiration, and use HSTS to enforce secure connections.',
        color: 0x00ff66
    },
    {
        id: 'dns_over_https',
        name: 'DNS over HTTPS',
        type: 'good',
        category: 'Network',
        scoreChange: 75,
        riskChange: -10,
        description: 'DNS over HTTPS (DoH) encrypts DNS queries by sending them over HTTPS instead of plaintext, preventing DNS spoofing and protecting user privacy. Traditional DNS queries are unencrypted, allowing ISPs and attackers to see which websites users visit. DoH prevents this surveillance and tampering. Best practices: Enable DoH in browsers and applications when available, use trusted DoH providers like Cloudflare or Quad9, verify DoH is working correctly, be aware that some networks may block DoH, and consider DNS over TLS (DoT) as an alternative.',
        color: 0x00ff77
    },
    {
        id: 'network_segmentation',
        name: 'Network Segmentation',
        type: 'good',
        category: 'Network',
        scoreChange: 95,
        riskChange: -14,
        description: 'Network segmentation divides a network into smaller, isolated segments to limit the spread of security breaches and improve network performance. If an attacker compromises one segment, segmentation prevents lateral movement to other network areas. This is especially important for protecting sensitive systems like payment processing or medical records. Best practices: Implement micro-segmentation for granular control, isolate critical systems in separate network segments, use VLANs and firewalls to enforce segmentation, regularly audit network segmentation rules, and apply the principle of least privilege to network access.',
        color: 0x00ff00
    },
    {
        id: 'idps',
        name: 'IDPS',
        type: 'good',
        category: 'Network',
        scoreChange: 100,
        riskChange: -15,
        description: 'IDPS (Intrusion Detection and Prevention System) monitors network and system activities for malicious activities or policy violations. IDS detects and logs suspicious activity, while IPS can also block threats in real-time. These systems use signature-based and behavior-based detection to identify attacks like denial-of-service, malware, and unauthorized access attempts. Best practices: Deploy IDPS at strategic network points, regularly update threat signatures, tune IDPS rules to reduce false positives, integrate with SIEM systems for centralized monitoring, and review IDPS alerts promptly to respond to threats.',
        color: 0x00ff44
    },
    {
        id: 'packet_filtering',
        name: 'Packet Filtering',
        type: 'good',
        category: 'Network',
        scoreChange: 85,
        riskChange: -12,
        description: 'Packet filtering examines packets at the network layer and decides whether to allow or block them based on predefined rules. Firewalls use packet filtering to control traffic flow by examining source/destination IP addresses, ports, and protocols. This is a fundamental network security technique that forms the first line of defense. Best practices: Use stateful packet inspection for better security, configure rules to default deny and explicitly allow needed traffic, regularly review and update filtering rules, monitor filtered traffic for patterns, and combine with other security measures for defense in depth.',
        color: 0x00ff55
    },
    
    // ===== Network Concepts (Bad Items) =====
    {
        id: 'http_plain',
        name: 'HTTP (Plain)',
        type: 'bad',
        category: 'Network',
        scoreChange: -70,
        riskChange: 12,
        description: 'Plain HTTP transmits data without encryption, making all information visible to anyone who intercepts the traffic. This includes passwords, credit card numbers, and other sensitive data transmitted between browsers and websites. Attackers can easily capture and read unencrypted HTTP traffic on public networks or compromised networks. The 2014 Firesheep tool demonstrated how easy it is to hijack HTTP sessions. Best practices: Never use HTTP for websites handling sensitive data, redirect all HTTP traffic to HTTPS, implement HSTS to prevent downgrade attacks, use HTTPS-only cookies, and regularly audit your infrastructure to ensure no HTTP endpoints exist.',
        color: 0xff3333
    },
    {
        id: 'open_ports',
        name: 'Open Ports',
        type: 'bad',
        category: 'Network',
        scoreChange: -65,
        riskChange: 11,
        description: 'Unnecessary open ports expose services to the internet, creating attack surfaces for attackers to exploit. Each open port represents a potential entry point, and if the service has vulnerabilities, it can be compromised. Attackers use port scanners to discover open ports and then attempt to exploit the services running on them. Best practices: Close all unnecessary ports, use firewalls to block unused ports, regularly scan your network for open ports, ensure services listening on ports are properly secured and updated, use port knocking or VPNs for remote access instead of exposing ports directly.',
        color: 0xff4444
    },
    {
        id: 'packet_sniffing',
        name: 'Packet Sniffing',
        type: 'bad',
        category: 'Network',
        scoreChange: -80,
        riskChange: 14,
        description: 'Packet sniffing involves intercepting and analyzing network traffic without authorization, which attackers use to steal sensitive information like passwords, credit card numbers, and personal data. On unencrypted networks (especially public WiFi), attackers can easily capture packets using tools like Wireshark. The 2017 KRACK attack exploited WiFi encryption weaknesses to enable packet sniffing. Best practices: Always use encrypted connections (HTTPS, VPN) especially on public networks, avoid entering sensitive information on public WiFi without VPN, use network encryption (WPA3), monitor for unauthorized network monitoring devices, and implement network segmentation to limit sniffing impact.',
        color: 0xff0000
    },
    {
        id: 'port_scanning',
        name: 'Port Scanning',
        type: 'bad',
        category: 'Network',
        scoreChange: -75,
        riskChange: 13,
        description: 'Malicious port scanning involves systematically probing target systems to discover open ports and services, which attackers use to map networks and identify vulnerabilities before launching attacks. While port scanning tools like Nmap have legitimate security uses, unauthorized port scanning is often the first step in a cyber attack. Attackers use the information to plan targeted exploits. Best practices: Monitor for and block unauthorized port scans, use intrusion detection systems to detect scanning activity, limit network exposure through firewalls, implement rate limiting to slow down scans, and regularly audit your own systems to identify and secure open ports.',
        color: 0xff2200
    },
    {
        id: 'mitm_attack',
        name: 'Man-in-the-Middle',
        type: 'bad',
        category: 'Network',
        scoreChange: -100,
        riskChange: 18,
        description: 'Man-in-the-Middle (MITM) attacks intercept communications between two parties, allowing attackers to read, modify, or inject data into the communication stream. Attackers position themselves between the victim and the intended destination, often using techniques like ARP spoofing or fake WiFi access points. This can lead to stolen credentials, session hijacking, and data manipulation. Best practices: Always use encrypted connections (HTTPS, TLS), verify SSL/TLS certificates and watch for certificate warnings, use VPNs on untrusted networks, implement certificate pinning for mobile apps, verify WiFi network authenticity before connecting, and use multi-factor authentication to prevent credential theft.',
        color: 0xff0000
    },
    {
        id: 'dns_poisoning',
        name: 'DNS Poisoning',
        type: 'bad',
        category: 'Network',
        scoreChange: -85,
        riskChange: 15,
        description: 'DNS poisoning (also called DNS spoofing) corrupts DNS cache with false information, redirecting users to malicious websites controlled by attackers. Victims think they\'re visiting legitimate sites but are actually on fake sites designed to steal credentials or install malware. This attack can redirect entire organizations to malicious servers. Best practices: Use DNS over HTTPS (DoH) or DNS over TLS (DoT) to encrypt DNS queries, use reputable DNS servers (like Cloudflare 1.1.1.1 or Google 8.8.8.8), enable DNSSEC (DNS Security Extensions) when available, monitor DNS queries for suspicious redirects, and verify SSL certificates to detect spoofed sites.',
        color: 0xff1100
    },
    {
        id: 'arp_spoofing',
        name: 'ARP Spoofing',
        type: 'bad',
        category: 'Network',
        scoreChange: -90,
        riskChange: 16,
        description: 'ARP (Address Resolution Protocol) spoofing sends fake ARP messages to associate the attacker\'s MAC address with a legitimate IP address on the network. This allows attackers to intercept network traffic intended for other devices, enabling man-in-the-middle attacks. ARP spoofing is commonly used on local networks to capture traffic and steal credentials. Best practices: Use static ARP entries for critical devices, monitor ARP tables for unauthorized changes, implement network segmentation to limit ARP spoofing impact, use VPNs or encrypted connections, enable DHCP snooping on network switches, and deploy intrusion detection systems that can detect ARP spoofing.',
        color: 0xff0000
    },
    
    // ===== Encoding Concepts (Good Items) =====
    {
        id: 'base64_encoding',
        name: 'Base64 Encoding',
        type: 'good',
        category: 'Encoding',
        scoreChange: 60,
        riskChange: -8,
        description: 'Base64 encoding converts binary data into ASCII text format, making it safe to transmit over text-based protocols like email, HTTP, or XML. It\'s commonly used for encoding email attachments, data URLs in web pages, and storing binary data in JSON or XML. Base64 is not encryption - it\'s encoding (easily reversible). Best practices: Use Base64 for data transport and storage format conversion, never use Base64 as a security measure (it\'s not encryption), encode sensitive data before Base64 encoding if needed, understand that Base64 increases data size by about 33%, and use Base64 for its intended purpose of data format conversion.',
        color: 0x00ff88
    },
    {
        id: 'url_encoding',
        name: 'URL Encoding',
        type: 'good',
        category: 'Encoding',
        scoreChange: 55,
        riskChange: -7,
        description: 'URL encoding (percent encoding) safely encodes special characters in URLs so they can be transmitted over the internet without causing parsing errors. Characters like spaces, ampersands, and equals signs are encoded as percent-encoded sequences (e.g., %20 for space). This prevents injection attacks and ensures proper URL parsing. Best practices: Always URL-encode user input before including it in URLs, use proper URL encoding libraries (don\'t manually encode), encode all query parameters and path segments properly, validate decoded input server-side, and understand the difference between URL encoding and HTML encoding.',
        color: 0x00ff77
    },
    
    // ===== Encoding Concepts (Bad Items) =====
    {
        id: 'double_encoding',
        name: 'Double Encoding',
        type: 'bad',
        category: 'Encoding',
        scoreChange: -70,
        riskChange: 12,
        description: 'Double encoding bypasses security filters by encoding already-encoded data, which can allow attackers to evade input validation and security filters that only decode once. For example, encoding "%" as "%25" twice becomes "%2525", which might bypass filters looking for certain encoded patterns. This technique is often used in path traversal and injection attacks. Best practices: Decode input multiple times until no further decoding is possible, normalize all encoded input consistently, validate after decoding, use whitelist-based validation instead of blacklist filtering, and test your applications against double-encoding attacks.',
        color: 0xff4444
    },
    {
        id: 'encoding_bypass',
        name: 'Encoding Bypass',
        type: 'bad',
        category: 'Encoding',
        scoreChange: -75,
        riskChange: 13,
        description: 'Encoding bypass attacks exploit inconsistencies in how different systems handle encoding, allowing attackers to inject malicious code that bypasses security filters. Attackers use various encoding schemes (Unicode, HTML entities, URL encoding) to hide malicious payloads from security filters. The 2020 SolarWinds attack used encoding techniques to evade detection. Best practices: Normalize and decode all input consistently across all layers, use the same encoding/decoding logic everywhere, implement multiple layers of validation, test against various encoding bypass techniques, and use security scanners that detect encoding-based attacks.',
        color: 0xff3333
    },
    
    // ===== Security Concepts - Protections (Good Items) =====
    {
        id: 'sql_injection_protection',
        name: 'SQL Injection Protection',
        type: 'good',
        category: 'Auth',
        scoreChange: 110,
        riskChange: -16,
        description: 'SQL injection protection involves using parameterized queries (prepared statements) and input validation to prevent attackers from injecting malicious SQL code into database queries. Parameterized queries separate SQL code from data, making injection attacks impossible. This is critical for protecting databases and sensitive information. Best practices: Always use parameterized queries/prepared statements, never concatenate user input directly into SQL queries, validate and sanitize all input, use the principle of least privilege for database accounts, implement input validation on both client and server sides, and regularly audit code for SQL injection vulnerabilities.',
        color: 0x00ff00
    },
    {
        id: 'xss_filtering',
        name: 'XSS Filtering',
        type: 'good',
        category: 'Auth',
        scoreChange: 105,
        riskChange: -15,
        description: 'XSS (Cross-Site Scripting) filtering prevents attackers from injecting malicious scripts into web pages viewed by other users. Protection includes output encoding, Content Security Policy (CSP), input validation, and using secure frameworks that automatically escape output. XSS attacks can steal session cookies, redirect users, or deface websites. Best practices: Encode all output based on context (HTML, JavaScript, CSS, URL), implement Content Security Policy (CSP) headers, validate and sanitize all user input, use secure frameworks with built-in XSS protection, never trust user input, and use HttpOnly cookies to protect session data.',
        color: 0x00ff44
    },
    {
        id: 'csrf_tokens',
        name: 'CSRF Tokens',
        type: 'good',
        category: 'Auth',
        scoreChange: 100,
        riskChange: -14,
        description: 'CSRF (Cross-Site Request Forgery) tokens protect against attacks where unauthorized commands are transmitted from a user that a website trusts. Tokens are unique, unpredictable values that must be included in state-changing requests, verifying that the request originated from the legitimate website. This prevents attackers from tricking users into performing unintended actions. Best practices: Generate unique CSRF tokens for each session, include tokens in all state-changing requests (forms, AJAX), validate tokens server-side, use SameSite cookie attribute as additional protection, and implement token regeneration after login to prevent token fixation.',
        color: 0x00ff55
    },
    {
        id: 'owasp_guidelines',
        name: 'OWASP Guidelines',
        type: 'good',
        category: 'Auth',
        scoreChange: 115,
        riskChange: -17,
        description: 'OWASP (Open Web Application Security Project) guidelines provide security best practices for web applications, including the OWASP Top 10 list of most critical security risks. Following OWASP guidelines helps organizations build secure applications and avoid common vulnerabilities. These guidelines are continuously updated based on real-world attack data. Best practices: Regularly review OWASP Top 10 and other OWASP resources, integrate OWASP guidelines into your development lifecycle, use OWASP testing tools (ZAP, Dependency-Check), train developers on OWASP principles, and implement security controls based on OWASP recommendations.',
        color: 0x00ff00
    },
    {
        id: 'security_headers',
        name: 'Security Headers',
        type: 'good',
        category: 'Network',
        scoreChange: 90,
        riskChange: -13,
        description: 'Security headers are HTTP response headers that instruct browsers to enable security features and protect against various attacks. Important headers include Content-Security-Policy (CSP), X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security (HSTS), and X-XSS-Protection. These headers provide defense-in-depth security at the browser level. Best practices: Implement Content-Security-Policy (CSP) to prevent XSS attacks, use HSTS to force HTTPS connections, set X-Frame-Options to prevent clickjacking, include X-Content-Type-Options: nosniff, use Referrer-Policy appropriately, and regularly audit your security headers using tools like securityheaders.com.',
        color: 0x00ff66
    },
    {
        id: 'rate_limiting',
        name: 'Rate Limiting',
        type: 'good',
        category: 'Network',
        scoreChange: 85,
        riskChange: -12,
        description: 'Rate limiting restricts the number of requests a user or IP address can make within a specific time period, protecting against brute-force attacks, DDoS attacks, and API abuse. It prevents attackers from overwhelming systems or attempting thousands of login attempts. Rate limiting is essential for APIs and authentication endpoints. Best practices: Implement rate limiting on authentication endpoints (login, password reset), set appropriate rate limits based on normal usage patterns, use different limits for different endpoints, implement IP-based and user-based rate limiting, return appropriate HTTP status codes (429 Too Many Requests), and log rate limit violations for security monitoring.',
        color: 0x00ff77
    },
    {
        id: 'input_validation',
        name: 'Input Validation',
        type: 'good',
        category: 'Auth',
        scoreChange: 95,
        riskChange: -13,
        description: 'Input validation verifies that user input meets expected format, length, and content requirements before processing. Proper validation prevents injection attacks, buffer overflows, and data corruption. It should use whitelist validation (allow only known good input) rather than blacklist validation (block known bad input). Best practices: Validate all input on the server side (client-side validation can be bypassed), use whitelist validation whenever possible, validate data type, format, length, and range, sanitize input to remove or encode dangerous characters, validate file uploads (type, size, content), and implement input validation at multiple layers.',
        color: 0x00ff55
    },
    {
        id: 'code_review',
        name: 'Code Review',
        type: 'good',
        category: 'Auth',
        scoreChange: 80,
        riskChange: -11,
        description: 'Security-focused code review involves examining source code for security vulnerabilities, coding errors, and adherence to security best practices. Peer code reviews help catch security issues early in the development process, before they reach production. It\'s an essential part of secure software development. Best practices: Conduct code reviews for all security-sensitive code, use security-focused code review checklists, train developers on security best practices, use automated static analysis tools (SAST) alongside manual reviews, document and fix all identified security issues, and make code review a standard part of your development process.',
        color: 0x00ff88
    },
    
    // ===== Security Concepts - Attacks (Bad Items) =====
    {
        id: 'sql_injection',
        name: 'SQL Injection',
        type: 'bad',
        category: 'Auth',
        scoreChange: -120,
        riskChange: 20,
        description: 'SQL injection attacks exploit vulnerabilities in database queries by injecting malicious SQL code through user input. Attackers can read, modify, or delete database contents, bypass authentication, or gain administrative access. The 2009 Heartland Payment Systems breach exposed 130 million credit cards due to SQL injection. Best practices: Always use parameterized queries/prepared statements, never trust user input, validate and sanitize all input, use the principle of least privilege for database accounts, implement Web Application Firewalls (WAFs), and regularly test applications for SQL injection vulnerabilities.',
        color: 0xff0000
    },
    {
        id: 'xss_attack',
        name: 'XSS Attack',
        type: 'bad',
        category: 'Auth',
        scoreChange: -110,
        riskChange: 18,
        description: 'Cross-Site Scripting (XSS) attacks inject malicious scripts into web pages viewed by other users, allowing attackers to steal cookies, session tokens, or redirect users to malicious sites. There are three types: stored XSS (malicious script stored in database), reflected XSS (script reflected from URL), and DOM-based XSS (client-side script manipulation). Best practices: Encode all output based on output context, implement Content Security Policy (CSP), validate and sanitize all user input, use secure frameworks with built-in XSS protection, use HttpOnly and Secure cookie flags, and test applications regularly for XSS vulnerabilities.',
        color: 0xff2200
    },
    {
        id: 'csrf_attack',
        name: 'CSRF Attack',
        type: 'bad',
        category: 'Auth',
        scoreChange: -105,
        riskChange: 17,
        description: 'Cross-Site Request Forgery (CSRF) attacks trick authenticated users into submitting unauthorized requests to a website where they\'re logged in. Attackers exploit the browser\'s automatic inclusion of cookies, causing users to unknowingly perform actions like changing passwords or transferring funds. Best practices: Implement CSRF tokens for all state-changing requests, validate tokens server-side, use SameSite cookie attribute, verify the Origin/Referer headers, require re-authentication for sensitive operations, and implement double-submit cookie pattern as an alternative.',
        color: 0xff1100
    },
    {
        id: 'path_traversal',
        name: 'Path Traversal',
        type: 'bad',
        category: 'Auth',
        scoreChange: -95,
        riskChange: 16,
        description: 'Path traversal (directory traversal) attacks use "../" sequences to access files and directories outside the intended directory, potentially exposing sensitive files like configuration files, source code, or user data. Attackers can read or write files they shouldn\'t have access to. Best practices: Validate and sanitize all file paths, use whitelist of allowed directories, avoid user input in file paths when possible, use chroot or similar isolation techniques, implement proper access controls, and test applications for path traversal vulnerabilities.',
        color: 0xff3300
    },
    {
        id: 'command_injection',
        name: 'Command Injection',
        type: 'bad',
        category: 'Auth',
        scoreChange: -100,
        riskChange: 17,
        description: 'Command injection attacks execute arbitrary operating system commands on the server by injecting malicious commands through vulnerable input fields. Attackers can gain full system access, read sensitive files, or install backdoors. This typically happens when applications pass user input directly to system commands without proper sanitization. Best practices: Avoid executing system commands with user input, use safe APIs instead of system commands when possible, validate and sanitize all input if commands are necessary, use parameterized commands, run applications with minimal privileges, and implement proper input validation and output encoding.',
        color: 0xff0000
    },
    {
        id: 'buffer_overflow',
        name: 'Buffer Overflow',
        type: 'bad',
        category: 'Auth',
        scoreChange: -125,
        riskChange: 21,
        description: 'Buffer overflow attacks write data beyond the boundaries of a buffer, overwriting adjacent memory and potentially allowing attackers to execute arbitrary code or crash the application. This is a common vulnerability in C/C++ programs but can affect other languages. The 2014 Heartbleed bug was a buffer over-read vulnerability. Best practices: Use memory-safe programming languages when possible, validate input lengths before storing in buffers, use secure string functions that check bounds, enable compiler security features (stack canaries, ASLR), use static analysis tools to detect buffer overflows, and regularly test with fuzzing tools.',
        color: 0xcc0000
    },
    {
        id: 'idor',
        name: 'IDOR',
        type: 'bad',
        category: 'Auth',
        scoreChange: -90,
        riskChange: 15,
        description: 'Insecure Direct Object Reference (IDOR) occurs when applications expose internal implementation objects (like database IDs) in URLs or parameters, allowing attackers to access resources they shouldn\'t have access to. Attackers can modify object references to access other users\' data. Best practices: Use indirect object references (map internal IDs to temporary tokens), implement proper access controls for all object access, verify user authorization for each requested resource, avoid exposing internal implementation details, use unpredictable identifiers (UUIDs instead of sequential IDs), and test applications for IDOR vulnerabilities.',
        color: 0xff4400
    },
    {
        id: 'missing_security_headers',
        name: 'Missing Security Headers',
        type: 'bad',
        category: 'Network',
        scoreChange: -70,
        riskChange: 12,
        description: 'Missing security headers leave web applications vulnerable to various attacks that these headers would prevent. Without headers like CSP, HSTS, and X-Frame-Options, applications are more susceptible to XSS, clickjacking, man-in-the-middle attacks, and other threats. Many security vulnerabilities are enabled simply by missing these headers. Best practices: Implement all recommended security headers (CSP, HSTS, X-Frame-Options, etc.), use security header scanning tools to identify missing headers, configure headers according to your application\'s needs, test that headers are working correctly, and regularly audit security headers in production.',
        color: 0xff5555
    }
];

/**
 * Get item by ID
 */
function getItemById(id) {
    const items = window.CYBERSECURITY_ITEMS || CYBERSECURITY_ITEMS;
    return items.find(item => item.id === id);
}

/**
 * Get items by category
 */
function getItemsByCategory(category) {
    const items = window.CYBERSECURITY_ITEMS || CYBERSECURITY_ITEMS;
    return items.filter(item => item.category === category);
}

/**
 * Get items by type (good/bad)
 */
function getItemsByType(type) {
    const items = window.CYBERSECURITY_ITEMS || CYBERSECURITY_ITEMS;
    return items.filter(item => item.type === type);
}

// Create alias for compatibility
const CYBERSECURITY_ITEMS = window.CYBERSECURITY_ITEMS;
}

