function ketQua(event) {
    event.preventDefault();

    var diem1 = parseFloat(document.getElementById("txtDiem1").value);
    var diem2 = parseFloat(document.getElementById("txtDiem2").value);
    var diem3 = parseFloat(document.getElementById("txtDiem3").value);
    var diemChuan = parseFloat(document.getElementById("txtDiemChuan").value);
    var diemKVUT = parseFloat(
        document.getElementById("txtDiemKhuVucUuTien").value
    );
    var diemDTUT = parseFloat(
        document.getElementById("txtDiemDoiTuongUuTien").value
    );

    var tong = diem1 + diem2 + diem3 + diemKVUT + diemDTUT;
    var thongBao = "";

    if (
        tong >= diemChuan &&
        0 < diem1 &&
        diem1 < 10 &&
        0 < diem2 &&
        diem2 < 10 &&
        0 < diem3 &&
        diem3 < 10
    ) {
        thongBao = "Điểm của bạn là: " + tong + ", " + "Chúc mừng bạn đã đậu";
    } else if (
        tong <= diemChuan &&
        0 < diem1 &&
        diem1 < 10 &&
        0 < diem2 &&
        diem2 < 10 &&
        0 < diem3 &&
        diem3 < 10
    ) {
        thongBao = "Điểm của bạn là: " + tong + ", " + "Bạn không đủ điều kiện";
    } else {
        thongBao = "Bạn nhập sai rồi";
    }

    document.getElementById("txtKetQua").innerHTML = thongBao;
}