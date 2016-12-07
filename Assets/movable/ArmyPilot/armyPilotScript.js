#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var pilotX:float;
var pilotZ:float;
var originalLoc: Vector3;
var anim: Animator;
var cameraRig: Transform;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	originalLoc = gameObject.transform.position;
	anim = GetComponent.<Animator>();

}

function Update () {
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	pilotX = GameObject.Find("ArmyPilot").transform.position.x;
	pilotZ = GameObject.Find("ArmyPilot").transform.position.z;
//	Debug.Log(parseInt(pilotX)+" : "+parseInt(pilotZ));
	anim.SetBool("idle",true);
	if(parseInt(posX)<=parseInt(pilotX)+3 && parseInt(posX)>=parseInt(pilotX)-3)
	{
		if(parseInt(posZ)<=parseInt(pilotZ)+3 &&parseInt(posZ)>=parseInt(pilotZ)-3){
			transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
			Debug.Log("Fire!");
			anim.SetBool("idle",false);
			anim.SetBool("approach",true);
		}
		else
		{
			transform.LookAt(originalLoc);
			//Debug.Log("Cease Fire!");
			anim.SetBool("approach",false);
			anim.SetBool("idle",true);
		}

	}

	else
	{
		transform.LookAt(originalLoc);
		anim.SetBool("approach",false);
		anim.SetBool("idle",true);
	}
}

function LateUpdate(){
	// use fixed update for lookat function, so the wait time is fixed, not subject to func running time.
//	 transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

}
