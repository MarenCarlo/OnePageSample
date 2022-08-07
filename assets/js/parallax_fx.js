$(window).scroll(function () {
    var scrollX = $(window).scrollTop();

    $('.parallax_container').css({
        filter: "blur(" + (scrollX / 70) + "px)",
        margin: "0 0 " - (scrollX * 50) + "px 0"
    })
    $('.parallax_title2').css({
        filter: "blur(" + (scrollX / 20) + "px)",
        //background: "-webkit-linear-gradient(30deg, rgb(10, 47, 233) 0%, rgba(84, 91, 235, 1) 20%, rgba(84, 91, "+ (scrollX+100) + ", 1) 40%, rgba("+ (scrollX*2) + ", 88, 219, 1) 60%, rgba(123, "+ (scrollX*2) + ", 205, 1) 80%, rgba(123, 86, "+ (scrollX*2) + ", 1) 100%"
    })
    $('.secondary_image').css({
        filter: "blur(" + (scrollX / 50) + "px)",
    })
    $('.move_logo').css({
        padding: "0 " + (scrollX) + "px" + " 0 " + (scrollX) + "px",
        filter: "blur(" + (scrollX / 20) + "px)",
        //background: "-webkit-linear-gradient(30deg, rgb(10, 47, 233) 0%, rgba(84, 91, 235, 1) 20%, rgba(84, 91, "+ (scrollX+100) + ", 1) 40%, rgba("+ (scrollX*2) + ", 88, 219, 1) 60%, rgba(123, "+ (scrollX*2) + ", 205, 1) 80%, rgba(123, 86, "+ (scrollX*2) + ", 1) 100%"
    })
    $('.subtitle_box').css({
        height: "0px 0px " + (scrollX) + "px 0px",
        filter: "blur(" + (scrollX / 20) + "px)"
    })
    $('.principal_content').css({
        padding: -(scrollX * 6) + "px 0 0 0"
    })
})