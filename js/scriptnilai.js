var firebaseConfig = {
    apiKey: "AIzaSyAZDp9rrxItslIYMXyU2_7Y-eCr1sM63Qo",
    authDomain: "listrikstatis-b91fe.firebaseapp.com",
    projectId: "listrikstatis-b91fe",
    storageBucket: "listrikstatis-b91fe.appspot.com",
    messagingSenderId: "261164154927",
    appId: "1:261164154927:web:a273f977e8f6ef428246da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function data(){
    firebase.database().ref('kuis1').once('value',
    function(AllRecord){
        AllRecord.forEach(
            function(CurrentRecord){
                var namaa = CurrentRecord.val().nama;
                var kelas = CurrentRecord.val().kelas;
                var sekolahh = CurrentRecord.val().sekolah;
                var nilai = CurrentRecord.val().nilai;                
                var waktu = CurrentRecord.val().waktu;
                var hari = CurrentRecord.val().hari;
                AddItemToTable(namaa,kelas,sekolahh,nilai,waktu,hari);

            }
        );
    });
}

window.onload = data;

function AddItemToTable(namaa,kelas,sekolahh,nilai,waktu,hari){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    td1.innerHTML += namaa;
    td2.innerHTML += kelas;
    td3.innerHTML += sekolahh;
    td4.innerHTML += nilai;
    td5.innerHTML += waktu;
    td6.innerHTML += hari;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    tbody.appendChild(trow);
}