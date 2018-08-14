import eyes from 'eyes.it';

describe('React application', () => {
  describe('open page', () => {
    eyes.it('should display title', async () => {
      console.log('I am env for applitools branch', process.env);
      await browser.get('/');
      expect($('h2').getText()).toEqual('Hello Branch!');
    });
  });
});
