window.alert("You are about to enter a world of chaos");

function changePic() {
var counter=0;
if (counter%2=0){
  document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pic_de_neige_cordier_Face_E.jpg";
} else {
  document.getElementById("image").src = "static.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg";
  //document.getElementById("image").src = "http://www.nicoleisthenewblack.com/wp-content/uploads/2011/09/vintage-hand-about-me.png";
}
counter+=1
}
