package com.example.app;

import com.onesignal.OneSignal;
import android.app.Application;

public class ApplicationClass extends Application {
    private static final String ONESIGNAL_APP_ID = "ebf027b0-459f-4745-bab5-6141b905eb3b";

    @Override
    public void onCreate() {
        super.onCreate();
        // TODO: Add OneSignal initialization here
        // Enable verbose OneSignal logging to debug issues if needed.
        OneSignal.setLogLevel(OneSignal.LOG_LEVEL.VERBOSE, OneSignal.LOG_LEVEL.NONE);

        // OneSignal Initialization
        OneSignal.initWithContext(this);
        OneSignal.setAppId(ONESIGNAL_APP_ID);
    }
}