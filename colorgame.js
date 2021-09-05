var numBox=6;
var colors= colorChanger(6);
var colorPicker= pickColor();
var box = document.querySelectorAll(".square");
var change=document.getElementById("change");
var message=document.querySelector("#message");
var heading=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
change.textContent=colorPicker;


hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numBox=6;
	colors=colorChanger(numBox);
	colorPicker=pickColor();
	change.textContent=colorPicker;
	for(var i=0; i<box.length;i++){
		
		box[i].style.background=colors[i];
		box[i].style.display="block";
	}	
});



easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numBox=3;
	colors=colorChanger(numBox);
	colorPicker=pickColor();
	change.textContent=colorPicker;
	for(var i=0;i<box.length;i++){
		if(colors[i]){
			box[i].style.background=colors[i];
		}
		else{
			box[i].style.display="none";
		}
	}
	
});




reset.addEventListener("click",function(){
	colors=colorChanger(numBox);
	colorPicker=pickColor();
	reset.textContent="New Color"

	change.textContent=colorPicker;
	for(var i=0; i<box.length; i++){
		box[i].style.background=colors[i];

		}
	heading.style.background="steelblue";
	message.textContent="";


	});

for(var i=0; i<box.length; i++){
	box[i].style.background=colors[i];

box[i].addEventListener("click",function(){
	var clickedColor=this.style.background;
	if(clickedColor===colorPicker){
		right(colorPicker);
		heading.style.background=colorPicker;
		message.textContent="Correct!!";
		reset.textContent="PLAY AGAIN?"


	} else{
		this.style.background="#232323";
		message.textContent="Try again!!!";
	}

});
}
function right(color){
	for(var i=0;i<box.length;i++){
		box[i].style.background=colorPicker;


	}
}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function colorChanger(num){
	var arr=[];
	for(i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " +   g+ ", "+ b +")";
}