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
  let c11= document.getElementById("c11").value;
  let c12= document.getElementById("c12").value;
  let c13= document.getElementById("c13").value;
  let c14= document.getElementById("c14").value;
  let c15= document.getElementById("c15").value;
  let c16= document.getElementById("c16").value;
  let c17= document.getElementById("c17").value;
  let c18= document.getElementById("c18").value;
  let c19= document.getElementById("c19").value;

  if (c11 == "4" && c12 == "10" && c13 == "-6" && c14 == "8" && c15 == "10" && c16 == "-6" && c17 == "0,6" && c18 == "2" && c19 == "0,8") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('co1')[0].style.display='block';
  } else {          
    document.getElementsByClassName('non1')[0].style.display='none'; 
    document.getElementById("c11").style="border: 3px solid red"; 
    document.getElementById("c12").style="border: 3px solid red"; 
    document.getElementById("c13").style="border: 3px solid red"; 
    document.getElementById("c14").style="border: 3px solid red"; 
    document.getElementById("c15").style="border: 3px solid red"; 
    document.getElementById("c16").style="border: 3px solid red"; 
    document.getElementById("c17").style="border: 3px solid red";  
    document.getElementById("c18").style="border: 3px solid red"; 
    document.getElementById("c19").style="border: 3px solid red"; 
  }
  if (c11 == "4"){
    document.getElementById("c11").style="border: 3px solid green";   
  } else {
    document.getElementById("c11").style="border: 3px solid red"; 
  }
  
  if(c12 == "10"){
    document.getElementById("c12").style="border: 3px solid green";
  } else {
    document.getElementById("c12").style="border: 3px solid red"; 
  }
  
  if(c13 == "-6"){
    document.getElementById("c13").style="border: 3px solid green";
  } else {
    document.getElementById("c13").style="border: 3px solid red"; 
  }
  
  if(c14 == "8"){
    document.getElementById("c14").style="border: 3px solid green";
  } else {
    document.getElementById("c14").style="border: 3px solid red"; 
  }
  
  if(c15 == "10"){
    document.getElementById("c15").style="border: 3px solid green";
  } else {
    document.getElementById("c15").style="border: 3px solid red"; 
  }
  
  if(c16 == "-6"){
    document.getElementById("c16").style="border: 3px solid green";
  } else {
    document.getElementById("c16").style="border: 3px solid red"; 
  }
  
  if(c17 == "0,6"){
    document.getElementById("c17").style="border: 3px solid green";
  } else {
    document.getElementById("c17").style="border: 3px solid red"; 
  }

  if(c18 == "2"){
    document.getElementById("c18").style="border: 3px solid green";
  } else {
    document.getElementById("c18").style="border: 3px solid red"; 
  }

  if(c19 == "0,8"){
    document.getElementById("c19").style="border: 3px solid green";
  } else {
    document.getElementById("c19").style="border: 3px solid red"; 
  }
}

