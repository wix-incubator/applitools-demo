import eyes from 'eyes.it';

describe('React application', () => {
  describe('open page', () => {
    eyes.it('should display title', async () => {
      console.log('process.env.APPLITOOLS_GITHUB_FT');
      console.log(process.env.APPLITOOLS_GITHUB_FT);
      console.log(process.env.APPLITOOLS_BATCH_ID);
      console.log('process.env.EYES_BATCH_UUID');
      console.log(process.env.EYES_BATCH_UUID);
      await browser.get('/');
      expect($('h2').getText()).toEqual('Hello b2!');
    });
  });
});
