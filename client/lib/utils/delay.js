import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)'


// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// })

//delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다


function delayP(){

  return new Promise((resolve, reject)=>{
    resolve('성공입니다')
  })
}

delayP().then((result)=>{
console.log(result);
})


// console.log(2);
// console.log(3);

//1초 뒤 1실행 그 후 1초 뒤 2실행 그 후 1초 뒤 3실행한다면?
//gshop쓰세여