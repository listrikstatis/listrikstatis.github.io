function cekjwb(){
    let cekk= 0;
    document.getElementById("aa").value = document.getElementById("aa").value.toLowerCase();
    document.getElementById("ab").value = document.getElementById("ab").value.toLowerCase();
    document.getElementById("ac").value = document.getElementById("ac").value.toLowerCase();
    document.getElementById("ad").value = document.getElementById("ad").value.toLowerCase();
    var aaa= document.getElementById("aa").value;
    var aab= document.getElementById("ab").value;
    var aac= document.getElementById("ac").value;
    var aad= document.getElementById("ad").value;
  
    if (aaa == "positif") {
      document.getElementById("aa").style="border: 2px solid green";
      cekk += 1;
    } else {
      document.getElementById("aa").style="border: 2px solid red";
    }

    if (aab == "negatif") {
        document.getElementById("ab").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ab").style="border: 2px solid red";
      }
    
      if (aac == "sama") {
        document.getElementById("ac").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ac").style="border: 2px solid red";
      }

      if (aad == "berbeda" || aad == "beda") {
        document.getElementById("ad").style="border: 2px solid green";
        cekk += 1;
      } else {
        document.getElementById("ad").style="border: 2px solid red";
      }

    if (cekk == 4) {        
        document.getElementById('ringkas').style.display = 'block';   
        document.getElementsByClassName('deret')[0].style.display='block';         
    } else{        
        document.getElementById('ringkas').style.display = 'none';
        document.getElementsByClassName('deret')[0].style.display='none';        
    }

  }
  
  function reset(){
    document.getElementsByClassName('ini')[0].value = "";
  }
  
  $('.ini').bind('keyup blur',function(){ 
      var node = $(this);
      node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
  );