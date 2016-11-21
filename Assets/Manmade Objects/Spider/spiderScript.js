﻿#pragma strict

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

	anim = GetComponent.<Animator>();

//	anim.SetBool("spiderIdle",true);
	anim.SetBool("spiderIdle",true);
	anim.SetBool("spiderDie",false);

}

function Update () {
	//Debug.Log(GameObject.Find("[CameraRig]").transform.Find("Controller (left)").Find("Grip Point").transform.Find("Vive Grip_Grip point"));
////
	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	ctrlX = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.x;
	ctrlY = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.y;
	ctrlZ = GameObject.Find("[CameraRig]").transform.Find("Controller (left)").transform.position.z;
	spiderX = GameObject.Find("spider").transform.position.x;
	spiderZ = GameObject.Find("spider").transform.position.z;
//	//Debug.Log(parseInt(posZ)+" : "+parseInt(posX)+"Spider: "+parseInt(spiderZ)+" : "+parseInt(spiderX)+"");

	if(parseInt(posZ)<=parseInt(spiderZ)+2 && parseInt(posZ)>=parseInt(spiderZ)-5){
		Debug.Log('Z match');
 		if (parseInt(posX)>=23 &&parseInt(posX)<=26){
 			Debug.Log('right X pos');
 			anim.SetBool("spiderIdle",false);
			anim.SetBool("spiderAttack",true);
		}
		else{
			if (!anim.GetBool('spiderDie')){
				Debug.Log('leave battle');
				Debug.Log('spider idle: '+anim.GetBool("spiderIdle"));
		//Debug.Log('spider attack: '+anim.GetBool("spiderAttack"));
		//Debug.Log('spider die: '+anim.GetBool("spiderDie"));
				anim.SetBool("spiderAttack",false);
				anim.SetBool("spiderIdle",true);
			}
	}
	}


}


