window.addEventListener("scroll", function () {
    let elements = document.getElementsByClassName("laboral_counter");
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            $('.laboral_counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
});