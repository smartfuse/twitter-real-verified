Twitter Real Verified
=====================
This Chrome extension reverts your Twitter experience to before Twitter Blue Verification came out so you can have the peace of mind knowing who is real or not. After the extension is installed, pin the extension to Chrome and turn the toggle switch on.

### How to install
Download the zip file of this repository and unzip it. Then, go to `chrome://extensions`, enable Developer Mode, and click "Load Unpacked". Browse to the unzipped directory.

### How it works
The Twitter backend will send `verified: true` for Blue verified users if `responsive_web_twitter_blue_verified_badge_is_enabled` is set to true for GraphQL requests and `include_ext_is_blue_verified` is set to true for REST requests. This extension simply turns on two `declarativeNetRequest` rules that rewrites both strings to false if they're present in the URL.
