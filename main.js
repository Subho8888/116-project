noseX=0;
noseY=0;

function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
 canvas=createCanvas(300,300);
 canvas.center();   
 video= createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet= ml5.poseNet(video, ModelLoaded);
 poseNet.on('pose', gotPoses);
}
function draw(){
  image(video,0,0,300,300);
  image(mustache,noseX,noseY,50,50);
}
function take_snapshot(){
    save("filter.png")
}
function ModelLoaded(){
console.log("PostNet is Intisilised");
}
function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     noseX=results[0].pose.nose.x-20;
     noseY=results[0].pose.nose.y+10;
     console.log("nose x="+noseX);
     console.log("nose y="+noseY);
 }
}