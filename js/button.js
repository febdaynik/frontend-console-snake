function next_block(btn) {

	let cont = document.getElementsByClassName("container");
	console.log(btn.id)
	try{
		cont[btn.id-1].classList.toggle("inv");
		cont[btn.id].classList.toggle("inv");
	}
	catch(x){
		cont[btn.id].classList.toggle("inv");
		cont[cont.length-1].classList.toggle("inv");
	}
}

function icon(){
	let block = document.getElementById("mini_pashalka");
	block.classList.toggle("inv");
}