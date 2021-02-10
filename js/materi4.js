$(document).ready(function(){
    $(".contohsoal").hide();
    $(".pertanyaan").hide();
    $(".soalbtn").hide();
          $(".contohbtn").click(function(){
              $(".contohsoal").show(0);
              $(".contohbtn").hide(0);              
              $(".soalbtn").show(0);
          });     
          
          $(".soalbtn").click(function(){
              $(".pertanyaan").show(0);
              $(".soalbtn").hide(0);
          });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeuy", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeuy";
}

//SOAL 1
function cek(){
  let v1= document.getElementById("v1").value;
  let q1= document.getElementById("q1").value;
  let h1= document.getElementById("h1").value;

  if (v1 == "9" && q1 == "30" && h1 == "270") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j1')[0].style.display='block';
  } else {
    document.getElementsByClassName('none')[0].style.display='none'; 
    document.getElementById("v1").style="border: 3px solid red"; 
    document.getElementById("q1").style="border: 3px solid red"; 
    document.getElementById("h1").style="border: 3px solid red";
  }
  
  if (v1 == "9"){
    document.getElementById("v1").style="border: 3px solid green";   
  } else{
    document.getElementById("v1").style="border: 3px solid red";
  }
  
  if (q1 == "30"){
    document.getElementById("q1").style="border: 3px solid green";   
  } else{
    document.getElementById("q1").style="border: 3px solid red";
  }
  
  if (h1 == "270"){
    document.getElementById("h1").style="border: 3px solid green";   
  } else{
    document.getElementById("h1").style="border: 3px solid red";
  }

}

function cek11(){
  let v1= document.getElementById("v1").value;
  
  if (v1 == "9"){
    document.getElementById("v1").style="border: 3px solid green";     
    document.getElementsByClassName('none')[0].style.display='none';    
  } else{
    document.getElementById("v1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek12(){
  let q1= document.getElementById("q1").value;
  
  if (q1 == "30"){
    document.getElementById("q1").style="border: 3px solid green";        
    document.getElementsByClassName('none')[0].style.display='none'; 
  } else{
    document.getElementById("q1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek13(){
  let h1= document.getElementById("h1").value;
  
  if (h1 == "270"){
    document.getElementById("h1").style="border: 3px solid green";      
    document.getElementsByClassName('none')[0].style.display='none';   
  } else{
    document.getElementById("h1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

//SOAL 2
function cek2(){
  
  let a2= document.getElementById("2aa").value;
  let b2= document.getElementById("2ab").value;
  
  if (a2 == "45" && b2 == "15") {
    document.getElementsByClassName('p2')[0].style.display='block';
    document.getElementsByClassName('table2')[0].style.display='none';
    document.getElementsByClassName('jjj')[0].style.display='none';
    document.getElementsByClassName('jj2')[0].style.display='block';
  } else if(a2=="45"){    
    document.getElementById("2aa").style="border: 3px solid green";
    document.getElementById("2ab").style="border: 3px solid red";
  } else if(b2=="15"){    
    document.getElementById("2ab").style="border: 3px solid green";
    document.getElementById("2aa").style="border: 3px solid red";
  } else{    
    document.getElementById("2aa").style="border: 3px solid red";
    document.getElementById("2ab").style="border: 3px solid red";
  }
}

function cekk2(){
  let c2= document.getElementById("2ac").value;

  if(c2 == "3"){    
    document.getElementById("2ac").style="border: 3px solid green";    
    document.getElementsByClassName('jj2')[0].style.display='none';
    document.getElementsByClassName('ja2')[0].style.display='block';
    document.getElementsByClassName('j2')[0].style.display='block';
  } else{    
    document.getElementById("2ac").style="border: 3px solid red";
  }
}

//SOAL 3
function cek3(){
  
  let a3= document.getElementById("3aa").value;
  let b3= document.getElementById("3ab").value;
  
  if (a3 == "100" && b3 == "10") {
    document.getElementsByClassName('p3')[0].style.display='block';
    document.getElementsByClassName('table1')[0].style.display='none';
    document.getElementsByClassName('jjj3')[0].style.display='none';
    document.getElementsByClassName('jj3')[0].style.display='block';
  } else if(a3=="100"){    
    document.getElementById("3aa").style="border: 3px solid green";
    document.getElementById("3ab").style="border: 3px solid red";
  } else if(b3=="10"){    
    document.getElementById("3ab").style="border: 3px solid green";
    document.getElementById("3aa").style="border: 3px solid red";
  } else{    
    document.getElementById("3aa").style="border: 3px solid red";
    document.getElementById("3ab").style="border: 3px solid red";
  }
}

function cekk3(){
  let c3= document.getElementById("3ac").value;

  if(c3 == "10"){    
    document.getElementById("3ac").style="border: 3px solid green";    
    document.getElementsByClassName('jj3')[0].style.display='none';
    document.getElementsByClassName('ja3')[0].style.display='block';
    document.getElementsByClassName('j3')[0].style.display='block';
  } else{    
    document.getElementById("3ac").style="border: 3px solid red";
  }
}

//SOAL 4
function cek4(){
  
  let a4= document.getElementById("4aa").value;
  let b4= document.getElementById("4ab").value;
  
  if (a4 == "210" && b4 == "30") {
    document.getElementsByClassName('p4')[0].style.display='block';
    document.getElementsByClassName('table4')[0].style.display='none';
    document.getElementsByClassName('jjj4')[0].style.display='none';
    document.getElementsByClassName('jj4')[0].style.display='block';
  } else if(a4=="210"){    
    document.getElementById("4aa").style="border: 3px solid green";
    document.getElementById("4ab").style="border: 3px solid red";
  } else if(b4=="30"){    
    document.getElementById("4ab").style="border: 3px solid green";
    document.getElementById("4aa").style="border: 3px solid red";
  } else{    
    document.getElementById("4aa").style="border: 3px solid red";
    document.getElementById("4ab").style="border: 3px solid red";
  }
}

function cekk4(){
  let c4= document.getElementById("4ac").value;

  if(c4 == "70"){    
    document.getElementById("4ac").style="border: 3px solid green";    
    document.getElementsByClassName('jj4')[0].style.display='none';
    document.getElementsByClassName('ja4')[0].style.display='block';
    document.getElementsByClassName('j4')[0].style.display='block';
  } else{    
    document.getElementById("4ac").style="border: 3px solid red";
  }
}

//Input Soal 
$('input[class="bp"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});

