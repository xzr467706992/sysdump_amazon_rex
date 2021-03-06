
// string map for default mode
var WLLegalStringTable = {

  WLFAQHeader : "Saving Your Wi-Fi Passwords to Amazon: FAQs",
  close       : "CLOSE",
  WLFAQMessageFormat : new MessageFormat("<b> 1. What's the benefit of saving my Wi-Fi passwords to my Amazon account? </b> </br> Once you save your Wi-Fi passwords to your Amazon account, we can configure your compatible devices so that you won't need to re-enter your Wi-Fi passwords on each device. </br> <b> 2. Are my Wi-Fi passwords secure? </b> </br> Yes. Once saved to your Amazon account, your Wi-Fi passwords are sent over a secured connection and are stored in an encrypted file on an Amazon server. Amazon may use your Wi-Fi passwords to connect your compatible devices and will not share them with any third party without your permission. Amazon handles any information it receives, including your Wi-Fi passwords, in accordance with the Amazon Privacy Notice ({privacyUrlString}). </br> <b> 3. What should I do if I change my Wi-Fi passwords? </b> </br> You can save your updated Wi-Fi passwords to your Amazon account by re-running any compatible device through its Wi-Fi setup process. Once reconnected to your Wi-Fi network, your updated Wi-Fi password will be automatically saved to your Amazon account. </br> <b> 4. Did previous passwords entered on this device get saved to my Amazon account if I did not select the option to Save Passwords to Amazon? </b> </br> No, they did not. Only passwords you enter going forward will be saved as long as the checkbox is selected for Save Password to Amazon. If the checkbox is not selected, we will not save your Wi-Fi passwords to your Amazon account. </br> <b> 5. How do I delete my Wi-Fi passwords from my Amazon account? </b> </br> You can delete the Wi-Fi passwords that you have saved to your Amazon account by contacting Customer Service using the Contact Us form at {deviceSupporUrlString}. You can also delete Wi-Fi passwords saved from this device in Settings."),
  WLPrivacyUrlMessageFormat : new MessageFormat("wifilocker.privacyurl.{MarketPlace}"),
  WLDeviceSupportMessageFormat : new MessageFormat("wifilocker.devicesupporturl.{MarketPlace}")
};

// string map for large mode
var WLLegalStringTableLarge = {

  close       : "Close"
};

//checks for large mode and constructs WLLegalStringTable based on the display mode

WLLegalStringTable = constructTableOnDisplayModeChange(WLLegalStringTable,WLLegalStringTableLarge);
