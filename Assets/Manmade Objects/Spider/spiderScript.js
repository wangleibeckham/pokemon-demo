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


	if(parseInt(posZ)<=parseInt(spiderZ) && parseInt(posZ)>=parseInt(spiderZ)-4)
	{
 		if (parseInt(posX)>=parseInt(spiderX)-1 &&parseInt(posX)<=parseInt(spiderX)+1)
 		{
 			Debug.Log('Spider Attack!');
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


