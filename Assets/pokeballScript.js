#pragma strict
var anim: Animator;
var destroyTime=0.5;
var textMesh: TextMesh;

function Start () {
	anim=GameObject.Find("spider").GetComponent.<Animator>();
	textMesh =GameObject.Find("Text").GetComponent.<TextMesh>();
}

function Update () {

}

function OnCollisionEnter(collision: Collision) {
	Debug.Log("collide with: "+collision.gameObject.name);
	if (collision.gameObject.name=='spider'){
		Debug.Log('spider hit! '+anim);
		anim.SetBool("spiderIdle",false);
		anim.SetBool("spiderAttack",false);
		anim.SetBool("spiderDie",true);
		//Debug.Log('spider idle: '+anim.GetBool("spiderIdle"));
		//Debug.Log('spider attack: '+anim.GetBool("spiderAttack"));
		//Debug.Log('spider die: '+anim.GetBool("spiderDie"));
		StartCoroutine(writeStatus('You killed the demon spider!',collision.gameObject));
	}
	else if(collision.gameObject.tag=='pokemon'){
		Debug.Log('captured '+ collision.gameObject.name);
		StartCoroutine (writeStatus('Wow! You captured '+collision.gameObject.name,collision.gameObject));
	}
}

function writeStatus(content,pokemon){
	yield WaitForSeconds(destroyTime);
	textMesh.text = content;
	Destroy(pokemon);
}
