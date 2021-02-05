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
  document.getElementById('nomor2').style.display = 'block';
  document.getElementById('false').style.display = 'none';
  document.getElementById('false1').style.display = 'none';
  document.getElementById('false2').style.display = 'none';
}

function salah2(){
  document.getElementById('b2').style.display = 'none';
  document.getElementById('s2').style.display = 'block';
}

function benar2(){
  document.getElementById('b2').style.display = 'block';
  document.getElementById('s2').style.display = 'none';    
  document.getElementById('nomor3').style.display = 'block';  
  document.getElementById('false3').style.display = 'none';
  document.getElementById('false4').style.display = 'none';
  document.getElementById('false5').style.display = 'none';
}

function salah3(){
  document.getElementById('b3').style.display = 'none';
  document.getElementById('s3').style.display = 'block';
}

function benar3(){
  document.getElementById('b3').style.display = 'block';
  document.getElementById('s3').style.display = 'none'; 
  document.getElementById('false6').style.display = 'none';
  document.getElementById('false7').style.display = 'none';
  document.getElementById('false8').style.display = 'none';
  document.getElementById('kesimpulan').style.display = 'block';  
  document.getElementById('deret').style.display = 'block';
}

//Halaman 3
function cekjwbn(){
  document.getElementById("no1").value = document.getElementById("no1").value.toLowerCase();
  var aaa= document.getElementById("no1").value;
  var cek1 = document.getElementById("cek1");

  if (aaa == "negatif") {
    cek1.src = "../../img/benar.png";
    document.getElementById("no1").style="border: 2px solid green";
  } else {
    cek1.src = "../../img/salah.png";
    document.getElementById("no1").style="border: 2px solid red";
  }
}

function cekjwbn2(){
  document.getElementById("no2").value = document.getElementById("no2").value.toLowerCase();
  var aaa= document.getElementById("no2").value;
  var cek2 = document.getElementById("cek2");

  if (aaa == "negatif") {    
    cek2.src = "../../img/benar.png";
    document.getElementById("no2").style="border: 2px solid green";
  } else {
    cek2.src = "../../img/salah.png";
    document.getElementById("no2").style="border: 2px solid red";
  }
}

function cekjwbn3(){
  document.getElementById("no3").value = document.getElementById("no3").value.toLowerCase();
  var aaa= document.getElementById("no3").value;
  var cek3 = document.getElementById("cek3");

  if (aaa == "positif") {
    cek3.src = "../../img/benar.png";
    document.getElementById("no3").style="border: 2px solid green";
  } else {
    cek3.src = "../../img/salah.png";
    document.getElementById("no3").style="border: 2px solid red";
  }
}

function cekjwbn4(){
  document.getElementById("no4").value = document.getElementById("no4").value.toLowerCase();
  var aaa= document.getElementById("no4").value;
  var cek4 = document.getElementById("cek4");

  if (aaa == "negatif") {    
    cek4.src = "../../img/benar.png";
    document.getElementById("no4").style="border: 2px solid green";
  } else {
    cek4.src = "../../img/salah.png";
    document.getElementById("no4").style="border: 2px solid red";
  }
}

function cekjwbn5(){
  document.getElementById("no5").value = document.getElementById("no5").value.toLowerCase();
  var aaa= document.getElementById("no5").value;
  var cek5 = document.getElementById("cek5");

  if (aaa == "positif") {
    cek5.src = "../../img/benar.png";
    document.getElementById("no5").style="border: 2px solid green";
  } else {
    cek5.src = "../../img/salah.png";
    document.getElementById("no5").style="border: 2px solid red";
  }
}