console.log('Loaded!');
// change the te=xt of the main-text div
var element= document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image

var img= document.getElementById('madi');
var marginleft = 0;
function moveRight(){
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft+'px';
}

img.onclick = function(){
var interval = setInterval(moveRight,50);

};