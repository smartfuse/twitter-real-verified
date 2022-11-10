chrome.runtime.sendMessage({
    msg: "request_checkbox_state"
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	console.log(request);
        if (request.msg === "checkbox_was_enabled") {
        	document.getElementById("checkbox").checked = true;
        } else if (request.msg === "checkbox_was_disabled") {
			document.getElementById("checkbox").checked = false;
        }
    }
);

let checkbox = document.getElementById("checkbox");
checkbox.onchange = function() {
	if (checkbox.checked) {
		chrome.runtime.sendMessage({
    		msg: "checkbox_became_enabled"
		});
	} else {
		chrome.runtime.sendMessage({
		    msg: "checkbox_became_disabled"
		});
	}
}
