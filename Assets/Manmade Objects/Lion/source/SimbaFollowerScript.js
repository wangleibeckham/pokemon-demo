#pragma strict


var anim: Animator;
var posX:float;
var posY:float;
var posZ:float;
//var speed=20f;
var cameraRig: Transform;
var originalLoc: Vector3;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	anim = GetComponent.<Animator>();
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));


}

function FixedUpdate () {
	
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
	transform.position = Vector3.MoveTowards(transform.position, GameObject.Find("[CameraRig]").transform.position, 0.02);
}