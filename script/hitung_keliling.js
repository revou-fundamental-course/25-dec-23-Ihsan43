function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);

    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC) && sisiA > 0 && sisiB > 0 && sisiC > 0) {
        var keliling = sisiA + sisiB + sisiC;
        document.getElementById("result").innerHTML = "Keliling Segitiga: " + keliling.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Masukkan nilai yang valid untuk sisi-sisi segitiga.";
    }
}

function resetFormKeliling() {
    document.getElementById("sisiA").value = null;
    document.getElementById("sisiB").value = null;
    document.getElementById("sisiC").value = null;
    document.getElementById("result").innerHTML = null;
}
