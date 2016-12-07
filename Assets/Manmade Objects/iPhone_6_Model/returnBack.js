#pragma strict

var cameraRig: Transform;
var secretLoc: Vector3;
var originalPos: Vector3;
var performed: boolean;

function Start () {
	originalPos  = gameObject.transform.position;
	cameraRig = GameObject.Find("[CameraRig]").transform;
	secretLoc = Vector3(3.94, 0, 4.93);
	performed = false;
}

function Update () {
//	Debug.Log(gameObject.transform.position.y);
//	 if the iphone is dropped, use -10 as hardcoded location indicator, should use relative gameObject.transform.position location instead
	if (gameObject.transform.position.y<-10 && !performed)
	{
		Debug.Log("Go Back!");
		cameraRig.position = secretLoc;
		cameraRig.rotation = Quaternion.AngleAxis(90, Vector3.up);
		performed= true;
	}
	if(cameraRig.transform.position == secretLoc && performed)
	{
	gameObject.transform.position = originalPos;
	performed=false;
	Debug.Log("Transporter Resotred");
	}
}