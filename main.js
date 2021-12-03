var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie"){
        console.log("calling speak")
        speak();
    }
}

function speak(){
    console.log("speak");
    var synth = window.speechSynthesis; 
    speak_data = "Taking you Selfie in 5 seconds"; 
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");

Webcam.set({
    height: 250,
    width: 370,
    image_format:"jpeg",
    jpeg_quality:90,
    flip_horiz: true
});