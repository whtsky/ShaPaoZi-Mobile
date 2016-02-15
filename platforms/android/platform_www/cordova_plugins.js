cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-universal-clipboard/www/clipboard.js",
        "id": "cordova-universal-clipboard.Clipboard",
        "pluginId": "cordova-universal-clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-universal-clipboard": "0.1.0",
    "cordova-plugin-crosswalk-webview": "1.5.0"
}
// BOTTOM OF METADATA
});