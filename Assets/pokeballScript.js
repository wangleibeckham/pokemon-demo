#pragma strict
var anim: Animator;
var animTY: Animator;
var textMesh: TextMesh;

function Start () {
	
	textMesh =GameObject.Find("Text").GetComponent.<TextMesh>();
}

function Update () {
}

function OnCollisionEnter(collision: Collision) {
	//Debug.Log("collide with: "+collision.gameObject.name);
	if (collision.gameObject.tag=='spider'){
		anim=collision.gameObject.GetComponent.<Animator>();
		Debug.Log('spider hit! '+anim);
		anim.SetBool("spiderIdle",false);
		anim.SetBool("spiderAttack",false);
		anim.SetBool("spiderRun",false);
		anim.SetBool("spiderDie",true);
		//Debug.Log('spider idle: '+anim.GetBool("spiderIdle"));
		//Debug.Log('spider attack: '+anim.GetBool("spiderAttack"));
		//Debug.Log('spider die: '+anim.GetBool("spiderDie"));
		StartCoroutine(writeStatus('You killed the demon spider!',collision.gameObject,gameObject,3));
	}
	//else if (collision.gameObject.name=='Ty'){
	//	animTY.SetBool("dodge",true);
	//}
	else if(collision.gameObject.tag=='pokemon'){
		//Debug.Log('captured '+ collision.gameObject.name);
		StartCoroutine (writeStatus('Wow! You captured '+collision.gameObject.name,collision.gameObject,gameObject,1));
	}
}

function writeStatus(content,pokemon,pokeball,destroyTime){
	yield WaitForSeconds(destroyTime);
	textMesh.text = content;
	Destroy(pokemon);
	Destroy(pokeball);

	}
