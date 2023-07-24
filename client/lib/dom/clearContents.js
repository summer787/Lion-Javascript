

import { getNode } from "./getNode.js";


export function clearContents(node){

  if(typeof node === 'string') node = getNode(node);
  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = ''
    return;
  }

  node.textContent = ''
}

// clearContents 함수 인자로 전달된 HTML 요소의 내용을 지우는 기능을 수행

// node가 문자열인 경우, getNode 함수를 사용하여 해당 문자열에 해당하는 HTML 요소를 가져온다
//node가 INPUT 또는 TEXTAREA 요소인 경우, 해당 요소의 값을 빈 문자열('')로 설정하여 내용을 지운다
//node가 INPUT 또는 TEXTAREA 요소가 아닌 경우, 해당 요소의 텍스트 콘텐츠를 빈 문자열('')로 설정해 내용을 지움










