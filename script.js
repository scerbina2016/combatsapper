const ukrLang = document.querySelector(".main-header-left");

console.log(ukrLang);

console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
//========================= for example =======================w


/*const but = document.getElementById('button');
const inputDiametr = document.getElementById('diametr');
const inputKoefK = document.getElementById('koeficientK');
const inputCalcField = document.getElementById('calcField');
const inputArr = document.querySelectorAll('input');
const answer = document.getElementById('answer');
const answerRound = document.getElementById('answerRound');
const amount400 = document.getElementById('answer400');
const amount200 = document.getElementById('answer200');
const answerOnly200 = document.getElementById('answerOnly200');

console.log('length of input arr  = '+inputArr.length);
console.log('length of input arr  = '+inputArr);
function cl(fill) {
    console.log(fill);
}
let inp1value;
let inpArrVal=[];
let answerNum=0;
let diametrNum = 0;
let koefKNum = 0;
let am400 = 0;
let am200 = 0;
let total200 = 0;

inputCalcField.addEventListener('change', () => {
    if (Number(inputDiametr.value) > 30) {
       answerNum = Math.round(Number(inputDiametr.value) * Number(inputDiametr.value) * Number(inputKoefK.value)* (Number(inputDiametr.value)/30)); 
        cl('>35 ====>' + answerNum + 'diam ==>' + Number(inputDiametr.value));
    } else {
        answerNum = Math.round(Number(inputDiametr.value) * Number(inputDiametr.value) * Number(inputKoefK.value));
        cl('<35 ====>'+answerNum + 'diam ==>' + Number(inputDiametr.value));
    };
    

    cl(`Calculated value ====>>>> ${answerNum}`);
    answer.innerText = answerNum;
    let amRound200 = Math.ceil(answerNum/200)*200;
    answerRound.innerText = amRound200;//Math.ceil(answerNum/200)*200;
    amount400.innerText = Math.trunc(amRound200/400);
    amount200.innerText = Math.trunc(amRound200/200) - Math.trunc(amRound200/400)*2;
    answerOnly200.innerText = amRound200/200;
})

inputDiametr.addEventListener('change', () =>{
    diametrNum = Number(inputDiametr.value);
    cl(`Діаметр після кліку на діаметрі дорівнює ${diametrNum} cm`);
    cl(`Коеф К після кліку на діаметрі дорівнює ${koefKNum} cm`);
});

inputKoefK.addEventListener('change', () =>{
    koefKNum = Number(inputKoefK.value);
    cl(`Діаметр після кліку на коеф дорівнює ${diametrNum} cm`);
    cl(`Коеф К після кліку на коеф дорівнює ${koefKNum} cm`);
});
cl(`Діаметр дорівнює ${diametrNum} cm`);

//======================================================================================

//for (let i = 0; i < inputArr.length; i++) {
    
//    inputArr[i].addEventListener('change', () =>{
//       inpArrVal[i] = Number(inputArr[i].value);
//       if(inpArrVal[0] >=35 ) {
//            cl('>=35');
//            cl(inpArrVal[0]);
//            cl(inpArrVal[1]);
//
//            answerNum = Math.pow(Number(inpArrVal[1]));
//            //inpArrVal[1]*Math.pow(inpArrVal[0])*(inpArrVal[0]/30);
//            cl(answerNum)
//        }
//            else answerNum = inpArrVal[1]*Math.pow(inpArrVal[0]);
//        console.log('answerNum =>'+answerNum);
//        if(answerNum) answer.innerText = answerNum;
//        else
//        answer.innerText = 'Input all fields'
//    }) 
//}



//inputFirst.addEventListener('change', () =>{
//    inp1value = inputFirst.value;
//    console.log('Input value - '+inp1value);
//})




//but.textContent='work2';
but.addEventListener('mouseover', function oops() {
    but.style.borderColor='red';
})
but.addEventListener('mouseout', function oops() {
    but.style.borderColor='black';
})

console.log(but); */