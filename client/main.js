
//모듈 프로그래밍 => js 방법론 어려운 문법은 아니다

//getNode 기져오기

import { getNode,getNodes } from "./lib/index.js";
//자동완성 시 .js 안붙는 이유 다른 환경 우리는 바닐라 자바스크립트라서 붙여서 함







//------------------------------------------------------------------------------------
//page-1.
const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

//1. input value 값 가져오기
//2. 두 수의 합 더하기
//3. result 출력하기

function handleInput(){



let firstValue = Number(first.value);
// 암시적 형변환
// let firstValue = +first.value;
// let firstValue = first.value/1;
let secondValue = Number(second.value);
//두 수의 합 더하기
let total = firstValue + secondValue;


// 기존 값 지우기, 마지막에 넣기
clearContents(result);

insertLast(result,total)

}

// [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요
// 1. clear 버튼을 가져온다.
// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// 3. firstValue값을 지운다.
// 4. lastValue값을 지운다.
// 5. result의 값을 지운다.
// 6. result에 - 값을 넣는다.


first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)

// 1. clear 버튼을 가져온다.
const clear = getNode('#clear');

function handleClear(){

  
  // 3. firstValue값을 지운다
  clearContents(first)
  // 4. secondValue값을 지운다.
  clearContents(second)
  // 5. result의 값을 지운다.
  clearContents(result)
  // 6. result에 - 값을 넣는다.
  result.textContent = '-'
}

// 2. clear 버튼에 이벤트 핸들러를 연결한다.
clear.addEventListener('click',handleClear)



//clearContents(first); 쓰는거랑 firstValue = "" 로 지워주는거랑 차이가 있나요?
//ㄴㄴ 유틸함수 활용 한 거임


//----------------------------------------------------------------------------
// function page2(){


//   const calculator = getNode('.calculator');
//   const clear = getNode('#clear');
//   const result = getNode('.result');
//   const numberInputs = Array.from(
//     getNodes('input:not(#clear)')
//   )
  
//   console.log( numberInputs );
  
  
//   function handleInput(){
    
//     const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
  
  
//     console.log(  );
  
//     clearContents(result);
//     insertLast(result,total);
    
//   }
  
//   function handleClick(){
  
  
//     numberInputs.forEach(clearContents);
//     result.textContent = '-'
//   }
  
//   calculator.addEventListener('input',handleInput);
//   clear.addEventListener('click',handleClick);
  