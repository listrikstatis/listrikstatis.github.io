$(document).ready(function(){
			$('.kolom').hide();
			
	$('.klik').click(function(){
      $('.kolom').show(500);
      $('.first').hide();
		});	
	});

//pertanyaan bagian sel saraf 
function cekjwb(){
  document.getElementById("aa").value = document.getElementById("aa").value.toLowerCase();
  var aaa= document.getElementById("aa").value;
  var ceka = document.getElementById("ceka");

  if (aaa == "dendrit") {
    ceka.src = "../../img/benar.png";
    document.getElementById("aa").style="border: 2px solid green";
  } else {
    ceka.src = "../../img/salah.png";
    document.getElementById("aa").style="border: 2px solid red";
  }
}

function cekjwba(){
  document.getElementById("ab").value = document.getElementById("ab").value.toLowerCase();
	var abb= document.getElementById("ab").value; 
	var cekb = document.getElementById("cekb");

   if (abb == "akson" || abb == "neurit") {
    cekb.src = "../../img/benar.png";
    document.getElementById("ab").style="border: 2px solid green";
  } else {
    cekb.src = "../../img/salah.png";
    document.getElementById("ab").style="border: 2px solid red";
  }
}

function cekjwbb(){
  document.getElementById("ac").value = document.getElementById("ac").value.toLowerCase();
  	var acc= document.getElementById("ac").value;
  	var cekc = document.getElementById("cekc");

  if (acc == "badan sel") {
    cekc.src = "../../img/benar.png";
    document.getElementById("ac").style="border: 2px solid green";
  } else {
    cekc.src = "../../img/salah.png";
    document.getElementById("ac").style="border: 2px solid red";
  }
}

function cekjwbc(){
  document.getElementById("ad").value = document.getElementById("ad").value.toLowerCase();
  var add= document.getElementById("ad").value;  
  var cekd = document.getElementById("cekd");

  if (add == "nodus ranvier") {
    cekd.src = "../../img/benar.png";
    document.getElementById("ad").style="border: 2px solid green";
  } else {
    cekd.src = "../../img/salah.png";
    document.getElementById("ad").style="border: 2px solid red";
  }
}

function cekjwbd(){
  document.getElementById("ae").value = document.getElementById("ae").value.toLowerCase();
	var aee= document.getElementById("ae").value;  
  	var ceke = document.getElementById("ceke");
  if (aee == "myelin") {
    ceke.src = "../../img/benar.png";
    document.getElementById("ae").style="border: 2px solid green";
  } else {
    ceke.src = "../../img/salah.png";
    document.getElementById("ae").style="border: 2px solid red";
  }

}

function openhewan(evt, _Name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(_Name).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

