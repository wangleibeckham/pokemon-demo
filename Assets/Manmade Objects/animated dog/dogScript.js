#pragma strict


var posX:float;
var posY:float;
var posZ:float;
var cameraRig: Transform;

function Start () {
	cameraRig = GameObject.Find("[CameraRig]").transform;
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));
}

function FixedUpdate(){
	// use fixed update for lookat function, so the wait time is fixed, not subject to func running time.
	transform.LookAt(Vector3(cameraRig.position.x,transform.position.y,cameraRig.position.z));

}