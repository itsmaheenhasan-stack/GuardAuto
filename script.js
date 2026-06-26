// Rule-based allowlist architecture
const VALID_IDS = {
    "0x123": "Engine Speed (RPM)",
    "0x456": "Tire Pressure Data",
    "0x789": "Climate Control Status"
};

const logDisplay = document.getElementById('log-display');

function addLogEntry(text, cssClass) {
    const p = document.createElement('p');
    p.className = cssClass;
    p.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
    logDisplay.appendChild(p);
    logDisplay.scrollTop = logDisplay.scrollHeight; // Auto-scroll to latest packet
}

// Mimics standard vehicle operational streams
document.getElementById('send-clean-btn').addEventListener('click', function() {
    const keys = Object.keys(VALID_IDS);
    const randomID = keys[Math.floor(Math.random() * keys.length)];
    const fakeValue = Math.floor(Math.random() * 100) + 20;
    
    addLogEntry(`INCOMING -> ID: ${randomID} | Payload: data_val=${fakeValue}`, 'system-msg');
    
    setTimeout(() => {
        addLogEntry(`✅ ALLOWED: ${VALID_IDS[randomID]} processed successfully.`, 'allowed-packet');
    }, 400);
});

// Simulating a malicious priority override attack frame
document.getElementById('send-attack-btn').addEventListener('click', function() {
    addLogEntry(`INCOMING -> ID: 0x001 | Payload: CMD_OVERRIDE_BRAKE_RELEASE`, 'system-msg');
    
    setTimeout(() => {
        addLogEntry(`🚨 ALERT! UNKNOWN FRAME ID [0x001]. FIREWALL ACTION: BLOCKED. Prevented safety domain manipulation.`, 'blocked-packet');
    }, 400);
});

// Clear log utility
document.getElementById('clear-btn').addEventListener('click', function() {
    logDisplay.innerHTML = '<p class="system-msg">[SYSTEM] Logs cleared. Monitoring active...</p>';
});
