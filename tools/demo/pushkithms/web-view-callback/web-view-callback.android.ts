import { WebView } from "@nativescript/core/ui/web-view";

declare var com: any;

class CallbackInterface extends com.tns.MyToastInterface {
    callback: (message: string) => void;
    // constructor
    constructor(callback: (message: string) => void) {
        super();
        this.callback = callback;
        return global.__native(this);
    }

    public _postMessage(message: string): void {
        this.callback(message);
    }
}

export function initWebViewWithCallback(webView: WebView, callback: (message: string) => void) {
    console.log("---method---");
    webView.android.addJavascriptInterface(new CallbackInterface(callback), "Android");
}