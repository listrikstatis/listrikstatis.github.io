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
  let cca= document.getElementById("c1c").value;
  let ccb= document.getElementById("c2c").value;
  let ccc= document.getElementById("c3c").value;
  
  if (cca == "4,5" && ccb == "10" && ccc == "13") {
    document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('co3')[0].style.display='block';
    document.getElementsByClassName('cc3')[0].style.display='none';
  } else {
     document.getElementById("c1c").style="border: 3px solid red";
     document.getElementById("c2c").style="border: 3px solid red"; 
     document.getElementById("c3c").style="border: 3px solid red";       
  }

  if (cca == "4,5") {
    document.getElementById("c1c").style="border: 3px solid green";
  } else {
     document.getElementById("c1c").style="border: 3px solid red";
  }

  if (ccb == "10") {
    document.getElementById("c2c").style="border: 3px solid green";
  } else {
     document.getElementById("c2c").style="border: 3px solid red";
  }

  if (ccc == "13") {
    document.getElementById("c3c").style="border: 3px solid green";
  } else {
     document.getElementById("c3c").style="border: 3px solid red";
  }

}

//Input soal 1
$('input[id="c1a"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input soal 2
$('input[id="c1b"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="c2b"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="c3b"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input soal 3
$('input[id="c1c"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="c2c"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="c3c"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[class="hc"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});