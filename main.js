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
//
document.addEventListener("mousemove", (e) => {
	let x = e.clientX * 30 / window.innerWidth - 11.4;
	let y = e.clientY * 30 / window.innerHeight - 11.3;

    if (y >= 10 && x >= 11.4) {
        pupil.style.transform = 'translate(' + 11.4 + 'px ,' + 10 + 'px)';
    } else if (y >= 10) {
        pupil.style.transform = 'translate(' + x + 'px ,' + 10 + 'px)';
    } else if (x >= 11.4) {
        pupil.style.transform = 'translate(' + 11.4 + 'px ,' + y + 'px)';
    } else {
        pupil.style.transform = 'translate(' + x + 'px ,' + y + 'px)';
    }

    console.log("y:", y, "x", x)
    //
	// pupil.style.transform = "translate(" + x + "," + y + ")" ;

	// pupil.style.y= y;
    // pupil.style.x= x;
    // pupil.style.opacity = getScrollPercent();
})


// let eyeBall = document.querySelector(".eyeball");
// let pupil = document.querySelector(".pupil");
// let eyeArea = eyeBall.getBoundingClientRect();
// let pupilArea = pupil.getBoundingClientRect();
// let R = eyeArea.width/2;
// let r = pupilArea.width/2;
// let centerX = eyeArea.left + R;
// let centerY = eyeArea.top + R;
//
// console.log(eyeArea)
// console.log(pupilArea)
// console.log(R)
// console.log(r)
// console.log(centerX)
// console.log(centerY)
//
// document.addEventListener("mousemove", (e)=>{
//   let x = e.clientX - centerX,
//       y = e.clientY - centerY,
//       theta = Math.atan2(y,x),
//       angle = theta*180/Math.PI + 360;
//
//
//   pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
//   pupil.style.transformOrigin = `${r +"px"} center`;
// });
