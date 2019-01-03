function pilih()
{
    var buah = document.getElementById("buah");
    var pilih = document.getElementById("pilihan");
    var option = document.createElement("option");

    option.text = buah.options[buah.selectedIndex].text;
    try
    {
        pilihan.add(option,null);
    }
    catch (ex)
    {
        pilihan.add(option);
    }
}