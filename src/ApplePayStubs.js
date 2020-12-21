// Adapted from:
// https://github.com/indiegogo/apple-pay-js-stubs/blob/master/src/apple-pay-js-stubs.js

var ApplePaySession = {
    canMakePayments: function() {
        return Promise.resolve(true);
    },

    canMakePaymentsWithActiveCard: function(merchantIdentifier) {
        return Promise.resolve(true);
    },

    supportsVersion: function(version) {
        return Promise.resolve(true);
    }
};

window.wrappedJSObject.ApplePaySession = cloneInto(
    ApplePaySession,
    window,
    { cloneFunctions: true }
);
