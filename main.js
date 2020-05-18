console.log("hey")
var sFish = document.querySelectorAll('.s-fish');

var seaBg = document.querySelector('.sea');

sFish.forEach(item => {
  item.addEventListener('click', event => {
    // console.log(item)
    // item.classList.toggle("visible");

    sFish.forEach(fish => {
      fish.classList.toggle("hide");
    })
  })
})


var [red, green, blue] = [69, 111, 225]
var body = document.querySelector('body')

window.addEventListener('scroll', () => {
  seaBg.style.opacity = getScrollPercent();
})

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) ;
}

var pupil = document.querySelector(".eye");

document.addEventListener("mousemove", (e) => {
	let x = e.clientX * 100 / window.innerWidth - 38;
	let y = e.clientY * 100 / window.innerHeight - 31;

    console.log(y)
    //
	// pupil.style.transform = "translate(" + x + "," + y + ")" ;
    pupil.style.transform = 'translateX(" + x + "px)';
	pupil.style.y= y;
    pupil.style.x= x;
    // pupil.style.opacity = getScrollPercent();
})
