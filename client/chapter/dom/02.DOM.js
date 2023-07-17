/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

//Document Object Model

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling


/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

// const message = document.getElementById('message');
// const message = document.getElementsByClassName('first');

// document.querySelector('.first')

// console.log( message );

// message.textContent = 'aa'

// el,els


getNode('.first') // <span class="first"></span>


const first = getNode('.first');

const span = getNodes('span');

console.log(span);


// - getElementsByTagName
// - getElementsByClassName
// 과거에 많이 씀


// const first = document.querySelector('.first');
// const [firstSpan,secondSpan] = document.querySelectorAll('span');

// console.log(firstSpan);
// console.log(secondSpan);


// - querySelector
// - querySelectorAll
// - closest

console.log( first.closest('h1') );
//내 위에 부모와 가장 인접한 대상을 찾는다 event delegation 

/* 문서 대상 확인 */
// - matches
console.log( first.matches('#message') );

// - contains

console.log( first.contains('') );

//클래스를 포함하고 있어?
//node.classList.contaions()
//얘랑은 다르다 얘는 클래스의 포함여부를 확인
