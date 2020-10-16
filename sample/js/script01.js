$(function(){

$("#button01").on("click",function(){
    $(".back-red").toggle();
    $(".back-blue").show();
    $(".back-green").show();
})

$("#button02").on("click",function(){
    $(".back-blue").toggle();
    $(".back-red").show();
    $(".back-green").show();
})

$("#button03").on("click",function(){
    $("#box03,#box07,#box08").toggle();

})

$("#button04").on("click",function(){
    $(".box").show();
})

})