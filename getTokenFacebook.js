/* In Facebook, press Ctr + Shift + J
	Copy this code => get Facebook Token */

(() => {
	var GetToken = (callback) => {
		var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
		var http = new XMLHttpRequest;
		var data = new FormData();
		data.append('fb_dtsg', fb_dtsg);
		data.append('app_id', '124024574287414');
		data.append('redirect_uri', 'fbconnect://success');
		data.append('display', 'popup');
		data.append('ref', 'Default');
		data.append('return_format', 'access_token');
		data.append('sso_device', 'ios');
		data.append('__CONFIRM__', '1');
		http.open('POST', '/v1.0/dialog/oauth/confirm');
		http.send(data);
		http.onreadystatechange = function(){
			if(http.readyState == 4 && http.status == 200) 
				callback(http.responseText.match(/access_token=(.*?)&/)[1]);
		}
	}
	GetToken(console.log);
})();
