var i=0;
var images = [];
var time = 3000;

images[0]="pildid/piro1.jpg"
images[1]="pildid/piro2.jpg"
images[2]="pildid/piro3.jpg"

function slidid(){
    document.pildid.src = images[i]

    if(i < images.length-1){
        i++;
    } else {
        i = 0
    }

    setTimeout("slidid()", time);
}
window.onload = slidid