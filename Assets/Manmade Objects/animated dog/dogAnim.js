#pragma strict

var anim: Animator;
var posX:float;
var posY:float;
var posZ:float;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	anim = GetComponent.<Animator>();

	var x = transform.position.x;
	var y = transform.position.y;
	var z = transform.position.z;

	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

	anim.SetBool("tipsy",true);
	anim.SetBool("dog_happy",false);


}

//Update : Every 5 secs
//FixedUpdate : Update at given time
//LateUpdate: Finish frame and then update 
function Update () {

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;

	if (parseInt(posX)<=parseInt(transform.position.x)+1 && parseInt(posX)>=parseInt(transform.position.x)-1)
	{
		if (parseInt(posZ)<=parseInt(transform.position.z)+1 && parseInt(posZ)>=parseInt(transform.position.z)-1)
		{
		anim.SetBool("tipsy",false);
		anim.SetBool("dog_happy",true);
		}

	}else
	{
	anim.SetBool("tipsy",true);
	anim.SetBool("dog_happy",false);

	}


}