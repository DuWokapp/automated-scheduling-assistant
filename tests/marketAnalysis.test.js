const { analyzeMarket } = require('../src/marketAnalysis');

test('analyzeMarket should log market data', async () => {
    console.log = jest.fn(); // Mock console.log
    
    await analyzeMarket();
    
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Analyzing market data..."));
});
