# applitools-demo
A demo for integrating applitools eyes with pull-requests team city and github. Each step is documented in a commit.

### 1. add Yaniv Efraim as admin to your repository
If you want to know why => ask applitools :)

### 2. Add your repository to applitools
See [Instructions](https://docs.google.com/document/d/1YIyLka9BaWvHOCyipFg0YJlijQCf0UA988Z-g4glwtw/edit)

### 3. Add eyes to your repository
See [commit](https://github.com/wix-incubator/applitools-demo/commit/bcea4fe7fb1ef75dc3e25fec9f9146fe3388a96b)

### 4. Add team city integration to your repository
Open a ticket for CI with the following requirements:
- pull requests builds
- github integration with 'continuous-integration/' preset (applitools use it)

### 5. Add environment variables to turn on applitools feature toggle
See [.ci_config](https://ci-kb.wixanswers.com/en/article/ci-config)<br/>
See [commit](https://github.com/wix-incubator/applitools-demo/commit/7a53fa0843b547ff7e6db52783fd936bea9fd242)

### 6. Send email to support@applitools.com with the following template:
> Dear Applitools support.<br/>
> I'm working on adding Applitools Github Pull Request integration to a repository that already has baselines.
I need your assistance to copy my existing baselines so that test that run in CI will be synchronised with Applitools' existing baselines.<br/>
> The name of the repository that I’m working on is - <repository_name>, and I need you to copy all the baselines from the “default” branch to the "<repository_name>/master” branch.<br/>
> Thanks a lot.

repository_name example: wix-incubator/applitools-demo