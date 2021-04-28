function setup() { 
    canvas = create Canvas (300, 300) 
    canvas.center(); 
    video = createCapture (VIDEO)
    video.hide();  
    classifier = ml5.image Classifier('https://teachablemachine.withgoogle.com/models/C2ol0C5Np/',modelLoaded); 
}
    
function modelLoaded(){ 
console.log('Model Loaded!');
}
    
function draw() {  
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResult);
}  
function draw() {
    image(video 0, 0, 300, 300); 
    classifier.classify (video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
} else {
  console.log(results)
  document.getElementById("result_object_name"),innerHTML = resulta[0].label;
  document.getElementById("result_object_accuracy"),innerHTML = resulta[0].confidence.toFixed(3);
}
}





























































































