#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var ctrlX:float;
var ctrlY:float;
var ctrlZ:float;
var tyX:float;
var tyZ:float;
var anim: Animator;


function Start () {

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	anim = GetComponent.<Animator>();


}

function Update () {
	//Debug.Log(GameObject.Find("[CameraRig]").transform.Find("Controller (left)").Find("Grip Point").transform.Find("Vive Grip_Grip point"));

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	tyX = GameObject.Find("Ty").transform.position.x;
	tyZ = GameObject.Find("Ty").transform.position.z;
	anim.SetBool("idle",false);
	if(parseInt(ctrlZ)==parseInt(tyZ) && parseInt(ctrlX)==parseInt(tyX) ){
		Debug.Log("TY");
		anim.SetBool("approach",true);
	}
	else{
		anim.SetBool("approach",false);
	}

}