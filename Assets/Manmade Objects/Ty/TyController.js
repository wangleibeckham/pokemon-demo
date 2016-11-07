#pragma strict

var anim: Animator;


function Start () {

	anim = GetComponent.<Animator>();

	anim.SetBool("dodge",true);
	anim.SetBool("reset",true);
}

function Update () {


	}
