chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "checkbox_became_enabled") {
            chrome.declarativeNetRequest.updateDynamicRules(
                {
                    addRules:[
                        {
                            "id": 5,
                            "priority": 1,
                            "action": {
                                "type": "redirect",
                                "redirect": {
                                    "regexSubstitution": "\\1responsive_web_twitter_blue_verified_badge_is_enabled%22%3Afalse\\2"
                                }
                            },
                            "condition": {
                                "regexFilter": "^(.+)responsive_web_twitter_blue_verified_badge_is_enabled%22%3Atrue(.+)$",
                                "resourceTypes": [
                                    "csp_report",
                                    "font",
                                    "image",
                                    "main_frame",
                                    "media",
                                    "object",
                                    "other",
                                    "ping",
                                    "script",
                                    "stylesheet",
                                    "sub_frame",
                                    "webbundle",
                                    "websocket",
                                    "webtransport",
                                    "xmlhttprequest"
                                ]
                            }
                        },
                        {
                            "id": 6,
                            "priority": 1,
                            "action": {
                                "type": "redirect",
                                "redirect": {
                                    "regexSubstitution": "\\1include_ext_is_blue_verified=0\\2"
                                }
                            },
                            "condition": {
                                "regexFilter": "^(.+)include_ext_is_blue_verified=1(.+)$",
                                "resourceTypes": [
                                    "csp_report",
                                    "font",
                                    "image",
                                    "main_frame",
                                    "media",
                                    "object",
                                    "other",
                                    "ping",
                                    "script",
                                    "stylesheet",
                                    "sub_frame",
                                    "webbundle",
                                    "websocket",
                                    "webtransport",
                                    "xmlhttprequest"
                                ]
                            }
                        }
                    ],
                    removeRuleIds: [5, 6]
                }
            )
        } else if (request.msg === "checkbox_became_disabled") {
            chrome.declarativeNetRequest.updateDynamicRules(
                {
                    addRules: [],
                    removeRuleIds: [5, 6]
                }
            )
        } else if (request.msg === "request_checkbox_state") {
            chrome.declarativeNetRequest.getDynamicRules((ids) => {
                if (ids.length > 0) {
                    chrome.runtime.sendMessage({
                        msg: "checkbox_was_enabled"
                    });
                } else {
                    chrome.runtime.sendMessage({
                        msg: "checkbox_was_disabled"
                    });
                }
            });
        }
    }
);
