/*----------------------------------------------------------------- 
                          Mencetak angka
var angka;
angka="10";
document.write(angka*angka);

----------------------------------------------------------------- */


/*----------------------------------------------------------------- 
                        Menambahkan 2 Angka
var x = 10;
var y = 20;

x+= 15;
x++;
document.write(x);

----------------------------------------------------------------- */


/*----------------------------------------------------------------- 
        
            Menampilkan waktu Menggunakan suatu kondisi
var jam= 22;

if(jam=1 && jam <=9)
{
    document.write("PAGI");
}
else if(jam>=10 && jam<=15 )
{
    document.write("siang");
}
else if(jam>15 && jam<=18 )
{
    document.write("sore");
}
else
{
    document.write("Malam");
}

================CARA MEMPERSINGKAT================

    var jam =5;
    var pesan = "";

    pesan = (jam<=10 )? "Selamat Pagi" : "Selamat Siang";

    /*-----pesan = (jam<=18)? "selamat sore": "Selamat Malam"; 
    document.write(pesan);
----------------------------------------------------------------- */

/*-----------------------------------------------------------------
            Kondisi cetak bilangan genap <=100 
A.  PAKAI MODULO
for(e=1; e<=100; e++)
{
    if(e%2==0)
    {
        document.write("Angka: " +e);
        document.write("<br />");
        
    }
}document.write("--------------------------------------------------<br>");

B. Hanya Looping
var i=0;
for(i=0;i<=100;i++)
{
    if(i%2==0)
    document.write("Nomor : " +i);
    document.write("<br/>");
}

----------------------------------------------------------------- */

/*-----------------------------------------------------------------
                        Mencetak Ganjil dan genap
var nilai = 1;
var akhir = 20;
while( nilai <= akhir )
{
    if(nilai%2==0)
    {
        document.write(nilai+" adalah bilangan genap <br>" );
    } 
    else
    {
        document.write(nilai+" adalah bilangan ganjil <br>" );
    }
    nilai++;
    
}document.write("--------------------------------------------------<br>");


/*-----------------------------------------------------------------
                        Penampilan Pemberitahuan 
var jam=17;
if (jam<=10)
    {
        alert ("Selamat Pagi...");
    }
else if (jam >10 && jam <=15)
    {
        alert("Selamat Siang...");
    }
else
    {
        alert("Selamat Sore...");

    }

document.write("--------------------------------------------------<br>");

-----------------------------------------------------------------*/


/*----------------------------------------------------------------- 
var konfr= confirm("Apakah Anda ingin membuka halaman ini?");
if(konfr == true)
    document.location.href = "index.html";
    else
        document.location.href = "java.js";
----------------------------------------------------------------- */

var bil, bil1, jum;
alert("Penjumlahan 2  Bilangan ");

bil= +prompt("Inputkan Bilangan Pertama : ");
bil1=+prompt("Inputkan Bilangan kedua : ");
jum=bil+bil1;

var konfirmasi=confirm("Apakah Anda Ingin Langsung Melanjutkan??");
if(konfirmasi==true)
{
    document.write("Hasilnya    :   "+jum);
}
else
{
    document.location.href="index.html";
}
