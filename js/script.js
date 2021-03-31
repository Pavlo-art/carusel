let f0 = document.forms['f0'];
let f1 = document.forms['f1'];
let conteiner = document.querySelector('.conteiner');
let mas = [{
                url: "url(css/1.jpg)"
        },
        {
                url: "url(css/2.jpg)"
        },
        {
                url: "url(css/3.jpg)"
        },
        {
                url: "url(css/4.jpg)"
        },
        {
                url: "url(css/5.jpg)"
        }
];
let aa = 0;
f1.r[0].checked = true;
conteiner.style.backgroundImage = mas[0].url;
conteiner.style.backgroundSize = 'cover';
for (let i = 0; i < f1.r.length; i++) {
        f1.r[i].onclick = function () {
                aa = i;
                conteiner.style.backgroundImage = mas[aa].url;
                conteiner.style.backgroundSize = 'cover';
        }
}

function checkRadio() {
        f1.r[aa].checked = true;
}

function goRight() {
        aa++;
        if (aa == mas.length) {
                aa = 0;
        }
        conteiner.style.backgroundImage = mas[aa].url;
        conteiner.style.backgroundSize = 'cover';
        checkRadio()
}

function goLeft() {
        aa--;
        if (aa == -1) {
                aa = mas.length - 1;
        }
        conteiner.style.backgroundImage = mas[aa].url;
        conteiner.style.backgroundSize = 'cover';
        checkRadio()
}

let start;
f1.play.onclick = function () {
        f1.play.style.display = "none";
        f1.pouse.style.display = "block";
        start = setInterval(function () {
                goRight()
        }, 2000)
}
f1.pouse.onclick = function () {
        f1.play.style.display = "block";
        f1.pouse.style.display = "none";
        clearInterval(start);
}