
    $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
        $('.test-popup-link').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
            // other options
        });
        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
        new WOW({
            animateClass: 'animate__animated',
        }).init();
    });
let Loader = $('#loader');
let Name = $('#Name');
let LastName = $('#Last_name');
let Phone = $('#phone');
let Button = $('#btn');
let Popup = $('.popup');
let Close = $('#svg');
let Input = $('.input');
let InputO = $('.input:first-child');
let InputH = $('.input:nth-child(2)');
let InputT = $('.input:last-child');

Close.click(function () {
    Popup.css('display', 'none');
})
/*Button.click(function () {
    let url = 'https://itlogia.ru/test/promo-code?name=' + Name.val();
    console.log(url);
    let http = new XMLHttpRequest();
    http.open('GET', url);
    http.send();*/
/*
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          let result = JSON.parse(http.responseText);
          if ()

        }
    }*/
/*    $.ajax({
        method: "POST",
        url: 'https://itlogia.ru/test/checkout',
        date: { name: name.val(), Last_name: Last_name.val(), type:type.val()}
    })
        .done(function( message ) {
            console.log(message);
        });*/
    Button.click(function () {
        $('.error-input').hide();
        let hasError = false;
        Input.css('border-color', 'rgb(185, 145, 80)');
        if (!Name.val()) {
            Name.siblings('.error-input').show();
            Name.css('border-color', 'red');
            hasError = true;
        }
        if (!LastName.val()) {
            LastName.siblings('.error-input').show();
            LastName.css('border-color', 'red');
            hasError = true;
        }
        if (!Phone.val()) {
            Phone.siblings('.error-input').show();
            Phone.css('border-color', 'red');
            hasError = true;
        }
        if (!hasError) {
            Loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://itlogia.ru/test/checkout',
                data: { name: Name.val(), Last_name: LastName.val(), phone: Phone.val() }
            })
                .done(function( message ) {
                    Loader.hide();
                    console.log(message);
                    if (message.success) {
                        let form = $('.fm');
                        form.hide();
                        Popup.css('display', 'flex');
                    }else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    }
                });

        }

    })




