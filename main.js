Webcam.set({
width:350,
height:300,
image_format:"png",
pmg_quality:90
});

camera = document.getElementById("Camera");
Webcam.attach("#Camera");

function Take_snapshot(){
    Webcam.snap(function(data_uri)
    
    {
    document.getElementById("Image").innerHTML = '<img id="captured_image" src=" '+ data_uri+'"/>'
    });
}

console.log("ml5 version :", ml5.version);
Classifier= ml5.imageClassifier("https://storage.googleapis.com/tm-model/mBF_ptshr/model.jason",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function Check(){
     img = document.getElementById("captured_image");
     Classifier.classify(img , gotresults);
}

function gotresults(error , results){
if (error){
    console.log(error);
} else{
    console.log(results);
}

document.getElementById("result_Object_name").innerHTML = results[0].label;
document.getElementById("resukt_Object_accuracy").innerHTML = results[0].confidence.tofixed(3);


}