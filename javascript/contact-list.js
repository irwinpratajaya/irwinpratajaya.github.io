var DaftarKontak = [];

function tambah(nama,email,telepon){
DaftarKontak[DaftarKontak.length] = {
    nama: nama,
    email: email,
    telepon: telepon,
};
}

function printKontak(kontak) {
    console.log(kontak.nama + " " );
}


function lihatSemua() {
    var kontakLength = DaftarKontak.length;
    for (var i = 0; i < kontakLength; i++) {
        printKontak(DaftarKontak[i]);
    }
}

function cariKontak(nama){
    var kontakLength = DaftarKontak.length;
    for(i=0;i<kontakLength;i++){
        if(this.nama=DaftarKontak[i].nama){
            printKontak(DaftarKontak[i]);
        }
    }
}

tambahKontak("ruben","ruben@email.com","021555777");
tambahKontak("irwin","irwin@email.com","021555778");