//SOAL 1
function cek(){
  let n1= document.getElementById("m1a").value;

  if (n1 == "150") {
    document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('m1')[0].style.display='block';
    document.getElementsByClassName('ss1')[0].style.display='none';
  } else {
     document.getElementById("m1a").style="border: 3px solid red";   
  }
  
}

//SOAL 2
function cek2(){
  let n2= document.getElementById("m2a").value;

  if (n2 == "200") {
    document.getElementsByClassName('cek2')[0].style.display='none';
    document.getElementsByClassName('m2')[0].style.display='block';
    document.getElementsByClassName('ss2')[0].style.display='none';
  } else {
     document.getElementById("m2a").style="border: 3px solid red";   
  }
  
}

//SOAL 3
function cek3(){
  let n3= document.getElementById("m3a").value;
  let n4= document.getElementById("m3b").value;
  let n5= document.getElementById("m3c").value;

  if (n3 == "1,29" & n4 == "10" & n5 == "4") {
    document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m3')[0].style.display='block';
    document.getElementsByClassName('ss3')[0].style.display='none';
  } else {
     document.getElementById("m3a").style="border: 3px solid red";
     document.getElementById("m3b").style="border: 3px solid red";
     document.getElementById("m3c").style="border: 3px solid red";    
  }
   if (n3 == "1,29") {
    document.getElementById("m3a").style="border: 3px solid green";
  } else {
     document.getElementById("m3a").style="border: 3px solid red";
  }

  if (n4 == "10") {
    document.getElementById("m3b").style="border: 3px solid green";
  } else {
     document.getElementById("m3b").style="border: 3px solid red";
  }

  if (n5 == "4") {
    document.getElementById("m3c").style="border: 3px solid green";
  } else {
     document.getElementById("m3c").style="border: 3px solid red";
  }

}

//Input Soal 1
$('input[id="m1a"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 2
$('input[id="m2a"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 3