function cek11(){
  let c11= document.getElementById("c11").value;
  
  if (c11 == "4"){
    document.getElementById("c11").style="border: 3px solid green";     
    document.getElementsByClassName('non1')[0].style.display='none';    
  } else{
    document.getElementById("c11").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek12(){
  let c12= document.getElementById("c12").value;
  
  if (c12 == "10"){
    document.getElementById("c12").style="border: 3px solid green";        
    document.getElementsByClassName('non1')[0].style.display='none'; 
  } else{
    document.getElementById("c12").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek13(){
  let c13= document.getElementById("c13").value;
  
  if (c13 == "-6"){
    document.getElementById("c13").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none';   
  } else{
    document.getElementById("c13").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek14(){
  let c14= document.getElementById("c14").value;
  
  if (c14 == "8"){
    document.getElementById("c14").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none';   
  } else{
    document.getElementById("c14").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek15(){
  let c15= document.getElementById("c15").value;
  
  if (c15 == "10"){
    document.getElementById("c15").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none';   
  } else{
    document.getElementById("c15").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek16(){
  let c16= document.getElementById("c16").value;
  
  if (c16 == "-6"){
    document.getElementById("c16").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none';   
  } else{
    document.getElementById("c16").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';  
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek17(){
  let c17= document.getElementById("c17").value;
  
  if (c17 == "0,6"){
    document.getElementById("c17").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none'; 
  } else{
    document.getElementById("c17").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';    
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek18(){
  let c18= document.getElementById("c18").value;
  
  if (c18 == "2"){
    document.getElementById("c18").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none'; 
  } else{
    document.getElementById("c18").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';    
    document.getElementsByClassName('non1')[0].style.display='block';
  }
}

function cek19(){
  let c19= document.getElementById("c19").value;
  
  if (c19 == "0,8"){
    document.getElementById("c19").style="border: 3px solid green";      
    document.getElementsByClassName('non1')[0].style.display='none'; 
  } else{
    document.getElementById("c19").style="border: 3px solid red";    
    document.getElementsByClassName('co1')[0].style.display='none';    
    document.getElementsByClassName('non1')[0].style.display='block';
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
    document.getElementsByClassName('non3')[0].style.display='none'; 
    document.getElementById("cb31").style="border: 3px solid red"; 
    document.getElementById("cb32").style="border: 3px solid red"; 
    document.getElementById("cb33").style="border: 3px solid red"; 
    document.getElementById("cb34").style="border: 3px solid red"; 
    document.getElementById("cb35").style="border: 3px solid red"; 
    document.getElementById("cb36").style="border: 3px solid red"; 
    document.getElementById("cb37").style="border: 3px solid red"; 
  }
  if (cb31 == "10"){
    document.getElementById("cb31").style="border: 3px solid green";   
  } else {
    document.getElementById("cb31").style="border: 3px solid red"; 
  }
  
  if(cb32 == "20"){
    document.getElementById("cb32").style="border: 3px solid green";
  } else {
    document.getElementById("cb32").style="border: 3px solid red"; 
  }
  
  if(cb33 == "0,2"){
    document.getElementById("cb33").style="border: 3px solid green";
  } else {
    document.getElementById("cb33").style="border: 3px solid red"; 
  }
  
  if(cb34 == "2"){
    document.getElementById("cb34").style="border: 3px solid green";
  } else {
    document.getElementById("cb34").style="border: 3px solid red"; 
  }
  
  if(cb35 == "4,5"){
    document.getElementById("cb35").style="border: 3px solid green";
  } else {
    document.getElementById("cb35").style="border: 3px solid red"; 
  }
  
  if(cb36 == "10"){
    document.getElementById("cb36").style="border: 3px solid green";
  } else {
    document.getElementById("cb36").style="border: 3px solid red"; 
  }
  
  if(cb37 == "13"){
    document.getElementById("cb37").style="border: 3px solid green";
  } else {
    document.getElementById("cb37").style="border: 3px solid red"; 
  }
}

function cek31(){
  let cb31= document.getElementById("cb31").value;
  
  if (cb31 == "10"){
    document.getElementById("cb31").style="border: 3px solid green";     
    document.getElementsByClassName('non3')[0].style.display='none';    
  } else{
    document.getElementById("cb31").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek32(){
  let cb32= document.getElementById("cb32").value;
  
  if (cb32 == "20"){
    document.getElementById("cb32").style="border: 3px solid green";        
    document.getElementsByClassName('non3')[0].style.display='none'; 
  } else{
    document.getElementById("cb32").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek33(){
  let cb33= document.getElementById("cb33").value;
  
  if (cb33 == "0,2"){
    document.getElementById("cb33").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb33").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek34(){
  let cb34= document.getElementById("cb34").value;
  
  if (cb34 == "2"){
    document.getElementById("cb34").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb34").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek35(){
  let cb35= document.getElementById("cb35").value;
  
  if (cb35 == "4,5"){
    document.getElementById("cb35").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb35").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek36(){
  let cb36= document.getElementById("cb36").value;
  
  if (cb36 == "10"){
    document.getElementById("cb36").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb36").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek37(){
  let cb37= document.getElementById("cb37").value;
  
  if (cb37 == "13"){
    document.getElementById("cb37").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none'; 
  } else{
    document.getElementById("cb37").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';    
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}


//Input soal 
$('input[class="cb"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});
