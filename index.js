require('dotenv').config();
const { analyzeMarket } = require('./marketAnalysis');
const { manageTasks } = require('./taskManager');
const { scheduleTrades } = require('./scheduler');
const { sendAlerts } = require('./alerts');

// Main function to run the assistant
async function runAssistant() {
    console.log("Starting the Automated Scheduling Assistant...");

    // Example usage of each module
    await analyzeMarket();
    manageTasks();
    scheduleTrades();
    sendAlerts();
}

runAssistant();
