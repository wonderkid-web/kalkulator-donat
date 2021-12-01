
    // tombol.addEventListener('clicked', kalkulator(vBesar,vKecil,vBesart,vKecilt));
    
    
    function kalkulator(){
    let mBesar = document.querySelectorAll('input')[0].value;
    let mKecil = document.querySelectorAll('input')[1].value;
    let tBesar = document.querySelectorAll('input')[2].value;
    let tKecil = document.querySelectorAll('input')[3].value;
    let catat = document.querySelectorAll('input')[4].value;
    let tombol = document.querySelector('button');
   
    let a = document.querySelector('a');
    let link = "https://api.whatsapp.com/send?phone=6285275479911&text=";
    let lakuBesar = mBesar - tBesar;
    let lakuKecil = mKecil - tKecil;

    let totalBesar = lakuBesar * 3000;
    let totalKecil = lakuKecil * 22000;
    let omset = totalBesar + totalKecil;
    let tanggal = new Date();

    let note = `Tanggal : ${tanggal}\n\nModal Awal\n====================\n| Donat Besar: ${mBesar}\n| Donat Kecil: ${mKecil}\n====================\nHasil Akhir\n=======================\n| Donat Besar laku  ${lakuBesar} = Rp.${totalBesar}\n| Donat Kecil laku : ${lakuKecil} = Rp.${totalKecil}\n=======================\nOmset Hari ini :\n=======================\n| Total : Rp.${omset}\n=======================\nCatatan\n=======================\n| ${catat}\n=======================`;

    console.log(note);
    note = note.replace(/\n|\r/g, "%0A");
    note = note.replace(/\s/g, "%20");
    link += note;
    a.setAttribute("href", link);
}
