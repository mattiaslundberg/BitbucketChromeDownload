Bitbucket patch download
=========================
[![Build Status](https://api.travis-ci.org/mattiaslundberg/BitbucketChromeDownload.png?branch=master)](https://travis-ci.org/mattiaslundberg/BitbucketChromeDownload)

Avaliable at [Chrome Web Store](https://chrome.google.com/webstore/detail/bitbucket-patch-download/kmjcnbdahgjagapjigblfpkggohhceka).

Download Bitbucket pull-request patches as a git patch file. This simplifies locally checking changes in a pull-request without merging it.

To apply the downloaded patch file to the repository run `git am --signoff /path/to/file/filename.patch`

## Development

 - Make sure you have installed [nodejs](https://nodejs.org/en/)
 - Run `npm install` to install all local dependencies

### Manual tests

 - To test locally open Chrome and navigate to [chrome://extensions](chrome://extensions)
 - Check the box "Developer mode" near the top of the page
 - Click "Load unpacked extension" and locate the project root
 - Open extension options to configure and get started with testing

## Release new version

 - Update version in `manifest.json` and `package.json`
 - Commit the change
 - Tag the commit `git commit -a vX.Y.Z -m "vX.Y.Z"`
 - Push the change `git push --tags`
 - Create a zip-file with the new release: `zip -r release.zip Gruntfile.js background.js content.js manifest.json package-lock.json package.json images`
 - Upload `release.zip` to the developer dashboard
