$().ready(function () {
    $('#addForm').validate({
        rules: {
            "khachHang": {
                required: true,
                maxlength: 30
            },
            "nhanVien": {
                required: true,
                maxlength: 30
            },
            "soTien": {
                required: true,
            }
        },
        messages: {
            "khachHang": {
                required: "Bắt buộc nhập tên khách hàng",
                maxlength: "Tên khách hàng không quá 30 ký tự"
            },
            "nhanVien": {
                required: "Bắt bược nhập tên nhân viên",
                maxlength: "Tên nhân viên không quá 30 ký tự"
            },
            "soTien": {
                required: "Bắt buộc nhập số tiền",
            }
        }

    });
});