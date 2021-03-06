
/**
 * The available three-button dialog layouts are:
 *
 * BUTTON_LAYOUT_NORMAL:
 *   Lay the buttons out horizontally, with each having equal width.
 *
 * BUTTON_LAYOUT_STACKED:
 *   Put the middle button up above the other two.
 *
 * BUTTON_LAYOUT_AUTO:
 *   Like BUTTON_LAYOUT_STACKED when the device is in portrait.
 *   In landscape, the buttons are laid out horizontally, but the middle button
 *   uses half of the available width.
 */

// string map for default mode
var WifiWizardDialogStringTable = {
    passwordDialogButtonLayout        : BUTTON_LAYOUT_NORMAL,
    cancelSetUpTryAgainButtonLayout   : BUTTON_LAYOUT_NORMAL,
    cancelEnterAgainSetUpButtonLayout : BUTTON_LAYOUT_LISTED,
    title                   : "Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af ({numNetworks})",
    advancedOptionsTitle    : "\u8a73\u7d30\u30aa\u30d7\u30b7\u30e7\u30f3",
    manualEntryButton       : "\u4ed6\u306eWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5165\u529b",
    networkNameLabel        : "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u540d",
    identityLabel           : "\u30e6\u30fc\u30b6\u30fc\u540d",
    passwordLabel           : "\u30d1\u30b9\u30ef\u30fc\u30c9",
    connectionTypeLabel     : "\u63a5\u7d9a\u30bf\u30a4\u30d7",
    ipAddressLabel          : "IP\u30a2\u30c9\u30ec\u30b9",
    subnetMaskLabel         : "\u30b5\u30d6\u30cd\u30c3\u30c8\u30de\u30b9\u30af",
    routerLabel             : "\u30eb\u30fc\u30bf\u30fc",
    dnsLabel                : "DNS",
    securityTypeLabel       : "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bf\u30a4\u30d7",
    wpaTypeLabel            : "\u30d0\u30fc\u30b8\u30e7\u30f3",
    eapMethodLabel          : "EAP\u30e1\u30bd\u30c3\u30c9",
    phase2AuthLabel         : "\u30d5\u30a7\u30fc\u30ba2\u8a8d\u8a3c",
    caCertLabel             : "CA\u8a3c\u660e\u66f8",
    connectionTypeDhcp      : "DHCP",
    conenctionTypeStatic    : "\u30b9\u30bf\u30c6\u30a3\u30c3\u30af",
    wpaTypePersonal         : "\u30d1\u30fc\u30bd\u30ca\u30eb",
    wpaTypeEnterprise       : "\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba",
    eapMethodPeap           : "PEAP",
    eapMethodTtls           : "TTLS",
    phase2AuthPap           : "PAP",
    phase2AuthMschapv2      : "MSCHAPv2",
    securityTypeOpen        : "\u306a\u3057",
    securityTypeWep         : "WEP",
    securityTypeWpawpa2     : "WPA/WPA2",
    securityTypeWpa2        : "WPA2",
    done                    : "\u5b8c\u4e86",
    availNetworksLabel      : "\u5229\u7528\u53ef\u80fd\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",
    disconnect              : "\u5207\u65ad",
    enterAgain              : "\u3082\u3046\u4e00\u5ea6\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    setUp                   : "\u8a2d\u5b9a",
    okay                    : "OK",
    cancel                  : "\u30ad\u30e3\u30f3\u30bb\u30eb",
    connect                 : "\u63a5\u7d9a",
    wpsConnect              : "WPS",
    advanced                : "\u8a73\u7d30",
    join                    : "\u305d\u306e\u4ed6...",
    rescan                  : "\u518d\u30b9\u30ad\u30e3\u30f3",
    tryAgain                : "\u518d\u8a66\u884c",
    passwordHide            : "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u975e\u8868\u793a",
    storeCredentials        : "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092Amazon\u306b\u4fdd\u5b58\u3002",
    learnMoreLabel          : "\u8a73\u7d30\u306f\u3053\u3061\u3089",
    manualEntryTitle        : "Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u60c5\u5831\u3092\u5165\u529b",
    passwordEntryTitle      : "Wi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059",
    loginTitle              : "Wi-Fi\u30ed\u30b0\u30a4\u30f3",
    passwordErrorTitle      : "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",
    defaultErrorTitle       : "Wi-Fi\u30a8\u30e9\u30fc",
    defaultError            : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002--\u300c{error}\u300d-- \u300c\u8a2d\u5b9a\u300d\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u518d\u5165\u529b\u3059\u308b\u304b\u3001\u624b\u52d5\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    passwordFailedError     : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u5165\u529b\u3057\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u518d\u5165\u529b\u3059\u308b\u304b\u3001\u624b\u52d5\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    noProfileTitle     : 'Wi-Fi\u672a\u8a2d\u5b9a',
    noProfileError          : 'Wi-Fi\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    failedToConnectError    : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u300c\u8a2d\u5b9a\u300d\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u518d\u5165\u529b\u3059\u308b\u304b\u3001\u624b\u52d5\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    failedToConnectEnterpriseError : 'Kindle\u3092Wi-Fi\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u304a\u5ba2\u69d8\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u518d\u78ba\u8a8d\u3059\u308b\u304b\u3001\u30b7\u30b9\u30c6\u30e0\u7ba1\u7406\u8005\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002',
    wifiNotReady            : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30db\u30fc\u30e0\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3001Wi-Fi\u306b\u3082\u3046\u4e00\u5ea6\u63a5\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    localNetworkFailedError : '\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    internetConnectFailedTitle : '\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f',
    internetConnectFailedError : 'Kindle\u306fWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u63a5\u7d9a\u3055\u308c\u307e\u3057\u305f\u304c\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u9023\u7d61\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
    profNetNameTooLongFailedTitle : '\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u540d\u304c\u9577\u3059\u304e\u307e\u3059',
    profNetNameTooLongFailedError : 'Kindle\u3092Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u540d\u304c\u9577\u3059\u304e\u307e\u3059\u3002\u624b\u52d5\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u304b\uff1f',
    passwordTooLongTitle    : '\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9577\u3059\u304e\u307e\u3059',
    passwordTooLongError    : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u5165\u529b\u3057\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u304cWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u4f7f\u7528\u3067\u304d\u308b\u9577\u3055\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u518d\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    passwordTooShortTitle   : '\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u77ed\u304b\u3059\u304e\u307e\u3059',
    passwordTooShortError   : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u5165\u529b\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c1\u6587\u5b57\u4ee5\u4e0a\u8db3\u308a\u307e\u305b\u3093\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u518d\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    wpaEnterpriseErrorTitle : '\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af',
    wpaEnterpriseNotSupportedError : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002Kindle\u3067\u306f\u3001\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30baWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4ed6\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u63a5\u7d9a\u3092\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',    
    wpaEnterpriseAuthError  : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u3001\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    securityMismatchTitle   : '\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a8\u30e9\u30fc',
    securityMismatchError   : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u5165\u529b\u3055\u308c\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bf\u30a4\u30d7\u306f\u3053\u306eWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bf\u30a4\u30d7\u3068\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002\u624b\u52d5\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u3082\u3046\u4e00\u5ea6\u8a2d\u5b9a\u3057\u3001\u6b63\u3057\u3044\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    adhocNotSupportedTitle  : '\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af',
    adhocNotSupportedError  : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002Kindle\u3067\u306f\u3001\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4ed6\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u63a5\u7d9a\u3092\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    profileFailedError      : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u300c{essid}\u300d\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u304d\u307e\u305b\u3093\u3002\u5165\u529b\u3057\u305f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u60c5\u5831\u304c\u5b8c\u5168\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002Kindle\u306eWi-Fi\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f\u3001www.amazon.com/devicesupport\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
    profileDeleteTitle      : '\u30a8\u30e9\u30fc',
    profileDeleteError      : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306e\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3067\u304d\u307e\u305b\u3093\u3002',
    scanning                : "\u30b9\u30ad\u30e3\u30f3\u4e2d",
    scanningForNetwork      : "\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u30b9\u30ad\u30e3\u30f3\u4e2d",
    scanComplete            : "\u30b9\u30ad\u30e3\u30f3\u3092\u5b8c\u4e86\u3057\u307e\u3057\u305f",
    connecting              : "\u63a5\u7d9a\u4e2d",
    connected               : "\u63a5\u7d9a\u6e08\u307f",
    connectionFailed        : "\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
    noWifiFound             : "Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",
    wpsConnectionError      : 'Kindle\u3092WPS\u3067Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u3053\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u624b\u52d5\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u304b?',
    wpsButtonNotPressedError : 'Kindle\u3092WPS\u3067Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002WPS\u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
    apRejectedError         : 'Kindle\u3092Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304b\u3089\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
    apDeniedError           : 'Kindle\u3092Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3002\u30a2\u30af\u30bb\u30b9\u30dd\u30a4\u30f3\u30c8\u306b\u63a5\u7d9a\u3092\u62d2\u5426\u3055\u308c\u307e\u3057\u305f\u3002\u30eb\u30fc\u30bf\u30fc\u306eMAC\u30a2\u30c9\u30ec\u30b9\u306e\u30d5\u30a3\u30eb\u30bf\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u3001\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
    forgetProfileTitle      : '\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u63a5\u7d9a\u89e3\u9664\u3057\u307e\u3059\u304b?',
    forgetProfileConfirmation : 'Wi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u300c{essid}\u300d\u3092\u63a5\u7d9a\u89e3\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b?',
    forget                  : "\u63a5\u7d9a\u89e3\u9664",
    advancedDialogDescription : "\u63a5\u7d9a\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308bWi-Fi\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    caCertificateNotFoundTitle : "\u8a3c\u660e\u66f8\u304c\u3042\u308a\u307e\u305b\u3093",
    caCertificateNotFoundError : '\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a3c\u660e\u66f8\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\u540d\u524d\u3092\u78ba\u8a8d\u3057\u3066\u3001\u3082\u3046\u4e00\u5ea6\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
    userGuidePart1 : '\u6a5f\u5185\u30e2\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u30c4\u30fc\u30eb\u30d0\u30fc\u3067\u300c\u30af\u30a4\u30c3\u30af\u64cd\u4f5c\u300d',
    userGuidePart2 : '\u3092\u30bf\u30c3\u30d7\u3057\u3001\u300c\u6a5f\u5185\u30e2\u30fc\u30c9\u300d\u3092\u30bf\u30c3\u30d7\u3057\u307e\u3059\u3002'
};

// string map for large mode
var WifiWizardDialogStringTableLarge = {
    disconnect              : "\u63a5\u7d9a\u89e3\u9664",
    enterAgain              : "\u3082\u3046\u4e00\u5ea6\u5165\u529b",
    setUp                   : "\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",
    cancel                  : "\u30ad\u30e3\u30f3\u30bb\u30eb",
    connect                 : "\u63a5\u7d9a",
    advanced                : "\u8a73\u7d30",
    join                    : "\u305d\u306e\u4ed6...",
    rescan                  : "\u518d\u30b9\u30ad\u30e3\u30f3",
    tryAgain                : "\u518d\u8a66\u884c",
    forget                  : "\u63a5\u7d9a\u89e3\u9664"
};


//checks for large mode and constructs WifiWizardDialogStringTable based on the display mode

WifiWizardDialogStringTable = constructTableOnDisplayModeChange(WifiWizardDialogStringTable,WifiWizardDialogStringTableLarge);


var WifiWizardDialogAccessibilityStringTable = {
    closeButtonLabel     :    "\u9589\u3058\u308b"
};
