
// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         $("#body").addClass("d-none").removeClass("d-block");
//         $(".loader-wrapper").addClass("d-flex").removeClass("d-none");
//     } else {
//         setTimeout(function(){
//             $(".loader-wrapper").addClass("d-none").removeClass("d-flex");
//         }, 1000);
//         $("#body").addClass("d-block").removeClass("d-none");
//     }
// };

 //jquery
 $(document).ready(function(){
     $(".connect").mouseenter(function(){
        $(this).css({"transform": "scale(1.1)","z-index":"1"});
        $(this).find(".card-img").css({"opacity":"1"});
     });
     $(".connect").mouseleave(function(){
        $(this).css({"transform": "scale(1)","z-index":"0"});
        $(this).find(".card-img").css({"opacity":"0.5"});
     });

     $(".program").mouseenter(function(){
        $(this).find(".card-img-top").css({"transform": "scale(1.1)","transform-origin":"40% 20%","overflow":"hidden"});
     });
     $(".program").mouseleave(function(){
        $(this).find(".card-img-top").css({"transform": "scale(1)"});
     });
 });

 var typed = new Typed('#welcome-message', {
    strings: ['Find Solace and Refreshment For Your Soul.','Welcome To Healing Spring Assembly.'],
    typeSpeed: 100,
  });
