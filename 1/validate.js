$().ready(function () {
$.validator.addMethod("phoneVN", function(value, element) {
    return this.optional(element) || /^0\d{9}$/.test(value);
}, "Phone must have 10 digits and start with 0 (e.g., 0987654321)");

    $('#addEmployeeForm').validate({
        rules: {
            'name': {
                required: true
            },
            'email': {
                required: true,
                email: true
            },
            'address': {
                required: true
            },
            'phone': {
                required: true,
                phoneVN: true
            }
        },
        messages: {
            'name': {
                required: "Please enter the name"
            },
            'email': {
                required: "Please enter the email",
                email: "Please enter a valid email address"
            },
            'address': {
                required: "Please enter the address"
            },
            'phone': {
                required: "Please enter the phone number",
                
            }
        },

    });
});
