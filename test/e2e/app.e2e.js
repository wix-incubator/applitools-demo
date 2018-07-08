
describe('React application', () => {
  describe('open page', () => {
    it('should display title', async () => {
      await browser.get('/');
      expect($('h2').getText()).toEqual('Hello World!');
    });
  });
});
