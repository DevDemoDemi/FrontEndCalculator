$(document).ready(function () {

    $('#clear').click(function () {
        $('#display').text('0');
        $('#decimal').prop('disabled', false);
    })

    $('.number').click(function () {
        if ($('#display').text() == '0') {
            $('#display').text('');
        }
        $('#display').append(this.value);
    })

    $('.decimal').click(function () {
        $('#display').append(this.value);
        $('.decimal').prop('disabled', true);
        $('.operator').click(function () {
            $('.decimal').prop('disabled', false);
            $('.decimal').click(function () {
                $('.decimal').prop('disabled', true);
            })
        })
    })

    let arr = [];

    $('.operator').click(function () {
        $('#display').append(this.value);
        arr.push(this.value);
    })

    let regNeg = /[--]/;
    let reg = /\D{2,}/g;

    $('.equals').click(function () {
        if ($('#display').text().match(reg) && arr[arr.length - 1] !== '-') {
            $('#display').text(eval($('#display').text().replace(reg, arr[arr.length - 1])));
        } else if (regNeg.test($('#display').text())) {
            $('#display').text(eval($('#display').text().replace('--', '+')));
        } else {
            $('#display').text(eval($('#display').text()));
        }
    })

})
