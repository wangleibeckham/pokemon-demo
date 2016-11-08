#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var pilotX:float;
var pilotZ:float;
var anim: Animator;


function Start () {
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	anim = GetComponent.<Animator>();
}

function Update () {
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	pilotX = GameObject.Find("ArmyPilot").transform.position.x;
	pilotZ = GameObject.Find("ArmyPilot").transform.position.z;
	Debug.Log(parseInt(posX)+" : "+parseInt(posZ));
	if(parseInt(posX)<=18 && parseInt(posX)>=16){
		if(parseInt(posZ)<=8 &&parseInt(posZ)>=6){
		Debug.Log("Fire!");
		anim.SetBool("approach",true);
		}
	}
	else{
		Debug.Log("hold!");
		anim.SetBool("approach",false);
	}
}