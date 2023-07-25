

// import { diceAnimation, getNode, getNodes } from "./lib/index.js";


// //방법1. const button =getNode('.buttonGroup > button')
// // console.log(button[0]);

// //방법2.const button =getNode('.buttonGroup > button:nthe-child(1)')

// //방법3.구조분해할당

// // [phase-1] 주사위 굴리기
// // 1. dice animation 불러오기
// // 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
// //       - 주사위 굴리기 버튼을 가져온다.
// //       - 이벤트 핸들러를 연결한다.
// //       - 애니메이션 코드를 작성한다.

// // 배열 구조 분해 할당


// const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');


// // let isClicked = false;
// // let stopAnimation;
// //재할당안되고 변수 가질 수 있게 밖에다가

// function handleRollingDice(e){

//   setInterval(diceAnimation, 100);
//   let stopAnimation 밖으로 뺀다
//   if(!isClicked){
//     console.log('첫 번째 클릭');
//     // const id =setInterval(diceAnimation, 100);
//     //스코프 문제
//     stopAnimation= setInterval(diceAnimation, 100);
//   //setInterval은 고유한 아이디를 반환한다 이벤트 제거용으로 쓸수있다 
//   //이 아이디를 ,stopAnimation변수에 넣은것 이걸 clearINterval에 넣으면 작동이 안되게 만듦
//   //이걸 함수안에 넣으면 다시 클릭을 하고 다시 실행되는 순간 할당이 다시 일어나버림 클리어인터벌을 하면
//   //undefined에다가 클리어인터벌을 하는 셈이 된다 그래서 밖에 미리 선언해보리면 재할당이 일어나지 않아서 밖으로 뺌
//   }

//   else{
//   console.log('두 번째 클릭');
//   // clearInterval(id)
// //id 스코프 문제
// clearInterval(stopAnimation);

//   isClicked = !isClicked;

//   }





// }



// startButton.addEventListener('click',handleRollingDice);

// --------------------------------------------------------------
//---------------------------------------------------------------


// import { attr,insertLast,diceAnimation, getNode, getNodes, endScroll } from "./lib/index.js";

// // [phase-1] 주사위 굴리기
// // 1. dice animation 불러오기
// // 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
// //       - 주사위 굴리기 버튼을 가져온다.
// //       - 이벤트 핸들러를 연결한다.
// //       - 애니메이션 코드를 작성한다.
// // 3. 애니메이션 토글 제어 
// // 4. 클로저 + IIFE 를 사용한 변수 보호


// // [phase-2] 레코드 리스트 control / view
// // 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// // 2. hidden 속성 제어하기
// //       - 기록 버튼 이벤트 바인딩
// //       - hidden 속성 false 만들기 
// //       - 초기화 버튼 이벤트 바인딩 
// //       - hidden 속성 true 만들기


// // 배열 구조 분해 할당


// const [startButton,recordButton,resetButton,] = getNodes('.buttonGroup > button');
// const recordListWrapper = getNode('.recordListWrapper');


// //클로저에서
// // IIFE패턴 즉시실행함수식으로 바꾸기
// //const handleRollingDice = function handleRollingDice(e){}하고 마지막에 ()히면됨 그런데 여기서
// //arrow function으로 변경




// const handleRollingDice = ((e)=>{

//   let isClicked = false;
//   let stopAnimation;  
// //이 값을 클러저에 넣었으니까 외부변수에 접근하니까 초기화를 하지 않아 이렇게 쓸 수가 있더러
// //클로저에 안 넣었으면 함수안에 있을 시 선언이 일어나 실행되지 않음

// //얘를 안전하게 넣으려면 안에 넣고 함수로 내보내 클로저  reuturn으로

// //코드 전체 한번 실행해주려면 어떻게 해야할까 IIFE패턴으로바꾸어야함
// return ()=>{

//   if(!isClicked){ //주사위 play
//     stopAnimation = setInterval(diceAnimation, 100);
//     recordButton.disabled = true;
//     resetButton.disabled = true;



//   }else{ //주사위 stop
//     clearInterval(stopAnimation)
//     recordButton.disabled = false;
//     //두번째 버튼 활성화 돔의 프로퍼티 활용 disabled를 true false로 줌
//     //주사위를 멈추면 기록과 초기화 버튼이 활성화가 되는 버튼
//     resetButton.disabled = false;
   

    

//   }

//   isClicked = !isClicked;
// }

// })()


//     //hidden속성 제어하기
//     //기록버튼 이벤트 바인딩 
//     //hidden 속성 false 만들기
//     //초기화 버튼 이벤트 바인딩
//     //hidden 속성 true 만들기


// ---------------------------------함수 분리
// //주사위 값 위해
// let count = 0;
// let total = 0;



// function handleRecord(){

//   recordListWrapper.hidden = false;
  

//   // 회차 늘어날 수 있도록
// // diceValue 들어갈 수 있도록
// // total 값이 나올 수 있도록

//  //큐브의 data-dice 값만 가져오기
// //  attr함수 이용하기 일단 불러와
// const diceValue = +attr('#cube','data-dice');
// // 두개만 쓰면 getter
// //근데 얘는 문자를 가져와서 +attr 암시적형변환을 해줌  total 도 += diceValue 이렇게

// //값을 가져왔으니 뿌려줄 템플릿 만들기`
// //레코드 안에 있는 tbody 에 뿌려줘야함

// const template = /* html */`
// <tr>
//   <td>${++count}</td>
//   <td>${diceValue}</td>
//   <td>${total += diceValue}</td>
// </tr>
// `

// // 스크롤 맨 밑으로??


// insertLast('.recordList tbody',template);


// console.log( diceValue );


// }

//----------------------------함수 분리

import { attr, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast } from "./lib/index.js";


// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호


// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//       - 기록 버튼 이벤트 바인딩
//       - hidden 속성 false 만들기 
//       - 초기화 버튼 이벤트 바인딩 
//       - hidden 속성 true 만들기
// 3. 주사위 값을 가져와서 랜더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기



// 배열 구조 분해 할당


const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList tbody');
memo('@tbody', ()=> getNode('.recordList tbody'))//tbody
// @태그라는 것 명시하려고 붙인 것 

// 진짜 진짜 쉬운 과제

// disableElement(node)
// enableElement(node)
// isDisableState(node)  => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false

let count = 0;
let total = 0;

function createItem(value){
  // 뿌려줄 템플릿 만들기
  return /* html */`
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `
}

function renderRecordItem(){

  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr(memo('cube'),'data-dice');

  insertLast('@tbody',createItem(diceValue));

  endScroll(recordListWrapper);

}

const handleRollingDice = ((e)=>{

  let isClicked = false;
  let stopAnimation;  

  return ()=>{

    if(!isClicked){ // 주사위 play
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;


    }else{ // 주사위 stop
      clearInterval(stopAnimation)
      recordButton.disabled = false;
      resetButton.disabled = false;

    }

    isClicked = !isClicked;
  }
})()

// 회차 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total 값이 나올 수 있도록

function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem()
}

function handleReset(){
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents('@tbody');
  
  count = 0;
  total = 0;

}

startButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handleReset);





// 과제 2 

// disableElement(node)
// enableElement(node)
// isDisableState(node)  => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false

