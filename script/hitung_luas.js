function hitungLuas() {

    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;

        document.getElementById("result").innerHTML = "Luas Segitiga: " + luas.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Masukkan nilai yang valid untuk alas dan tinggi.";
    }
}


function resetFormLuas() {
    document.getElementById("alas").value = null;
    document.getElementById("tinggi").value = null;
    document.getElementById("result").innerHTML = null;
}
