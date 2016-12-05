#pragma strict

var location: Vector3;

function Start () {
}

function Update () {
	location = gameObject.transform.position;
	Debug.Log("Current HeadSet Location: "+location);
}