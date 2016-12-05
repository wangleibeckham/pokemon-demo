#pragma strict

var cameraRig: Transform;
var secretLoc: Vector3;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	secretLoc = Vector3(3.94, 0, 4.93);

}

function Update () {
//	Debug.Log(gameObject.transform.position.y);
//	 if the iphone is dropped, use 995 as hardcoded location indicator, should use relative gameObject.transform.position location instead
	if (gameObject.transform.position.y<995)
	{
		Debug.Log("Go Back!");
		cameraRig.position = secretLoc;
		cameraRig.rotation = Quaternion.AngleAxis(90, Vector3.up);
	}

}