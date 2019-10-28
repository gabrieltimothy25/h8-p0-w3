var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    tanggal = input[3].split('/');
    bulan = tanggal[1];
    switch (bulan) {
        case '05': {console.log('Mei')};
    }
    tanggalSorted = input[3].split('/').sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) })
    console.log(tanggalSorted);
    var tanggalBaru = tanggal.join('-');
    console.log(tanggalBaru);
    var nama = input[1];
    var namaBaru = nama.slice(0, 15);
    console.log(namaBaru);
};
dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */