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

//SOAL 1
function cek(){
  let me1= document.getElementById("me1").value;
  let me2= document.getElementById("me2").value;
  let me3= document.getElementById("me3").value;
  let me4= document.getElementById("me4").value;
  let me5= document.getElementById("me5").value;
  let me6= document.getElementById("me6").value;
  let me7= document.getElementById("me7").value;

  if (me1 == "3" && me2 == "10" && me3 == "-4" && me4 == "2" && me5 == "10" && me6 == "-6" && me7 == "150") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('m1')[0].style.display='block';
  } else {
    document.getElementById("me1").style="border: 3px solid red"; 
    document.getElementById("me2").style="border: 3px solid red"; 
    document.getElementById("me3").style="border: 3px solid red"; 
    document.getElementById("me4").style="border: 3px solid red"; 
    document.getElementById("me5").style="border: 3px solid red"; 
    document.getElementById("me6").style="border: 3px solid red"; 
    document.getElementById("me7").style="border: 3px solid red"; 
    document.getElementsByClassName('m1')[0].style.display='none';
  }
  
  if (me1 == "3"){
    document.getElementById("me1").style="border: 3px solid green";   
  } else{
    document.getElementById("me1").style="border: 3px solid red";
  }
  
  if (me2 == "10"){
    document.getElementById("me2").style="border: 3px solid green";   
  } else{
    document.getElementById("me2").style="border: 3px solid red";
  }
  
  if (me3 == "-4"){
    document.getElementById("me3").style="border: 3px solid green";   
  } else{
    document.getElementById("me3").style="border: 3px solid red";
  }
  
  if (me4 == "2"){
    document.getElementById("me4").style="border: 3px solid green";   
  } else{
    document.getElementById("me4").style="border: 3px solid red";
  }
  
  if (me5 == "10"){
    document.getElementById("me5").style="border: 3px solid green";   
  } else{
    document.getElementById("me5").style="border: 3px solid red";
  }
  
  if (me6 == "-6"){
    document.getElementById("me6").style="border: 3px solid green";   
  } else{
    document.getElementById("me6").style="border: 3px solid red";
  }
  
  if (me7 == "150"){
    document.getElementById("me7").style="border: 3px solid green";   
  } else{
    document.getElementById("me7").style="border: 3px solid red";
  }
}

//SOAL 2
function cek2(){
  let mn1= document.getElementById("mn1").value;
  let mn2= document.getElementById("mn2").value;
  let mn3= document.getElementById("mn3").value;
  let mn4= document.getElementById("mn4").value;
  let mn5= document.getElementById("mn5").value;
  let mn6= document.getElementById("mn6").value;
  let mn7= document.getElementById("mn7").value;

  if (mn1 == "8" && mn2 == "10" && mn3 == "-4" && mn4 == "4" && mn5 == "10" && mn6 == "-6" && mn7 == "200") {
    // document.getElementsByClassName('cek2')[0].style.display='none';
    document.getElementsByClassName('m2')[0].style.display='block';
    // document.getElementsByClassName('input2')[0].style.display='none';
    // document.getElementsByClassName('non2')[0].style.display='block';
  } else {
    document.getElementById("mn1").style="border: 3px solid red"; 
    document.getElementById("mn2").style="border: 3px solid red"; 
    document.getElementById("mn3").style="border: 3px solid red"; 
    document.getElementById("mn4").style="border: 3px solid red"; 
    document.getElementById("mn5").style="border: 3px solid red"; 
    document.getElementById("mn6").style="border: 3px solid red"; 
    document.getElementById("mn7").style="border: 3px solid red"; 
    document.getElementsByClassName('m2')[0].style.display='none';
  }
  
  if (mn1 == "8"){
    document.getElementById("mn1").style="border: 3px solid green";   
  } else{
    document.getElementById("mn1").style="border: 3px solid red";
  }
  
  if (mn2 == "10"){
    document.getElementById("mn2").style="border: 3px solid green";   
  } else{
    document.getElementById("mn2").style="border: 3px solid red";
  }
  
  if (mn3 == "-4"){
    document.getElementById("mn3").style="border: 3px solid green";   
  } else{
    document.getElementById("mn3").style="border: 3px solid red";
  }
  
  if (mn4 == "4"){
    document.getElementById("mn4").style="border: 3px solid green";   
  } else{
    document.getElementById("mn4").style="border: 3px solid red";
  }
  
  if (mn5 == "10"){
    document.getElementById("mn5").style="border: 3px solid green";   
  } else{
    document.getElementById("mn5").style="border: 3px solid red";
  }
  
  if (mn6 == "-6"){
    document.getElementById("mn6").style="border: 3px solid green";   
  } else{
    document.getElementById("mn6").style="border: 3px solid red";
  }
  
  if (mn7 == "200"){
    document.getElementById("mn7").style="border: 3px solid green";   
  } else{
    document.getElementById("mn7").style="border: 3px solid red";
  }
}

//SOAL 3
function cek3(){
  let mi1= document.getElementById("mi1").value;
  let mi2= document.getElementById("mi2").value;
  let mi3= document.getElementById("mi3").value;
  let mi4= document.getElementById("mi4").value;
  let mi5= document.getElementById("mi5").value;
  let mi6= document.getElementById("mi6").value;
  let mi7= document.getElementById("mi7").value;
  let mi8= document.getElementById("mi8").value;

  if (mi1 == "2,5" || mi1 == "2.5" && mi2 == "10" && mi3 == "-5" && mi4 == "0,3" || mi4 == "0.3" && mi5 == "2" && mi6 == "2,5" || mi6 == "2.5" && mi7 == "10" && mi8 == "6") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m3')[0].style.display='block';
  } else {
    document.getElementById("mi1").style="border: 3px solid red"; 
    document.getElementById("mi2").style="border: 3px solid red"; 
    document.getElementById("mi3").style="border: 3px solid red"; 
    document.getElementById("mi4").style="border: 3px solid red"; 
    document.getElementById("mi5").style="border: 3px solid red"; 
    document.getElementById("mi6").style="border: 3px solid red"; 
    document.getElementById("mi7").style="border: 3px solid red";  
    document.getElementById("mi8").style="border: 3px solid red";
  }
  
  if (mi1 == "2,5" || mi1 == "2.5"){
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
  
  if (mi4 == "0,3" || mi4 == "0.3"){
    document.getElementById("mi4").style="border: 3px solid green";   
  } else{
    document.getElementById("mi4").style="border: 3px solid red";
  }
  
  if (mi5 == "2"){
    document.getElementById("mi5").style="border: 3px solid green";   
  } else{
    document.getElementById("mi5").style="border: 3px solid red";
  }
  
  if (mi6 == "2,5" || mi6 == "2.5"){
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

//Input Soal 
$('input[class="md"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});