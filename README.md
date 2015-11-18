Bitbucket patch download
=========================
[![Build Status](https://api.travis-ci.org/mattiaslundberg/BitbucketChromeDownload.png?branch=master)](https://travis-ci.org/mattiaslundberg/BitbucketChromeDownload)

Avaliable at [Chrome Web Store](https://chrome.google.com/webstore/detail/bitbucket-patch-download/kmjcnbdahgjagapjigblfpkggohhceka).

Download Bitbucket pull-request patches as a git patch file. This simplifies locally checking changes in a pull-request without merging it.

To apply the downloaded patch file to the repository run `git am --signoff /path/to/file/filename.patch`
