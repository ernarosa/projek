function TampilKota(provinsi){
    var kota= "";
    switch(provinsi)
    {
        case "jabar" :
        {
            kota = "<ul><li>Bandung</li><li>Bogor</li><li>Garut</li><ul>";
        }break;
        case "jateng" :
        {
            kota = "<ul><li>Cilacap</li><li>Jepara</li><li>Magelang</li><ul>";
        }break;
        default : kota ="" ;
    }
    document.getElementById('kota').innerHTML = kota;
}