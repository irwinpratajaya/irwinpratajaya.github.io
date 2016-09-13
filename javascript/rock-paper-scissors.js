var pengguna = prompt("Kamu pilih jempol, kelingking atau telunjuk?");
var lawan = Math.random();
if (lawan < 0.34) {
    lawan = "jempol";
} else if(lawan <= 0.67) {
    lawan = "kelingking";
} else {
    lawan = "telunjuk";
}

var compare = function(pilihan1, pilihan2) {
    if(pilihan1 === pilihan2) {
    return "Hasilnya Seri!";
}
if(pilihan1 === "jempol") {
    if(pilihan2 === "telunjuk") {
        return "jempol menang";
    } else {
        return "kelingking menang";
    }
}
if(pilihan1 === "kelingking") {
    if(pilihan2 === "jempol") {
        return "kelingking menang";
    } else {
        if(pilihan2 === "telunjuk") {
            return "telunjuk menang";
    }
}
if(pilihan1 === "telunjuk") {
    if(pilihan2 === "jempol") {
        return "jempol menang";
    } else {
        if(pilihan2 === "kelingking") {
            return "telunjuk menang";
        }
    }
}
}
};
console.log("pengguna: " + pengguna);
console.log("lawan: " + lawan);
alert("kamu pilih: " + pengguna);
alert("lawan mu pilih: " + lawan);
alert(compare(pengguna, lawan));