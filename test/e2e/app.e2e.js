import eyes from 'eyes.it';

describe('React application', () => {
  describe('open page', () => {
    eyes.it('should display title', async () => {
      await browser.get('/');
      console.log('process.env.APPLITOOLS_GITHUB_FT');
      console.log(process.env.APPLITOOLS_GITHUB_FT);
      console.log('process.env.APPLITOOLS_BATCH_ID');
      console.log(process.env.APPLITOOLS_BATCH_ID);
      expect($('h2').getText()).toEqual('b6 title');
    });
  });
});
