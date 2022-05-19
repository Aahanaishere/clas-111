//https://teachablemachine.withgoogle.com/models/bO1b28swp/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    
});

Camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'"/>';
    });
}

console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bO1b28swp/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="the first prediction is ";
    speak_data2="and the second prediction is";
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);

}