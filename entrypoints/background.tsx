import { defineUnlistedScript } from 'wxt';

export default defineUnlistedScript(() => {
    console.log('Background script running');

    chrome.runtime.onInstalled.addListener(() => {
        console.log("Extension installed and background service worker running");
    });
});
