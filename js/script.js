//  let obj = {
//      name: 'Ivan',
//      showName(){
//          console.log(`${this.name}`);
         
//      }
//  }
// obj.showName();


// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.showData = function(){
//         console.log(`${this.name},${this.age}`);
        
//     }
// }

// let user1 = new User('Ivan', 25);
// user1.showData();


// математичні методи Math
// Math.floor()робить ціли число до меншого 5.9=5
// Math.ceil() заокруглює до більшого 5.1=6
// Math.round()заукруглює правильно 5.4=5,5.6=6
// Math.pow()піднесення до степення 1-й число 2-й степінь
// Math.sqrt()корінь квадратний з числа
// Math.abs()з мінуса на плюс
// Math.max()з перелічиних чисел вибирає найбільше
// Math.min()
// Math.random()любе рандомне число вибирає не включаючи 0 і 1
// let nam = 5.965743;
// nam.toFixed(2); 5.97

 let f0 = document.forms['f0'];
 let f1 = document.forms['f1'];
 let conteiner = document.querySelector('.conteiner');
let mas = [{
        url:"url(css/1.jpg)" 
},
{
        url:"url(css/2.jpg)"
},
{
        url:"url(css/3.jpg)"
},
{
        url:"url(css/4.jpg)"
},
{
        url:"url(css/5.jpg)"
} 
];
let aa = 0;
f1.r[0].checked = true;
conteiner.style.backgroundImage = mas[0].url;
conteiner.style.backgroundSize = 'cover';
for(let i=0; i<f1.r.length; i++){
        f1.r[i].onclick = function(){
                aa = i;
                conteiner.style.backgroundImage = mas[aa].url;
                conteiner.style.backgroundSize = 'cover';
        }
}
function checkRadio(){
        f1.r[aa].checked = true;
}
function goRight(){
        aa++;
        if(aa == mas.length){
                aa = 0;
        }
        conteiner.style.backgroundImage = mas[aa].url;
        conteiner.style.backgroundSize = 'cover';
        checkRadio()
}
function goLeft(){
        aa--;
        if(aa == -1){
                aa = mas.length - 1;
        }
        conteiner.style.backgroundImage = mas[aa].url;
        conteiner.style.backgroundSize = 'cover';
        checkRadio()
}

let start;
f1.play.onclick = function(){
        f1.play.style.display = "none";
        f1.pouse.style.display = "block";
        start = setInterval(function(){
                goRight()
        }, 2000)
}
f1.pouse.onclick = function(){
        f1.play.style.display = "block";
        f1.pouse.style.display = "none";
         clearInterval(start);
 }

 


  
     

 


 
 

 

 
 
 
 



