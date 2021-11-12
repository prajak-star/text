tex=" ";
wrightx=0;
wleftx=0;
diff=0;

function setup(){
    canvas=createCanvas(600,300);
    canvas.position(450,130);
    video=createCapture(VIDEO);
    video.size(300,300);
    pose=ml5.poseNet(video,model_loaded);
    pose.on("pose",get_poses);
    document.getElementById("sized");
 }
 
 function get_poses(results){
     if (results.length > 0) {
         console.log(results);
         nosex=results[0].pose.nose.x;
         nosey=results[0].pose.nose.y;
         wrightx=results[0].pose.rightWrist.x;
         wleftx=results[0].pose.leftWrist.x;
         diff=floor(wleftx-wrightx);
     }
 }

function model_loaded(){
    console.log("Model Loaded");
}

