$('.btn')
$('.text-box')

$(function(){
    $('.btn').on('click',function(){
        $('.text-box').val('クリックしました!');
    });
});