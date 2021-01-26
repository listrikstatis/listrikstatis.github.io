$(document).ready(function(){
  $(".o").hide();
    $(".read").click(function(){
      $(".read").hide(0);
      $(".o").show(100);
    });
});

//--------------------------------------
function contoh(evt, _isi) {
  var j, tabconten, tablink;
  tabconten = document.getElementsByClassName("tabconten");
  for (j = 0; j < tabconten.length; j++) {
    tabconten[j].style.display = "none";
  }
  tablink = document.getElementsByClassName("tablink");
  for (j = 0; j < tablink.length; j++) {
    tablink[j].className = tablink[j].className.replace(" active", "");
  }
  document.getElementById(_isi).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("Open2").click();


