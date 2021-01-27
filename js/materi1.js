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