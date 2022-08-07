window.onload = () => {
    let rgbText, nodes, hues;
    rgbText = document.querySelector(".parallax_title1");

    rgbText.innerHTML = [].slice.
    call(rgbText.innerHTML).
    map(c => `<span>${c}</span>`).
    join("");

    nodes = document.querySelectorAll(".parallax_title1 span");
    hues = [];

    nodes.forEach((c, i) => {
        hues.push(Math.round(i * (200 / nodes.length)));
    });

    (function loop() {
        hues.forEach((h, i, _this) => {
            _this[i]--;
            nodes[i].style.color = `hsl(${_this[i]},100%,50%)`;
        });
        window.requestAnimationFrame(loop);
    })();
};