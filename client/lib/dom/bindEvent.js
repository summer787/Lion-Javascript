
function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(/mouseenter|click|mousemove|mouseout|mouseover/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

}

// node.addEventListener(type,handler);

// return()=>{
//   return node.removeEventListener(type,handler);
// }


//클로저 함수가 함수의 본문을 리턴시킨다 
//위 함수 node,type,handler 다 기억
// return ()=> node.removeEventListener(type,handler);

//예시 tiger

