$(document).ready(function(){
      $('.kolom').hide();
      $('.bawah').hide();

    document.getElementById('videoo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.kolom').show(100);
      $('.bawah').show(1000);
      $('.first2').hide(100);
    }
    
  });

//Halaman 2
function salah(){
  document.getElementById('b1').style.display = 'none';
  document.getElementById('s1').style.display = 'block';
}
function benar(){
  document.getElementById('b1').style.display = 'block';
  document.getElementById('s1').style.display = 'none';
}

function salah2(){
  document.getElementById('b2').style.display = 'none';
  document.getElementById('s2').style.display = 'block';
}

function benar2(){
  document.getElementById('b2').style.display = 'block';
  document.getElementById('s2').style.display = 'none';
}

function salah3(){
  document.getElementById('b3').style.display = 'none';
  document.getElementById('s3').style.display = 'block';
}
function benar3(){
  document.getElementById('b3').style.display = 'block';
  document.getElementById('s3').style.display = 'none';
}

//Halaman 3
function cekjwbn(){
  document.getElementById("no1").value = document.getElementById("no1").value.toLowerCase();
  var aaa= document.getElementById("no1").value;

  if (aaa == "negatif") {
    document.getElementById("no1").style="border: 2px solid green";
  } else {
    document.getElementById("no1").style="border: 2px solid red";
  }
}

function cekjwbn2(){
  document.getElementById("no2").value = document.getElementById("no2").value.toLowerCase();
  var aaa= document.getElementById("no2").value;

  if (aaa == "negatif") {
    document.getElementById("no2").style="border: 2px solid green";
  } else {
    document.getElementById("no2").style="border: 2px solid red";
  }
}

function cekjwbn3(){
  document.getElementById("no3").value = document.getElementById("no3").value.toLowerCase();
  var aaa= document.getElementById("no3").value;

  if (aaa == "positif") {
    document.getElementById("no3").style="border: 2px solid green";
  } else {
    document.getElementById("no3").style="border: 2px solid red";
  }
}

function cekjwbn4(){
  document.getElementById("no4").value = document.getElementById("no4").value.toLowerCase();
  var aaa= document.getElementById("no4").value;

  if (aaa == "negatif") {
    document.getElementById("no4").style="border: 2px solid green";
  } else {
    document.getElementById("no4").style="border: 2px solid red";
  }
}

function cekjwbn5(){
  document.getElementById("no5").value = document.getElementById("no5").value.toLowerCase();
  var aaa= document.getElementById("no5").value;

  if (aaa == "positif") {
    document.getElementById("no5").style="border: 2px solid green";
  } else {
    document.getElementById("no5").style="border: 2px solid red";
  }
}