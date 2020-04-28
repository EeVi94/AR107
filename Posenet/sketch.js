// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR

let video;
let poseNet;
let pose;
let skeleton;
let freezes;


function preload(){
  
  freezes = loadImage('Assets/Freeze.gif')
}
               

function setup() {
  createCanvas(640, 480, WEBGL);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  // img =loadImage ('assets/cat.jpg);
}

function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
    //skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  
  translate(-width/2 , -height/2 , 0);
  
  ambientLight (mouseX,mouseY,200);
  pointLight (255,0,0, width/4,height/4,100);
  
  
  
  image(video, 0, 0);

  if (pose) {
    // let eyeR = pose.rightEye;
    // let eyeL = pose.leftEye;
    let d = dist(pose.rightEar.x, pose.rightEar.y, pose.leftEar.x, pose.leftEar.y);
    
    //draw clown nose
    
//     strokeWeight (0);
//     fill(random(0,255));
//     ellipse(pose.nose.x, pose.nose.y, d/4);
    
   push();
    
  translate(pose.nose.x, pose.nose.y-70, d/4);
   
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  texture(freezes);
  // normalMaterial ();
  box(170);

    pop();
    
    //draw wrist 
    fill(random( 0, 255));
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 60/2);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 60/2);
    
    rect(pose.rightWrist.x+10, pose.rightWrist.y-5, 80,32);

    rect(pose.leftWrist.x-80, pose.leftWrist.y-5, 80,32);
    
    rect(pose.rightWrist.x+50, pose.rightWrist.y+25, 80,32);

    rect(pose.leftWrist.x-150, pose.leftWrist.y+25, 80,32);
    
    rect(pose.rightWrist.x+100, pose.rightWrist.y+50, 80,32);

    rect(pose.leftWrist.x-200, pose.leftWrist.y+50, 80,32);
    
    
    rect(pose.leftWrist.x-275, pose.leftWrist.y+50, 80,32);
    
    
    rect(pose.rightWrist.x+180, pose.rightWrist.y+50, 80,32);
    
    
    

    //keypoint arrays
//     for (let i = 0; i < pose.keypoints.length; i++) {
//       let x = pose.keypoints[i].position.x;
//       let y = pose.keypoints[i].position.y;
//       strokeWeight(0);
//       fill(255,255,0);
//       ellipse(x,y,16,16);
//     }
    
  //Draw with Skeleton Array
    // for (let i = 0; i < skeleton.length; i++) {
    //   let a = skeleton[i][0];
    //   let b = skeleton[i][1];
    //   strokeWeight(2);
    //   stroke(255);
    //   line(a.position.x, a.position.y,b.position.x,b.position.y);      
    // }
    
    
  
  
  
  }
}
