$(document).ready(function(){
      $('.kolom').hide();
      // $('.bawah').hide();

    document.getElementById('videoo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.kolom').show(100);
      // $('.bawah').show(1000);
      $('.first2').hide(100);
    }
    
  });

$(document).ready(function(){      
      $('.kolom1').hide();

    document.getElementById('videoo1').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.kolom1').show();
      $('.end').hide(100);
    }
    
});

//halaman 1
function sal(){  
  var cek1 = document.getElementById("ceksal1");
  
    cek1.src = "../../img/salah.png";
    document.getElementById("ceksal2").style.display = 'none';    
    document.getElementById("ceksal3").style.display = 'none';        
    document.getElementById("ceksal1").style.display = 'unset'; 
}
function sal2(){  
  var cek2 = document.getElementById("ceksal2");
    cek2.src = "../../img/salah.png";

    document.getElementById("ceksal1").style.display = 'none';    
    document.getElementById("ceksal3").style.display = 'none';    
    document.getElementById("ceksal2").style.display = 'unset';
}
function sal3(){   
  var cek3 = document.getElementById("ceksal3");
    cek3.src = "../../img/salah.png";
    
    document.getElementById("ceksal2").style.display = 'none';    
    document.getElementById("ceksal1").style.display = 'none';    
    document.getElementById("ceksal3").style.display = 'unset';
}
function ben(){  
  var cek1 = document.getElementById("cekbenar");
  document.getElementById('nomor2').style.display = 'block';
  
    cek1.src = "../../img/benar.png";
  
    document.getElementById("ceksal2").style.display = 'none';    
    document.getElementById("ceksal3").style.display = 'none';    
    document.getElementById("ceksal1").style.display = 'none';
}

function sal4(){  
  var cek6 = document.getElementById("fal1");
  
    cek6.src = "../../img/salah.png";
    document.getElementById("fal2").style.display = 'none';    
    document.getElementById("fal3").style.display = 'none';        
    document.getElementById("fal1").style.display = 'unset'; 
}
function sal5(){  
  var cek5 = document.getElementById("fal2");
    cek5.src = "../../img/salah.png";

    document.getElementById("fal1").style.display = 'none';    
    document.getElementById("fal3").style.display = 'none';    
    document.getElementById("fal2").style.display = 'unset';
}
function sal6(){   
  var cek6 = document.getElementById("fal3");
    cek6.src = "../../img/salah.png";
    
    document.getElementById("fal2").style.display = 'none';    
    document.getElementById("fal1").style.display = 'none';    
    document.getElementById("fal3").style.display = 'unset';
}
function ben2(){  
  var cekbenar2 = document.getElementById("cekbenar2");
  document.getElementById('none').style.display = 'block';
  
    cekbenar2.src = "../../img/benar.png";
  
    document.getElementById("fal2").style.display = 'none';    
    document.getElementById("fal3").style.display = 'none';    
    document.getElementById("fal1").style.display = 'none';
}

//Halaman 2 atas
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

//Halaman 2 bawah
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

$('.inputan').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
);