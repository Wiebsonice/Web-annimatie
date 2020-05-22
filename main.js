console.log("hey")
var sFish = document.querySelectorAll('.s-fish');
var body = document.querySelector(body)

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
  if ((getScrollPercent() * 100) <= 10) {
      body.classList.add("top")
  } else {
      body.classList.remove("top")
  }
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

    // console.log("y:", y, "x", x)
})

var fishAmmount = 1;



window.addEventListener("keydown", keyFunction);
function keyFunction() {
    if (event.keyCode == 83) {
        console.log("s")
        sFishSwim("s")
    }

    else if (event.keyCode == 77) {
        console.log("m")
        sFishSwim("m")
    }
    else if (event.keyCode == 66) {
        console.log("b")
        sFishSwim("b")
    }
}

function sFishSwim(type) {
    var randomnmbr = Math.random() * 100;

    var div = document.createElement('div');
    div.className = type + '-new-fish ' + type + '-new-fish' + fishAmmount;
    div.style.top = randomnmbr + "%";
    document.querySelector('.new-fish-outer').appendChild(div);
    fishAmmount += 1;
}


var infoBtn = document.querySelector('.info');
infoBtn.addEventListener("click", function() {
    infoBtn.classList.toggle("expand")
});
