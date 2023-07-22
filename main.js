song1="music.mp3";
song2="music2.mp3";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song="";


function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    music.mp3.isPlaying();
    fil("ff000");
    stroke("ff000");

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        music2.mp3.stop();

    if(song1=false){
        song1=true;
        song=song1;
    }
}

if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY, 20);
    music.mp3.stop();

if(song2=false){
    song2=true;
    song=song2;
}
}
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}


function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX+"leftWristY + " + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX+"rightWristY + " + rightWristY);
    }
}