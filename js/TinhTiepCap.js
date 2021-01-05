function xuatThongTin(event) {
    event.preventDefault();
    var maKhachHang = parseInt(document.getElementById("txtMaKhachHang").value);
    var soTaiKhoan = parseInt(document.getElementById("txtSoTaiKhoan").value);
    document.getElementById("txtThongTin").innerHTML = "Số tài khoản: " + soTaiKhoan + "<br />" + thongTin(maKhachHang);
}

function thongTin(a) {
    if (a == 1) {
        return "Nhà dân: " +
            "<br />" + "*Phí xử lý hóa đơn: 4.5 $" +
            "<br />" + "*Phí dịch vụ cơ bản: 20.5 $" +
            "<br />" + "*Thuê kênh cao cấp: 7.5 $ / kênh"

    } else if (a == 2) {
        return "Doanh nghiệp: " +
            "<br />" + "*Phí xử lý hóa đơn: 15 $" +
            "<br />" + "*Phí dịch vụ cơ bản: 75 $ cho 10 kết nối đầu, 5 $ cho mỗi kết nối thêm " +
            "<br />" + "*Thuê kênh cao cấp: 50 $ / kênh"
    } else {
        return "Mời bạn nhập lại"
    }
}

function taoKetNoi() {
    var soLuong = parseInt(document.getElementById("txtSoLuong").value)
    var tongTien = 0;
    if (soLuong <= 10) {
        tongTien = soLuong * 7.5
    } else {
        tongTien = 75 + (soLuong - 10) * 5;
    }
    document.getElementById("txtTongTien").innerHTML = "Tổng tiền: " + tongTien + " $"
}