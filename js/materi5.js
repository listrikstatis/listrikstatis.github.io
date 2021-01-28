$(document).ready(function(){
			$('.kolom').hide();
			
	$('.klik').click(function(){
      $('.kolom').show(500);
      $('.first').hide();
		});	
	});

//pertanyaan bagian sel saraf 
function cekjwb(){
  var aaa= document.getElementById("aa").value;
  aaa = str.toLowerCase();
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


//Input 
$('input[id="aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="ab"]').keyup(function(e)
                                {
  if (/^-?\d*$/.test(this.value))
  {
    this.value = this.value.replace(/^-?\d*$/, '');
  }
});