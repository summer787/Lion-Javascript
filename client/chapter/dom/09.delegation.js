/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */


// const buttonA = getNode('.a');
// const buttonB = getNode('.b');
// const buttonC = getNode('.c');
// const buttonD = getNode('.d');
// const buttons = getNodes('button');

// buttons.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     console.log('hit');
//   })
// })

const container = getNode('.container');



function handleDelegation (e){
  
  let target = e.target;


  let li = target.closest('li');

  if(!li) return;
  
  let className = attr(li,'class');
  let dataName = attr(li,'data-name');

  
  if(className === 'home'){
    console.log('홈 실행!');
  }

}


container.addEventListener('click',handleDelegation)



// function handleDelegation (e){

//   let target = e.target;
//   let className = attr(target,'class');
//   // let dataName = target.dataset.name;
//   let dataName = attr(target,'data-name');

//   if(dataName === 'A'){
//     console.log('A버튼 클릭');
//   }

  // if(className === 'a'){
  //   console.log('A 버튼 클릭!');
  // }

  // if(className === 'b'){
  //   console.log('B 버튼 클릭!');
  // }

  // if(className === 'c'){
  //   console.log('C 버튼 클릭!');
  // }

  // if(className === 'd'){
  //   console.log('D 버튼 클릭!');
  // 

  // if(target.getAttribute('class') === 'd'){
  //   console.log('D 버튼 클릭!');
  // 





/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */