function ganti1() {
	document.getElementById("img").src="img/home.png";
}

function ganti2(){
	document.getElementById("img").src="img/kd.png";
}

function ganti3(){
	document.getElementById("img").src="img/petunjuk.png";
}


$(document).ready(function(){
		$('.pilih-menu').click(function(){
			var menu = $(this).attr('id');
			if(menu == "home"){
				$('.halaman').load('menu/home.html');												
			}else if(menu == "kd"){
				$('.halaman').load('menu/kikd.html');												
			}else if(menu == "info"){
				$('.halaman').load('menu/petunjuk.html');											
			}
		});
		// halaman default pertama kali
		$('.halaman').load('menu/home.html');						

	});
