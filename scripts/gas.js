function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
	var code = getUrlVars()["code"];
    var id = prompt("Enter your Client ID");
    
    document.getElementById("client_id1").value = id;
    document.getElementById("client_id2").value = id;
	if (code) {
		document.getElementById("stage1").className ='hidden';
		document.getElementById("stage2").className ='unhidden';
		document.getElementById("code").value = code;
        var secret = prompt("Enter your Client Secret");
        document.getElementById("client_secret").value = secret;
	}
});
