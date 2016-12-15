#pragma strict

var cameraRig: Transform;
var secretLoc: Vector3;
var originalPos: Vector3;
var performed: boolean;


function Start () {
	originalPos  = gameObject.transform.position;
	cameraRig = GameObject.Find("[CameraRig]").transform;
	secretLoc = Vector3(3002, 10, 2001);
	performed = false;
}

function Update () {
	// if the iphone is dropped, use -2 as hardcoded location indicator, should use relative gameObject.transform.position location instead
	if (gameObject.transform.position.y<-3 && !performed)
	{
		Debug.Log("Transport To Secret Location");
		cameraRig.position = secretLoc;
		performed = true;
	}

	if(cameraRig.transform.position == secretLoc && performed)
	{
	gameObject.transform.position = originalPos;
	performed=false;
	Debug.Log("Arena Transporter Resotred");
	}

}