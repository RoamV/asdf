function hasil() {
    let harga=parseInt(document.getElementById('harga').value);
    let jumlah=parseInt(document.getElementById('jumlah').value);
    let total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    let diskon=0.10;
    let bayar;
    if(total>100000){
        bayar=total-(total*diskon);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("diskon").innerHTML="10%";
    }else{   
        document.getElementById("bayar").innerHTML=total;
        document.getElementById("diskon").innerHTML="0%";
    }
}
