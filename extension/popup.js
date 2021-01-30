document.querySelector('.message').textContent = chrome.i18n.getMessage('important_message');

chrome.runtime.sendMessage('getDSID', (res) => {
  const $content = document.querySelector('#content');
  let $result = null;
  if (!res || res.length === 0) {
    $result = document.createElement('span');
    $result.textContent = chrome.i18n.getMessage('no_cookies'); ;
  } else {
    $result = document.createElement('a');
    $result.setAttribute('download', `ssl.binghamton.edu.DSID`);
    $result.setAttribute('href', URL.createObjectURL(
      new Blob([JSON.stringify(res.value, null, 2).replace(/"/g,"")], { type: 'text/plain' }))
    );
    $result.textContent = chrome.i18n.getMessage('download_json');
  }
  $content.removeChild(document.querySelector('.loading'));
  $content.appendChild($result);
});
