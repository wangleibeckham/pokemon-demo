#pragma strict

var anim: Animator;
var posX:float;
var posY:float;
var posZ:float;
var cameraRig: Transform;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	anim = GetComponent.<Animator>();

	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

	anim.SetBool("dog_walk",false);
	anim.SetBool("happy",true);
}

function FixedUpdate(){
	// use fixed update for lookat function, so the wait time is fixed, not subject to func running time.

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;

	if ((posX <= (transform.position.x)+1) && (posX >= (transform.position.x)-1))
	{
	if ((posZ <= (transform.position.z)+1) && (posZ >= (transform.position.z)-1))
	{
	anim.SetBool("dog_walk",true);
	anim.SetBool("happy",false);
	}


	}else
	{
	 transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
	 anim.SetBool("dog_walk",false);
	 anim.SetBool("happy",true);
	}







}