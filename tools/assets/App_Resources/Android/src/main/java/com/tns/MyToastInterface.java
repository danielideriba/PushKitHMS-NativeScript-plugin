package com.tns;

import android.webkit.JavascriptInterface;
import android.widget.Toast;
import android.content.Context;

public class MyToastInterface {

    public MyToastInterface() {}

    @JavascriptInterface
    public void showToast(Context context, String text, String StrDuration) {
      this._showToast(context, text, StrDuration);
    }

    public void _showToast(Context context, String text, String StrDuration) {
        int duration;
        switch (StrDuration){
          case "short":
              duration = Toast.LENGTH_SHORT;
              break;
          case "long":
              duration = Toast.LENGTH_LONG;
              break;
        }
        Toast.makeText(context,text, Toast.LENGTH_SHORT).show();
    }
}