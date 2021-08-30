$(document).ready(function () {
    $('.products').click(function (e) { 
        e.preventDefault();
  $(this).toggleClass('active');
   
    });
    $('.products-btn').click(function (e) { 
        e.preventDefault();
$('.prod').addClass('active');
window.location.href='#prodCont'
    });
    $('.contact-btn').click(function (e) { 
        e.preventDefault();
$('.contct').addClass('active');
window.location.href='#prodCont'

    });
});