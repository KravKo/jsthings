console.log("hello world");
let score = 0;
let top_div = document.getElementById('score');
const addbtn = document.getElementById('addbtn');
const rebtn = document.getElementById('rebtn')
const subbtn = document.getElementById('subbtn')
const history = document.getElementById('history')
const savedata = document.getElementById('savedata')
const savebtn = document.getElementById('savebtn')


function main(){
	addbtn.addEventListener('click', function() {
		score++;
		top_div.innerHTML = score;
		console.log(score);
		history.innerHTML="Process: Adding"
	})

	rebtn.addEventListener('click', function(){
		score = 0;
		top_div.innerHTML = score;
		history.innerHTML="Process: Reset"
	})

	subbtn.addEventListener('click', function(){
		score--;
		top_div.innerHTML = score;

		history.innerHTML="Process: Subtrating"
	})

	savebtn.addEventListener('click', function(){
		savedata.innerHTML="Save: "+ score
	})



}
main();