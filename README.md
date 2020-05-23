# Web-annimatie - Sheltered weaklings

Voor het vak Web-animatie uit de minor Visual interface design aan de HVA kreeg ik de opdracht om een grafisch kunstwerk digitaal te maken en te animeren. Je kunt in deze readme meer lezen over het kunstwerk, de functies en de gemaakte keuzes.

## Het Kunstwerk
![Sheltered Weaklings](https://0dbcc3748b8f47fd775c-77a5fe26cae7cb35bb07eccfb28cee77.ssl.cf3.rackcdn.com/takashikono/_1600xAUTO_crop_center-center_75/Kono_03.jpg)
Bron [a-g-i.org](https://a-g-i.org/design/sheltered-weaklings)

Het gekozen kunstwerk is gemaakt door Takashi Kono in 1953. het kunstwerk was net na de 2e wereld oorlog gemaakt en het toont een agressief beeld van de Verenigde Staten door het kleurgebruik voor de duisternis van de zwarte achtergrond en de scherpe vormen gebruikt om de VS als een haai af te beelden.

Hij wilde het gevoel voor nationalisme van de landen weer geven. Omdat hij zag dat de Amerikaanse invloed hun land overnam sinds ze bondgenoten waren geworden na de oorlog. Hij wilden het respect voor traditioneel Japans design tonen en anderen op deze mening beïnvloeden.

Er zijn ook stemmen die zeggen dat het een kritische kijk is op het blindelings volgen van japan naar USA.

## Waarom dit kunstwerk?
Ik vind het een interessant kunstwerk omdat het eigenlijk heel modern oogt terwijl het ruim 60 jaar oud is. Het is simpel met een heel duidelijk verhaal er achter.

En soms denk ik dat Nederland een beetje het zelfde blind Amerika volgt met veel keuzes.

## Stap 1: Digitaliseren en responsiveness?
Eerst moest het kunstwerk digitaal gemaakt worden. Mijn keuze was om het te namaken in illustrator en daarna te exporteren. Door de code netjes in te delen en in de html te plaatsten kan ik straks makkelijk elementen animeren.

Door het gebruik te maken van media queries heb ik bepaalde elementen op telefoon verborgen en juist laten zien die op desktop verborgen zijn. Het is niet een heel groot verschil, omdat ik het kunstwerk redelijk close bij het originele wilde hebben op beide schermen.

![Sheltered Weaklings](https://0dbcc3748b8f47fd775c-77a5fe26cae7cb35bb07eccfb28cee77.ssl.cf3.rackcdn.com/takashikono/_1600xAUTO_crop_center-center_75/Kono_03.jpg)

## Stap 2: CSS technieken
Om het vak te halen moesten er een aantal css technieken gebruikt worden. Ik had ook een aantal css technieken gebruiken. Hier onder is dus een lijstje met voorbeelden te vinden over wat voor css technieken en selectoren ik heb gebruikt.

### 1: Transform-orgin & transform-box
Omdat een SVG elementen positioneerd vanaf de linker bovenhoek zijn animaties soms tricky. Als je dus een fisje wil laten swemmen en deze verplaatst op de X as of met een `transform: translate` werkt het dus niet zo smooth als verwacht. Dit kun je aanpassen door de volgende css stijling toe te passen.
```css
    transform-origin: 50% 50%;
    transform-box: fill-box;
```

Dit zorgt er voor dat elke transform die je toepast gaat vanuit het midden van het object. Dit heeft te maken met het feit dat de browser moeite heeft om van een path in svg, het midden te bepalen.

### 2: Keyframes en enkele animatie 
Als je elementen wil animeren kan dat met javascript, maar tegenwoordig is ook heel veel mogelijk met css animaties. Zo kun je hiervoor `@keyframes` gebruiken. In combinatie met de `animation` tag. Zie hier een voorbeeld.
```css
.element {
    animation: fishaway 3s linear forwards;
}

@-webkit-keyframes fishaway {
    0% {transform: rotateY(60deg);}
    25% {transform: rotateY(-60deg) translateX(-30px);}
    50% {transform: rotateY(60deg) translateX(-60px);}
    75% {transform: rotateY(-60deg) translateX(-100px);}
    100% {opacity: 0; transform: translateX(-130px);}
}
```

### 3: Advanced Queries 
Als je meerdere elementen wil animeren met verschillende keyframes, en allemaal wat meer los van elkaar kun je verschillende technieken samenvoegen. Zo kun je gebruik maken van de `:nth-of-type(0)` selector in combinatie met `animation: delay` en de andere `animatie: ` opties.

```css
/* hier worden dus verschillende animaties aangesproken, en elke setting staat */
/* aan zijn eigen nummer in de selector */
.hidden .food-circle {
    animation-name: food-fall, food-shake;
    animation-duration: 8s, 3s;
    animation-timing-function: linear, ease-in;
    animation-iteration-count: 1, 1;
    animation-play-state: running, running;
}


  .food-circle:nth-of-type(0) {
    left: 1%;
    animation-delay: 0s, 0s
}

.food-circle:nth-of-type(1) {
    left: 10%;
    animation-delay: .5s, .5s
}

/* En een:: before element*/
.info::before {
    content: 'i';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -50px;
    height: 50px;
    width: 50px;
    background: rgba(10,10,10,.75);
    font-size: 30px;
}

/* :first of type */
.info aside header:first-of-type {
    font-size: 22px;
    font-weight: bold;
}
```

### 4: Kleine hacks en fixes
Hieronder kun je een kleine samenvatting vinden van alle kleine losstaande technieken die gebruikt zijn in het kunstwerk. De "ongewone" css mogelijkheden zegmaar.

```css
/* css filter */
filter: invert(100%);

/* Mobile media query */
@media only screen and (max-width: 600px) {

}

/* overflow */
overflow: hidden;
```

## Step 3: Javascript technieken
Om de meer geaffanceerdere animaties te kunnen maken is toch javascrip nodig. Ik heb javascript gebruikt om onderandere classen te toggelen on click, scroll events, keydown events, mouse move events enz.

### 1: Click toggelers
Als ik op een div click, doe dan dit. Het klinkt zo simpel maar het vereist toch altijd wel een beetje javascript. hieronder een voorbeeld van een foreach loop die een click op meerdere elementen toepast en een class toggle activeerd:
```javascript
var allSFish = document.querySelectorAll('.s-fish');

allSFish.forEach(item => {
  item.addEventListener('click', event => {
    allSFish.forEach(fish => {
      fish.classList.toggle("hide");
    })
  })
})
```
Deze functie word gebruikt voor als de gebruiker klikt op 1 van de kleine visjes, om ze weg te laten zwemmen.

### 2: Scroll event
Omdat ik het kunstwerk wat dynamischer wilde houden maar wel de originele stijl wilde bewaren heb ik een scroll toegevoegd die aan de hand van de pagina scroll de originele zwarte achtergrond kleur laat infaden. ook verplaatst de svg iets naar beneden als de golven in beeld komen.

```javascript
window.addEventListener('scroll', () => {
  // opacity word aangepast met de waarde die uit de functie terug komt
  seaBg.style.opacity = getScrollPercent();
  
  // hieronder bepaal ik of de pagina aan de bovenkant is
  // dan voegt hij de class top toe.
  if ((getScrollPercent() * 100) <= 10) {
      body.classList.add("top")
  } else {
      body.classList.remove("top")
  }
})

// Deze functie komt van stackoverflow
// hij berekent het scroll persentage van de pagina.
function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) ;
}
```

### 3: Keydown events
Omdat er in de rubric ook voldaan moest worden aan een keydown event heb ik aan de hand van 1 van de volgende toetsen in te drukken: "s", "m" & "b", een animatie van een vis toegevoegd die op een rnadom hoogte door het beeld swemt. en aan de toets is het of een kleine, middel of grote vis. Omdat je op mobiel geen keydown hebt heb ik daar knoppen in het scherm geplaatst.
```javascript
window.addEventListener("keydown", keyFunction);
function keyFunction() {
// ifstatement voor de toetsen
    if (event.keyCode == 83) {
        sFishSwim("s")
    }

    else if (event.keyCode == 77) {
        sFishSwim("m")
    }
    else if (event.keyCode == 66) {
        sFishSwim("b")
    }
}

// mobile fix for keydown
var sFish = document.querySelector('.sFishBtn');
var mFish = document.querySelector('.mFishBtn');
var bFish = document.querySelector('.bFishBtn');

sFish.addEventListener("click", function() {
    sFishSwim("s")
});
mFish.addEventListener("click", function() {
    sFishSwim("m")
});
bFish.addEventListener("click", function() {
    sFishSwim("b")
});

// de functie voor het maken van een vis en deze laten swemmen door het beeld.
function sFishSwim(type) {
    var randomnmbr = Math.random() * 100;

    var div = document.createElement('div');
    div.className = type + '-new-fish ' + type + '-new-fish' + fishAmmount;
    div.style.top = randomnmbr + "%";
    document.querySelector('.new-fish-outer').appendChild(div);
    fishAmmount += 1;
}
```

### 4: Een mouse move event
Het leek me leuk om het oog van de grote vis de muis van de gebruiker te laten volgen, zodat het kunstwerk een levendig gevoel krijgt. Dit heb ik ook met javascript gedaan.
```javascript
    var pupil = document.querySelector(".eye");
// hier kijk ik hoever de muis van het oog verwijderd is op de x en y axis
document.addEventListener("mousemove", (e) => {
	let x = e.clientX * 30 / window.innerWidth - 11.4;
	let y = e.clientY * 30 / window.innerHeight - 11.3;

    // hier zorg ik er voor dat het pupil niet te ver buiten de vis gaat
    if (y >= 10 && x >= 11.4) {
        pupil.style.transform = 'translate(' + 11.4 + 'px ,' + 10 + 'px)';
    } else if (y >= 10) {
        pupil.style.transform = 'translate(' + x + 'px ,' + 10 + 'px)';
    } else if (x >= 11.4) {
        pupil.style.transform = 'translate(' + 11.4 + 'px ,' + y + 'px)';
    } else {
        pupil.style.transform = 'translate(' + x + 'px ,' + y + 'px)';
    }
})
```

# Het resultaat
Het resultat is een best leuk interactieve versie van het originele kunstwerk. Ik vond het een leuke opdracht waarbij ik helaas niet gelijk de link legde tussen visual interfase design en dit vak. maar het is wel tot een mooi resultaat gekomen.
[Bekijk het resultaat!](https://wiebsonice.github.io/Web-annimatie/)


