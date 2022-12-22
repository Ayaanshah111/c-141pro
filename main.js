function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.hide();
	poseNet=ml5.poseNet(video,modalLoaded)
	poseNet.on('pose',gotPoses);

}

function draw() {
	game()
	image(video,0,0,1240,336);
}
function  gotPoses(results)
{
	if(results.length>0){
		console.log(results);
    noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
    
	}
}






