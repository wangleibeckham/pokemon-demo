#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var pilotX:float;
var pilotZ:float;
var anim: Animator;
var cameraRig: Transform;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	pilotX = GameObject.Find("ArmyPilot").transform.position.x;
	pilotZ = GameObject.Find("ArmyPilot").transform.position.z;

	anim = GetComponent.<Animator>();
	// set army to turn to user, only look at x, z axis, y axis not included
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

}

function Update () {
	//Debug.Log(parseInt(pilotX)+" : "+parseInt(pilotZ));
	anim.SetBool("idle",true);
	if(parseInt(posX)<=pilotX+3 && parseInt(posX)>=pilotX-3)
	{
		if(parseInt(posZ)<=pilotZ+3 &&parseInt(posZ)>=pilotZ-3){
			Debug.Log("Fire!");
			anim.SetBool("idle",false);
			anim.SetBool("approach",true);
		}
		else
		{
			Debug.Log("Cease Fire!");
			anim.SetBool("approach",false);
			anim.SetBool("idle",true);
		}

	}

	else
	{
			anim.SetBool("approach",false);
			anim.SetBool("idle",true);
	}
}

function FixedUpdate(){
	// use fixed update for lookat function, so the wait time is fixed, not subject to func running time.
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

}
