$(document).ready(function(){
			$('.kolom').hide();
			
	$('.klik').click(function(){
			$('.kolom').show(500);
		});	
	});

//pertanyaan bagian sel saraf 
function cekjwb(){
  var aa= document.getElementById("aa").value;
  var ceka = document.getElementById("ceka");

  if (aa == "Dendrit" || aa == "dendrit") {
    ceka.src = "../../img/benar.png";
    document.getElementById("aa").style="border: 2px solid green";
  } else {
    ceka.src = "../../img/salah.png";
    document.getElementById("aa").style="border: 2px solid red";
  }
}

function cekjwba(){
	var ab= document.getElementById("ab").value; 
	var cekb = document.getElementById("cekb");

   if (ab == "Akson" || ab == "akson" || ab == "neurit") {
    cekb.src = "../../img/benar.png";
    document.getElementById("ab").style="border: 2px solid green";
  } else {
    cekb.src = "../../img/salah.png";
    document.getElementById("ab").style="border: 2px solid red";
  }
}

function cekjwbb(){
  	var ac= document.getElementById("ac").value;
  	var cekc = document.getElementById("cekc");

  if (ac == "Badan sel" || ac == "badan sel") {
    cekc.src = "../../img/benar.png";
    document.getElementById("ac").style="border: 2px solid green";
  } else {
    cekc.src = "../../img/salah.png";
    document.getElementById("ac").style="border: 2px solid red";
  }
}

function cekjwbc(){
  var ad= document.getElementById("ad").value;  
  var cekd = document.getElementById("cekd");

  if (ad == "Nodus ranvier" || ad == "nodus ranvier") {
    cekd.src = "../../img/benar.png";
    document.getElementById("ad").style="border: 2px solid green";
  } else {
    cekd.src = "../../img/salah.png";
    document.getElementById("ad").style="border: 2px solid red";
  }
}

function cekjwbd(){
	var ae= document.getElementById("ae").value;  
  	var ceke = document.getElementById("ceke");
  if (ae == "Myelin" || ae == "myelin") {
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

