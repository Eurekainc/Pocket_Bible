var ShareSend = function () {
	 //https:github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/README.md
	 //this is the complete list of currently supported params you can pass to the plugin (all optional) 
	
	var lang = JSON.parse(localStorage.getItem("firstStepLanguages"));
	var options = {

	  message: lang.shareMessage, // not supported on some apps (Facebook, Instagram) 
	  subject: lang.shareSubject, // fi. for email 
	  files: ['', ''],  //an array of filenames either locally or remotely 
	  url: lang.shareUrl,
	  chooserTitle: lang.shareTitle // Android only, you can override the default share sheet title 
	}
	 
	var onSuccess = function(result) {
	  console.log("Share completed? " + result.completed);//  On Android apps mostly return false even while it's true 
	  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
	}
	 
	var onError = function(msg) {
	  console.log("Sharing failed with message: " + msg);
	}
	console.log('options');
	console.log(options);
	 
	window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

}


var FeedbackSend = function(){
	var lang = JSON.parse(localStorage.getItem("firstStepLanguages"));
	var onSuccess = function(result) {
	  console.log("Feedback completed? " + result.completed); // On Android apps mostly return false even while it's true 
	  console.log("Feedback to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
	}
	 
	var onError = function(msg) {
	 console.log("Sharing failed with message: " + msg);
	}
	window.plugins.socialsharing.shareViaEmail(
	  lang.feedbackMessage, // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
	  lang.feedbackSubject,
	  [lang.feedbackEmail], // TO: must be null or an array
	 null, // CC: must be null or an array
	  null, // BCC: must be null or an array
	  null, // FILES: can be null, a string, or an array
	  onSuccess, // called when sharing worked, but also when the user cancelled sharing via email. On iOS, the callbacks' boolean result parameter is true when sharing worked, false if cancelled. On Android, this parameter is always true so it can't be used). See section "Notes about the successCallback" below.
	  onError // called when sh*t hits the fan
	);
}


var PrayerSend = function(){
	var lang = JSON.parse(localStorage.getItem("firstStepLanguages"));
   var onSuccess = function(result) {
	  console.log("Prayer completed? " + result.completed); // On Android apps mostly return false even while it's true 
	  console.log("Prayer to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
	}
	 
	var onError = function(msg) {
	 console.log("Sharing failed with message: " + msg);
	}
	window.plugins.socialsharing.shareViaEmail(
	  '', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
	  lang.prayerSubject,
	  [lang.prayerEmail], // TO: must be null or an array
	  null, // CC: must be null or an array
	  null, // BCC: must be null or an array
	  null, // FILES: can be null, a string, or an array
	  onSuccess, // called when sharing worked, but also when the user cancelled sharing via email. On iOS, the callbacks' boolean result parameter is true when sharing worked, false if cancelled. On Android, this parameter is always true so it can't be used). See section "Notes about the successCallback" below.
	  onError // called when sh*t hits the fan
	);
	
}

