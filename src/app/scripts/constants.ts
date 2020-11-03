export const constants = {
    /**
     * SecuritySettings
     * @property database_id       - 
     */
    SecuritySettings: {
        "database_id": "5ecbc5672e22d7013f6c58d0"
    },
    /**
     * Settings
     */
    Settings: {},
    /**
     * todoDB_settings
     * @property database_id       - 
     */
    todoDB_settings: {
        "database_id": "5ecc22f22e22d7013f6c58e2"
    },
    /**
     * User_settings
     * @property database_id       - 
     */
    User_settings: {
        "database_id": "5ecbc5672e22d7013f6c58d0"
    },
    /**
     * Push Notification settings.
     * @property {boolean} badge       - If badge enabled for push
     * @property {boolean} alert       - If alert enabled for push
     * @property {boolean} sound       - If sound enabled for push
     * @property {string} senderID     - Sender Id for android devices
     * @property {string} url          - URL of Apperyio push rest service
     * @property {string} guid         - Project GUID
     */
    PushNotification: {
        ios: {
            badge: true,
            alert: true,
            sound: true,
            clearBadge: true
        },
        android: {
            senderID: null
        },
        url: "https://api.appery.io/rest/push/reg",
        guid: "de5457cf-c64c-42a3-bd3a-507acee28776"
    }
};
export const routes = {
    "Home": "home",
    "Profile": "profile",
    "Info": "info",
    "NiceTabs": "nicetabs",
    "TodayDeals": "todaydeals",
    "Category": "category",
    "SignUp": "signup",
    "PrivacyPolicy": "privacypolicy",
    "TermsOfService": "termsofservice",
    "CategoryList": "categorylist",
    "DealDetail": "dealdetail",
    "Feedback": "feedback",
    "Search": "search",
    "Repassword": "repassword",
    "Updateuser": "updateuser",
    "pushPage": "pushpage",
    "Report": "report",
    "Login": "login",
};
export const pushSettings = {
    appID: 'de5457cf-c64c-42a3-bd3a-507acee28776',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    initOptions: {
        ios: {
            alert: true,
            badge: true,
            sound: true,
            clearBadge: true
        },
        android: {
            senderID: ''
        }
    }
};