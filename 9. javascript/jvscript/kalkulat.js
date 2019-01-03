///Penjumlahan
function tambah(){
    var bil1,bil2,jml; 
    
    alert("Menghitung Penambahan Dua Bilangan");
    
    bil1 = +prompt("Input Bilangan 1");
    bil2 = +prompt("Input Bilangan 2");
    jml = bil1 + bil2;
    
    var konfirmasi = confirm("Apakah anda ingin melanjutkan perhitungan?");
    
    if (konfirmasi == true)
        document.write(+bil1+ "+" +bil2+ "=" +jml);
    else
        document.location.href = "kalkulator.html";
    }

///Pengurangan  
function kurang(){
        var bil1,bil2,jml; 
        
        alert("Menghitung Pengurangan Dua Bilangan");
        
        bil1 = +prompt("Input Bilangan 1");
        bil2 = +prompt("Input Bilangan 2");
        jml = bil1 - bil2;
        
        var konfirmasi = confirm("Apakah anda ingin melanjutkan perhitungan?");
        
        if (konfirmasi == true)
            document.write(+bil1+ "-" +bil2+ "=" +jml);
        else
            document.location.href = "kalkulator.html";
    }

///PerKalian    
function kali(){
    var bil1,bil2,jml; 
    
    alert("Menghitung Perkalian  Dua Bilangan");
    
    bil1 = +prompt("Input Bilangan 1");
    bil2 = +prompt("Input Bilangan 2");
    jml = bil1 * bil2;
    
    var konfirmasi = confirm("Apakah anda ingin melanjutkan perhitungan?");
    
    if (konfirmasi == true)
        document.write(+bil1+ "x" +bil2+ "=" +jml);
    else
        document.location.href = "kalkulator.html";
    }

///pembagian 
function bagi(){
        var bil1,bil2,jml; 
        
        alert("Menghitung Pembagian Dua Bilangan");
        
        bil1 = +prompt("Input Bilangan 1");
        bil2 = +prompt("Input Bilangan 2");
        jml = bil1 / bil2;
        
        var konfirmasi = confirm("Apakah anda ingin melanjutkan perhitungan?");
        
        if (konfirmasi == true)
            document.write(+bil1+ "/" +bil2+ "=" +jml);
        else
            document.location.href = "kalkulator.html";
    }

///Pemfaktoran
function faktorial(){
        var bil1,i;
        var jml=1;
    
        alert("Menghitung Pemfaktoran Bilangan");
        
        bil1 = +prompt("Input Bilangan");
        for(i=bil1;i>0;i--){
            jml *=i;
        }
        
        var konfirmasi = confirm("Apakah anda ingin melanjutkan perhitungan?");
        
        if (konfirmasi == true)
            document.write(+bil1+ "=" +jml);
        else
            document.location.href = "kalkulator.html";
    }