import { jujeobData } from './data/data.js';

import { 
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast,
  removeClass,
  clearContents,
  isNumericString,
  toggleClass,
  shake,
  copy,
 } from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기 
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩

function handleSubmit(e){
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];
  //list.length -1였는데 제거하는 이유는 getRandom시 floor를 적용해서 내림처리를 하기 때문
  



  if (!name || name.replace(/\s*/g,'') == '') {
    showAlert('.alert-error','이름을 입력해 주세요!!',2000);
    
    // addClass('.alert-error','is-active');
    
    // setTimeout(() => {
    //   removeClass('.alert-error','is-active');  
    // }, 2000); //2초 뒤에 자연스럽게 사라지게 하려고 추가가됨가 동시에 타이머가 돌아가는 것임
    //코드 실행을 늦추고 있다 이것이 비동기
    showAlert('.alert-error','이름을 입력해 주세요!',2000);

    // global gsap 넣으면 꺼짐
    shake.restart();
    // restart gshp에서 제공해는 애니메이션 재생기키는 메서드
  
  //라이브러리 gsap코드임 애니메이션 적용 css하나도 안쓰고 자바스크립트로 애니메이션을 걸 수 있다
  //요요를 넣으면 돌아가는 것까지가1번임



    return; //name이 없다면 
  }
    //공백처리? replace => regEXP 
    //str1.replace(/\s*/g,'');

    //Number로 형변환
  // isNaN 으로 true false 체크   //다시 한번 확인해보기
  if (!isNumericString(name)) {
    showAlert('.alert-error','제대로된 이름을 입력 해주세요!!',2000);

    shake.restart();

    return;
  }
 //실행이 되면 안되니까?함수 중단해주려고

    clearContents(resultArea) //이름작성후~ 멘트 지우기
  insertLast(resultArea,pick); //렌더링하기 이름작성후 버튼에 텍스트를 삽입하는 것
}

  
  //마이크로 애니메이션으로 제대로된 정보를 입력하지 않으면 인풋창 흔들리게 만들거임
  //근데 첫번째 눌렀을때만 됨 class에 shake가 추가되버려서  
  // 애니메이션 자체가 들어가고 자체가 사려져서 빠졌을 때는 작동을 안함 토글도 ㄴㄴ
  //trasition이랑 애니메이션이라 차이 있음 깇은 얘기임
  //alert창이랑 마찬가지로 알아서 빠져줘야 다시 클래스에 쉐이크를 넣어야함
  //그럼 애니메이션 처리를 보통 라이브러리를 쓰긴함
  //html에서 main.js 위에 불러와서 사용해야 되니까 https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js로 엔진을 불러옴 




  function handleCopy(){
  //클립보드에 복사하고 메세지를 보내게 만듦
  const text = resultArea.textContent;

  // navigator.clipboard.writeText(text).then(()=>{
  //   showAlert('.alert-success','클립보드 복사 완료!');
  // })
  //유틸함수로 불러오기
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사 완료!');
  })
  // console.log()하면 pomise나타남
  //쓰고 누르는 순간 클립보드에 복사가 됨 
  //네비게이터가 가지고 있는 기능이다
  //BOM의 기능
  //사실 클립보드 복사가 완료되면 그때 alert창을 띄워야함
  //코드의 실행 흐름을 바꿔야함
  //pormise가 필요한 이유이다. 클립보드가 완성이 되면 alert을 띄우려고
    //통신 자체가 실패할 수도 있음 근데 성공을 했다면 그다음 구문 실행시켜줘 then
  showAlert('.alert-success','클립보드 복사 완료!');

  }
  
//과제? 상태관리 시도해보시라
//이름을 제대로 입려했을 때 클립보드에 복사될 수 있도록 만드세요
//let state = false
// state = true;
// if(state){  ...logic }

  submit.addEventListener('click', handleSubmit);
  resultArea.addEventListener('click',handleCopy)



// -------------------
