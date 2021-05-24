noseX = 0
noseY = 0 
leftWristX = 0
rightWristX = 0
distance = 0

function preload(){

}
function setup(){
video = createCapture(VIDEO)
video.size(550, 500)
canvas = createCanvas(550, 500)
canvas.position(570, 110)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotResult)
}
function modelLoaded(){
    console.log("PoseNet is initialized..")
}
function gotResult(results){
   if(results.length > 0){
console.log(results)
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y 
leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x
distance = floor(leftWristX - rightWristX)

console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX)
console.log("Nose X = " + noseX + " Nose Y = " + noseY)
console.log("Distance between Left and Right Wrist = " + distance)
   }
}
function draw(){
background('#949494')
fill('#f202c6')
stroke('black')
square(noseX, noseY, distance)
document.getElementById("sq_size").innerHTML = "The Height and Width of the Square is: " + distance + "px" 
}
