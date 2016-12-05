#pragma strict

var cameraRig: Transform;
var secretLoc: Vector3;
var performed: boolean;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	secretLoc = Vector3(-994, 998, 1001);
	performed = false;
}

function Update () {
	// if the iphone is dropped, use -2 as hardcoded location indicator, should use relative gameObject.transform.position location instead
	if (gameObject.transform.position.y<-2 && !performed)
	{
		Debug.Log("Transport To Secret Location");
		cameraRig.position = secretLoc;
		cameraRig.rotation = Quaternion.AngleAxis(-90, Vector3.up);
		performed= true;
	}

}