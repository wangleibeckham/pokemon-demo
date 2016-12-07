#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var ctrlX:float;
var ctrlY:float;
var ctrlZ:float;
var ctrl2X:float;
var ctrl2Y:float;
var ctrl2Z:float;
var tyX:float;
var tyZ:float;
var anim: Animator;


function Start () {

	
	anim = GetComponent.<Animator>();

}

function Update () {
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	ctrl2X = GameObject.Find("[CameraRig]").transform.Find("Controller (right)").transform.position.x;
	ctrl2Y = GameObject.Find("[CameraRig]").transform.Find("Controller (right)").transform.position.y;
	ctrl2Z = GameObject.Find("[CameraRig]").transform.Find("Controller (right)").transform.position.z;
	tyX = GameObject.Find("Ty").transform.position.x;
	tyZ = GameObject.Find("Ty").transform.position.z;
	//Debug.Log(GameObject.Find("[CameraRig]").transform.Find("Controller (left)").Find("Grip Point").transform.Find("Vive Grip_Grip point"));
	anim.SetBool("idle",true);
	//Debug.Log("Z: "+parseInt(ctrlZ)+":"+parseInt(tyZ)+"X: "+parseInt(ctrlX)+":"+parseInt(tyX));
	if(parseInt(ctrlZ)==parseInt(tyZ)|| parseInt(ctrl2Z)==parseInt(tyZ) ){
		if (parseInt(ctrlX)>=parseInt(tyX)-1 && parseInt(ctrlX)<=parseInt(tyX)+1 ){
//		Debug.Log("TY");
		anim.SetBool("approach",true);
		}
		else if(parseInt(ctrl2X)>=parseInt(tyX)-1 && parseInt(ctrl2X)<=parseInt(tyX)+1 ){
//		Debug.Log("TY");
		anim.SetBool("approach",true);
		}
		else{
		anim.SetBool("approach",false);
	}	}
	else{
		anim.SetBool("approach",false);
	}

}