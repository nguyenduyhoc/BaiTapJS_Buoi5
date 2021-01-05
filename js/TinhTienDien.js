function tinhTien(event) {
    event.preventDefault();

    var ten = document.getElementById("txtTen").value;
    var soKW = parseFloat(document.getElementById("txtSoKW").value);
    // var currentFormat = new Intl.NumberFormat("vn-VN");
    // soKW = currentFormat.format(soKW);

    document.getElementById("txtTinhTien").innerHTML =
        "Tên: " + ten + ", " + "Xuất tiền: " + xuatTien(soKW);
}

function xuatTien(a) {
    if (a <= 50) {
        return a * 500;
    } else if (a > 50 && a <= 100) {
        return (50 * 500) + (a - 50) * 650;
    } else if (a > 100 && a <= 200) {
        return (50 * 500) + (50 * 650) + (a - 100) * 850;
    } else if (a > 200 && a <= 350) {
        return (50 * 500) + (50 * 650) + (100 * 850) + (a - 200) * 1300;
    } else {
        return (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (a - 350) * 1300;
    }
}