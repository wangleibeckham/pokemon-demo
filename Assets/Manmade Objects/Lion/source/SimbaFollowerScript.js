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
		anim.SetBool("doRun",false);
		anim.SetBool("doIdle",true);

}

function FixedUpdate () {
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;

	if (parseInt(posX)<=parseInt(transform.position.x)+1 && parseInt(posX)>=parseInt(transform.position.x)-1)
	{
		if (parseInt(posZ)<=parseInt(transform.position.z)+1 && parseInt(posZ)>=parseInt(transform.position.z)-1)
		{
		anim.SetBool("doRun",false);
		anim.SetBool("doIdle",true);
		}
	}
	else
	{
		anim.SetBool("doIdle",false);
		anim.SetBool("doRun",true);
		transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
		transform.position = Vector3.MoveTowards(transform.position, GameObject.Find("[CameraRig]").transform.position, 0.02);
	}
}