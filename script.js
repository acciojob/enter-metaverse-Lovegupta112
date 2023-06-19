//your JS code here. If required.
window.addEventListener('load',()=>{
	let div=document.createElement('div');
	let p=document.createElement('p');
	p.id='status';
	p.innerText="Enter the Metaverse";

	div.append(p);
	
	let btn=document.createElement('Button');
	btn.id='enterBtn';
	btn.innerText='Enter';
	btn.addEventListener('click',change);
	document.body.append(div);
	document.body.append(btn);
})

function change(){
	let div=document.getElementsByTagName('div')[0];
	
	let h1=document.createElement('h1');
	// h1.id='status';
	h1.innerText='Entered Metaverse';

	div.innerHTML="";
	div.append(h1);
}










