$(document).ready(function(){
      $('.kolom').hide();
      
    document.getElementById('videooo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.kolom').show(600);
      $('.first').hide(100);
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
  document.getElementById('gaya').style.display = 'block';
}

//SOAL 1
function cek(){
  let c1= document.getElementById("c1a").value;

  if (c1 == "0,8" || c1 == "0.8") {
    document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('co1')[0].style.display='block';
    document.getElementsByClassName('cc1')[0].style.display='none';
  } else {
     document.getElementById("c1a").style="border: 3px solid red";   
  }
  
}

//SOAL 2
function cek2(){
  let c2= document.getElementById("c1b").value;
  let c3= document.getElementById("c2b").value;
  let c4= document.getElementById("c3b").value;

  if (c2 == "3" && c3 == "10" && c4 == "3") {
    document.getElementsByClassName('cek2')[0].style.display='none';
    document.getElementsByClassName('co2')[0].style.display='block';
    document.getElementsByClassName('cc2')[0].style.display='none';
  } else {
     document.getElementById("c1b").style="border: 3px solid red";
     document.getElementById("c2b").style="border: 3px solid red";
     document.getElementById("c3b").style="border: 3px solid red";   
  }
   if (c2 == "3") {
    document.getElementById("c1b").style="border: 3px solid green";
  } else {
     document.getElementById("c1b").style="border: 3px solid red";
  }

  if (c3 == "10") {
    document.getElementById("c2b").style="border: 3px solid green";
  } else {
     document.getElementById("c2b").style="border: 3px solid red";
  }

  if (c4 == "3") {
    document.getElementById("c3b").style="border: 3px solid green";
  } else {
     document.getElementById("c3b").style="border: 3px solid red";
  }
}

//SOAL 3
function cek3(){
  let cb31= document.getElementById("cb31").value;
  let cb32= document.getElementById("cb32").value;
  let cb33= document.getElementById("cb33").value;
  let cb34= document.getElementById("cb34").value;
  let cb35= document.getElementById("cb35").value;
  let cb36= document.getElementById("cb36").value;
  let cb37= document.getElementById("cb37").value;

  if (cb31 == "10" && cb32 == "20" && cb33 == "0,2" && cb34 == "2" && cb35 == "4,5" && cb36 == "10" && cb37 == "13") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('co3')[0].style.display='block';
  } else {
    document.getElementById("cb31").style="border: 3px solid red"; 
    document.getElementById("cb32").style="border: 3px solid red"; 
    document.getElementById("cb33").style="border: 3px solid red"; 
    document.getElementById("cb34").style="border: 3px solid red"; 
    document.getElementById("cb35").style="border: 3px solid red"; 
    document.getElementById("cb36").style="border: 3px solid red"; 
    document.getElementById("cb37").style="border: 3px solid red"; 
  }
  
  if (mi1 == "2,5"){
    document.getElementById("mi1").style="border: 3px solid green";   
  } else{
    document.getElementById("mi1").style="border: 3px solid red";
  }
  
  if (mi2 == "10"){
    document.getElementById("mi2").style="border: 3px solid green";   
  } else{
    document.getElementById("mi2").style="border: 3px solid red";
  }
  
  if (mi3 == "-5"){
    document.getElementById("mi3").style="border: 3px solid green";   
  } else{
    document.getElementById("mi3").style="border: 3px solid red";
  }
  
  if (mi4 == "0,3"){
    document.getElementById("mi4").style="border: 3px solid green";   
  } else{
    document.getElementById("mi4").style="border: 3px solid red";
  }
  
  if (mi5 == "2"){
    document.getElementById("mi5").style="border: 3px solid green";   
  } else{
    document.getElementById("mi5").style="border: 3px solid red";
  }
  
  if (mi6 == "2,5"){
    document.getElementById("mi6").style="border: 3px solid green";   
  } else{
    document.getElementById("mi6").style="border: 3px solid red";
  }
  
  if (mi7 == "10"){
    document.getElementById("mi7").style="border: 3px solid green";   
  } else{
    document.getElementById("mi7").style="border: 3px solid red";
  }

  if (mi8 == "6"){
    document.getElementById("mi8").style="border: 3px solid green";   
  } else{
    document.getElementById("mi8").style="border: 3px solid red";
  }
}

function cek31(){
  let mi1= document.getElementById("mi1").value;
  
  if (mi1 == "2,5"){
    document.getElementById("mi1").style="border: 3px solid green";     
    document.getElementsByClassName('none3')[0].style.display='none';    
  } else{
    document.getElementById("mi1").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek32(){
  let mi2= document.getElementById("mi2").value;
  
  if (mi2 == "10"){
    document.getElementById("mi2").style="border: 3px solid green";        
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("mi2").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek33(){
  let mi3= document.getElementById("mi3").value;
  
  if (mi3 == "-5"){
    document.getElementById("mi3").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi3").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek34(){
  let mi4= document.getElementById("mi4").value;
  
  if (mi4 == "0,3"){
    document.getElementById("mi4").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi4").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek35(){
  let mi5= document.getElementById("mi5").value;
  
  if (mi5 == "2"){
    document.getElementById("mi5").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi5").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek36(){
  let mi6= document.getElementById("mi6").value;
  
  if (mi6 == "2,5"){
    document.getElementById("mi6").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi6").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek37(){
  let mi7= document.getElementById("mi7").value;
  
  if (mi7 == "10"){
    document.getElementById("mi7").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("mi7").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';    
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}


//Input soal 1
$('input[class="cb"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});
