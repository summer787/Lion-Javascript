

export function isNumericString(data){
  return isNaN(Number(data))
}

// 주어진 data가 숫자로 이루어진 문자열인지를 확인
// isNaN 함수는 전달된 값이 숫자가 아니면 true를 반환하고, 숫자인 경우 false
//Number(data)를 사용하여 data를 숫자로 변환한 후, isNaN 함수를 통해 숫자인지 아닌지를 판별