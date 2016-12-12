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

	anim = GetComponent.<Animator>();

//	anim.SetBool("spiderIdle",true);
	anim.SetBool("spiderIdle",true);
	anim.SetBool("spiderDie",false);

}

function FixedUpdate () {

	//Debug.Log(GameObject.Find("[CameraRig]").transform.Find("Controller (left)").Find("Grip Point").transform.Find("Vive Grip_Grip point"));

	posX = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.x;
	posY = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.y;
	posZ = GameObject.Find("[CameraRig]").transform.Find("Camera (eye)").transform.position.z;
	spiderX = GameObject.Find("spider").transform.position.x;
	spiderZ = GameObject.Find("spider").transform.position.z;


	if(parseInt(posZ)<=parseInt(spiderZ)+6 && parseInt(posZ)>=parseInt(spiderZ)-6)
	{
 		if (parseInt(posX)>=parseInt(spiderX)-6 && parseInt(posX)<=parseInt(spiderX)+6)
 		{
 			Debug.Log('Spider Attack!');
 			transform.LookAt(Vector3(GameObject.Find("[CameraRig]").transform.position.x,transform.position.y,GameObject.Find("[CameraRig]").transform.position.z));
 			anim.SetBool("spiderIdle",false);
			anim.SetBool("spiderAttack",true);
		}
		else
		{
			if (!anim.GetBool('spiderDie'))
			{
			//Debug.Log('leave battle');
			//Debug.Log('spider idle: '+anim.GetBool("spiderIdle"));
			//Debug.Log('spider attack: '+anim.GetBool("spiderAttack"));
			//Debug.Log('spider die: '+anim.GetBool("spiderDie"));
			anim.SetBool("spiderAttack",false);
			anim.SetBool("spiderIdle",true);
			}
		}

	}
	else
	{
		anim.SetBool("spiderAttack",false);
		anim.SetBool("spiderIdle",true);
	}

}


