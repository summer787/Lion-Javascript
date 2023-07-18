/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

console.log(first.className);
// 아미 js에서는 calss가 있어 className이라고 써야 제대로 접근 가능
console.log(first.size);
// 비표준이라서 생성되지 않음

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함


console.log(first.hasAttribute('size'));
// 표준인지 비표준인지 따지지 않고 속성이 있는 지의 여부
console.log(first.hasAttribute('title'));

console.log(first.getAttribute('class'));
console.log(first.getAttribute('size'));
// class 속성 가져와줘
// 특정 대상의 속성 값 가져올 때 사용
//비표준 속성도 가능

first.setAttribute('title','메세지')
first.setAttribute('class','second')
//접근은 가능하나 기존의 값은 사라져 조심
// first.setAttribute('class','')
//이렇게 빈문자로 지정해버려서 지우기도 함
first.removeAttribute('title');
//그런데 속성의 이름 까지 지우려면 이렇게 지움

console.log(first.attributes);


first.getAttribute('id')


// function getAttr(node,prop) {

//   //0. 넘어온 대상이 문자인지를 체크
//   // typeof node == 'string'
//   //1. 체크 후 element node로 변경해 주어야 함


//   //const node = '.first';
//   //const prop = 'id';

//   if(typeof node == 'string'){
//     node = getNode(node);
//     //getNode 함수 참조
//   }
  
//   return node.getAttribute(prop)
//  //안되는 이유 elementnode로 써야하는데 그냥 들어오면 문자여서 쓸수 없어 
//  //문자는 getAttribute 메서드를 쓸 수 없으니까 돔 객체의 능력이기 때문에 
//  //따라서 조건처리를 해주어야 함
// }

// getAttr('.first','id');



function setAttr(node,prop,value){

  if(typeof node === 'string'){
    node = getNode(node);
  }
  
  // 전달받은 prop의 타입이 string이 아니라면 Error! 
  
  if(typeof prop !== 'string'){
    throw new Error('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다')
    //어떤 함수에서 에러가 났다는 것을 정확히 알려주는 것이 좋음
  }

  // if(!node[prop] && prop !== 'class' && prop !== 'title'){
  //   node.dataset[prop] = value;
  //   return;
  // }

  node.setAttribute(prop,value);
}
  //setter 값을 내뱉을 필요가 없어 return생략

setAttr('.first','title','인사멘트')
// setAttr('.first','data-value','인사멘트')


getAttr()
setAttr()


const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);
 

function attr(node,prop,value) {

  if(!value){
    return getAttr(node,prop);
  }else{
  setAttr(node,prop,value);
}

return !value ? getAttr(node,prop) : setAttr(node,prop,value);
 

}





attr('.first','class') //getter
attr('.first','class','second') //setter
//값이 있게 전달하면 setter



/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log(first.dataset.size); //getter

console.log(first.dataset.animation = 'paused'); //setter
//속성이 추가가 된다 getter setter 다 할 수 있다 


const value = attr('.first','class')
console.log(value)
;