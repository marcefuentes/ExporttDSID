document.querySelector('.cookie').textContent = '<p>If you are reading this, something went wrong.<p>';

chrome.runtime.sendMessage('getDSID', (res) => {
  if (!res ) {
    $result = document.createElement('p');
    $result.textContent = 'Your cookie does not exist.  Did you log in to the VPN?';
  } else {
    $link = document.createElement('a');
    $link.setAttribute('download', `vpn.udc.es.DSID`);
    $link.setAttribute('href', URL.createObjectURL(
      new Blob([JSON.stringify(res.value, null, 2).replace(/"/g,"")], { type: 'text/plain' }))
    );
    $link.textContent = 'Click to save DSID';
    $result = document.createElement('p');
    $result.textContent=('DSID cookie for vpn.udc.es found.  ');
    $result.appendChild($link);
  }
  document.querySelector('.cookie').textContent='';
  document.querySelector('.cookie').appendChild($result);
});
