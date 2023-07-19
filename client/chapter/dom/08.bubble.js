/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */


/* 캡처링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})

article.addEventListener('click',(e)=>{
  // e.stopPropagation()
  //원하는 항목만 체크할 수 있다 버블링 막음
  console.log('%c article','color:dodgerblue');
})

p.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c p','color:hotpink');
  //주석 색깔 넣는법
},true)



