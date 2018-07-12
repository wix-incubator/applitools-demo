# applitools-demo
A demo for interating applitools eyes with pull-requests team city and github. Each step is documented in a commit.

### 1. add Yaniv Efraim as admin to your repository
If you wat to know why => ask applitools :)

### 2. Add your repository to applitools
[Instructions](https://docs.google.com/document/d/1YIyLka9BaWvHOCyipFg0YJlijQCf0UA988Z-g4glwtw/edit)

### 3. Add eyes to your repository

### 4. Add team city integration to your repository
Open a ticket for CI with the following requirements:
- pull requests builds
- github integrations with 'continuous-integration/' preset

### 5. Add environment variables to turn on applitools feature toggle
[.ci_config](https://ci-kb.wixanswers.com/en/article/ci-config)

### 6. Send email to support@applitools.com with the following template:
> Dear Applitools support.
> I'm working on adding Applitools Github Pull Request integration to a repository that already has baselines.
I need your assistance to copy my existing baselines so that test that run in CI will be synchronised with Applitools' existing baselines.
> The name of the repository that I’m working on is - <repository_name>, and I need you to copy all the baselines from the “default” branch to the "<repository_name>/master” branch.
> Thanks a lot.

repository_name example: wix-incubator/applitools-demo