/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log(first.className); //getter
// console.log(first.className = 'box'); //setter
// console.log(first.className = 'second');
// 클래스 이름 두개 동시 들어가지 않음 덮어씌움


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//add
//remove
//toggle
//contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); //boolean값 반환

console.log(first.classList.contains('is-active'));

function addClass(node,className) {
  if(typeof node == 'string') node = getNode(node);

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  node.classList.add(className);

}

addClass('.first','hello');




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


first.style.backgroundColor = 'orange'; //setter
// console.log( first.style.backgroundColor  ); //getter
//직접 값을 할당해서 값이 나오는거여 돔객체가 html읽은다음에 스타일도 넣고...근데 설정하지 않고 바로 조회하면 조회안됨


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).fontSize);
// 좀 더 명시적
console.log(getComputedStyle(first).getPropertyValue('font-size'));
//getter의 역할을 한다


function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}

//셋팅이라서 리턴 값 필요 없다

setCss('.first','color','pink');




