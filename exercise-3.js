var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(array) {
    let id;
    let nama;
    let tanggal;
    let hobi;
    let result = ''
    for (var i = 0; i < array.length; i++) {
        id = array[i][0];
        nama = array[i][1];
        tempatTanggal = array[i][2];
        hobi = array[i][3];
        result += `\nNomor ID: ${id}\nNama Lengkap: ${nama}\nTTL: ${tempatTanggal}\nHobi: ${hobi}\n`
    } return result;
}
console.log(dataHandling(input));