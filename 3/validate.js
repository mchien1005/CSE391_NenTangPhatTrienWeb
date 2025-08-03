$().ready(function () {
    $('#addForm').validate({
        rules: {
            "ten": {
                required: true,
                maxlength: 15
            },
            "hoDem": {
                required: true,
                maxlength: 20
            },
            "diaChi": {
                required: true,
                maxlength: 50
            }
        },
        messages: {
            "ten": {
                required: "Bắt buộc nhập tên nhân viên",
                maxlength: "Tên nhân viên không quá 15 ký tự"
            },
            "hoDem": {
                required: "Bắt buộc nhập họ đệm",
                maxlength: "Họ đệm không quá 20 ký tự"
            },
            "diaChi": {
                required: "Bắt buộc nhập địa chỉ",
                maxlength: "Địa chỉ không quá 50 ký tự"
            }
        }

    });
});