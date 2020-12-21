# ApplePay Stubs Firefox Extension

This extension adds the a dummy ApplePay API to Firefox, so websites think
ApplePay is available and show the ApplePay buttons.

⚠️ This does not implement ApplePay itself. Clicking the ApplePay button will
fail and potentially confuse the website. ⚠️

## Why

I like paying with ApplePay online, because it is less prone to credit card
fraud. But I often don't know whether a website offers ApplePay because they
don't show the buttons in Firefox. This extension enables those buttons, so I
can then do the payment in a supported browser.

## Issues
Apple recommends using the `-webkit-appearance: -apple-pay-button` CSS property,
instead of supplying an actual button. Firefox filters this property, so the
button might not be visible, even if the website thinks ApplePay is available.
To circumvent this, a custom image is injected on elements having `applepay` in
their CSS class name, but this likely doesn't catch all cases.

If you find a website which has issues displaying the button, please open an issue!

## Tested on
* Various Shopify Shops
* [Apple's ApplePay Demo Page](https://applepaydemo.apple.com/)
