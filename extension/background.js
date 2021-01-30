/* global chrome */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request !== 'getDSID') return false;
  var cUrl = 'https://ssl.binghamton.edu/';
  var cName = 'DSID';
	chrome.cookies.get({url: cUrl, name: cName}, function(cookie) {
	sendResponse(cookie);
});

  return true;
});
