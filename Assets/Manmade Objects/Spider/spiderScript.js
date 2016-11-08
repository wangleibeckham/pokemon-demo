#pragma strict

var posX:float;
var posY:float;
var posZ:float;
var ctrlX:float;
var ctrlY:float;
var ctrlZ:float;
var spiderX:float;
var spiderZ:float;
var anim: Animator;
var spiderTransform;

function Start () {

//	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
//	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
//	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
//	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
//	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
//	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	anim = GetComponent.<Animator>();
	spiderX = GameObject.Find("spider").transform.position.x;
	spiderZ = GameObject.Find("spider").transform.position.z;
	anim.SetBool("spiderIdle",true);




//	for (var i : int = 0; i > 4; i++){
		
//		Debug.Log("Running");
		

//	}


}

function Update () {
	//Debug.Log(GameObject.Find("[CameraRig]").transform.Find("Controller (left)").Find("Grip Point").transform.Find("Vive Grip_Grip point"));
//
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	spiderX = GameObject.Find("spider").transform.position.x;
	spiderZ = GameObject.Find("spider").transform.position.z;
	anim.SetBool("idle",false);
	if(parseInt(posZ)==parseInt(spiderZ) && parseInt(posX)==parseInt(spiderX+1) ){
		anim.SetBool("spiderAttack",true);
	}
	else{
		anim.SetBool("spiderAttack",false);
	}

}