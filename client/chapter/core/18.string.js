/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ',stringTotalLength)



// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ',extractCharacter)


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8,-1);
console.log('slice : ',slice)
// // -1하면 뒤에서 부터 간다
// slice([begin[, end]])
// end : -1을 지정하면 맨 마지막 스트링 제외

let subString = message.substring(1,3);
console.log('subString : ',subString)

let subStr = message.substr(1,3);
console.log('subStr : ',subStr)


// 문자열 포함 여부 확인
let indexOf = message.indexOf('s');
console.log('indexOf : ',indexOf);

// if(message.indexOf('p') > 0)
//-1이 나오면 없다는 것
// 조건처리할 때 p>0 이렇게 해서 할 수 있음
//if (message.indexOf('p') > 0)


// 뒤에서 부터 찾음 순서는 앞에서 부터 뒤에 있는 s부터 먼저

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ',lastIndexOf)

let includes = message.includes('less');
console.log('includes : ', includes)



let startsWith = message.startsWith('Less');
console.log('startsWith : ',startsWith)
//해당 문자를 시작으로 ? less부터 시작해?

let endsWith = message.endsWith('more');
console.log('endsWith : ', endsWith)


// 공백 잘라내기
let trimLeft = message.trimLeft();
let trimRight = message.trimRight();

str.replace(/\s*/g,'');

function normalText(string){
  return string.replace(/\s*/g,'')
}


let trim = str.trim();


// console.log('trim : ',trim)




// 텍스트 반복
let repeat = message.repeat(3);

console.log('repeat : ',repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase)

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ',toUpperCase)


// 텍스트 이름 변환 유틸리티 함수


function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}