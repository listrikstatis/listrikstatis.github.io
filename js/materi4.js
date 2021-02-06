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
  
  let v1= document.getElementById("v1").value;
  let q1= document.getElementById("q1").value;
  
  if (v1 == "9" && q1 == "30") {
    document.getElementsByClassName('p1')[0].style.display='block';
    document.getElementsByClassName('rumus')[0].style.display='none';
    document.getElementsByClassName('nilai')[0].style.display='block';
  } else if(v1=="9"){    
    document.getElementById("v1").style="border: 3px solid green";
  } else if(q1=="30"){    
    document.getElementById("q1").style="border: 3px solid green";
  } else{    
    document.getElementById("v1").style="border: 3px solid red";
    document.getElementById("q1").style="border: 3px solid red";
  }

}

function cekk(){
  let h1= document.getElementById("h1").value;

  if(h1 == "270"){    
    document.getElementById("h1").style="border: 3px solid green";    
    document.getElementsByClassName('nilai')[0].style.display='none';
    document.getElementsByClassName('ja1')[0].style.display='block';    
    document.getElementsByClassName('j1')[0].style.display='block';
  } else{    
    document.getElementById("h1").style="border: 3px solid red";
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
  } else if(b2=="15"){    
    document.getElementById("2ab").style="border: 3px solid green";
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
  } else if(b3=="10"){    
    document.getElementById("3ab").style="border: 3px solid green";
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

//Input Soal 1
$('input[id="v1"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="q1"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="h1"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 2
$('input[id="2aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="2ab"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="2ac"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 3
$('input[id="3aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="3ab"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="3ac"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});