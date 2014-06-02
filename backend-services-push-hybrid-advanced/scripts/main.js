(function (global) {
    'use strict';

    var app = global.app = global.app || {};

    app.MainViewModel = (function () {
        var isDeviceInitialized;
        
        var events = {
            init: function () {
                // Do something on initialization
            },

            afterShow: function () {
                if (!isDeviceInitialized) {
                    // initializing the push notifications 
                    app.enablePushNotifications();
                    isDeviceInitialized = true;
                }
            }
        }

        return events;
    }());
}(window));
