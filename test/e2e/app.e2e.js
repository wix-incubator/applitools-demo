import eyes from 'eyes.it';

describe('React application', () => {
  describe('open page', () => {
    eyes.it('should display title', async () => {
      await browser.get('/');
      expect($('h2').getText()).toEqual('master title');
    });
  });
});
