Publish version v<VERSION_NUMBER>.

[ ] Checked steps:
1. Create a branch named v<VERSION_NUMBER>
2. Make sure of using [semver](https://semver.org/) for bumping
3. Update the [changelog](https://keepachangelog.com/en/1.0.0/) for libraries > v1.x
4. Use the command `npm version <major|minor|patch>` to bump `package.json`, `package-lock.json` and create a tag
5. After merge, push the locally create tag `git push origin vx.y.z`
