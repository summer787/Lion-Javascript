/* global gsap */

export const shake = gsap.to('form',{
  duration:0.1, 
  // 애니메이션의 지속 시간을 0.1초로 설정
  x:-10,
  // x축 방향으로 -10 픽셀만큼 이동하는 애니메이션 효과
  repeat:5,
  // 애니메이션을 5번 반복합니다. 즉, 총 6회 실행됩니다. 처음 실행 후 5회 반복
  yoyo:true,
  //  애니메이션을 왕복 방식으로 반복
  clearProp:'x',
  // 애니메이션 완료 시에 'form' 요소에 설정된 x 속성을 삭제합니다. 즉, 원래 상태로 돌아갑니다.
  paused:true
  // 일시 중지 상태로 설정
})

// 