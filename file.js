//object.onclick=function(){myScript};
//document.getElementById("demo").addEventListener("click", myFunction);

function myFunction(){
   changeImage();
}

function changeImage() {
        if (document.getElementById("imgClickAndChange").src == "play.png") 
        {
            document.getElementById("imgClickAndChange").src = "start.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "play.png";
        }
} 
changeImage();   

