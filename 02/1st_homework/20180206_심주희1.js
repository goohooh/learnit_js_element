/*
level <1> : 짝수와 홀수
*/

function evenOrOdd(num) {
  var result = "";
  if (num%2 === 0){  
  	result = "Even";
  } else {
    result = "Odd";
  }
  // %는 나머지를 반환하는 연산자. 0이면 짝수, 1이면 홀수
  // 함수를 완성하세요
  return result
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));

//---------------------------------------------------------------------

/*
level <1> : 피보나치 수
*/

function fibonacci(num) {
	var answer = 0;
  
  //피보나치수는 2 이상일때 부터 이전 수와 전 수를 더한 값으로 만들어진다.
  //1이하일때는 그냥 수를 리턴하고, 그 이상일때는 
  if(num<=1){
  return num;
  }
  if(num>=2){
  answer = fibonacci(num-1)+fibonacci(num-2);
  }
  return answer;
}
//함수 안에 함수를 쓸 수 있는지 잘 알지못해 일단 써보았는데 가능
//찾아보니 재귀함수인 것 같은데 정확히 이해하진 못함

//두번째 if문에서 num>=2이면 제대로 실행되고, num>1 이면 제대로 실행이 안됨. 차이가 궁금.

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))

//---------------------------------------------------------------------

/*
level <1> : 문자열 다루기 기본
*/

function alpha_string46(s){
  var result = true;
  // 함수를 완성하세요
 if( (s.length == 4 || s.length == 6) && !isNaN(s) ){
   return result;
   } else {
   return false;
   }
}

//how to check digit in string javascript로 검색하여 isNaN 발견.
//isNaN 함수는 숫자아님 여부를 나타내는 부울 값을 반환함. 모두 숫자일경우 false.
//논리연산자 ||는 하나만 참일 경우, &&는 모두 참일 경우, !는 부정을 나타냄 (지난주 예습 내용)

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );

//---------------------------------------------------------------------

/*
level <1> : 핸드폰번호 가리기
*/

function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  //맨 뒤 숫자 네개만 남기고 그 앞 숫자는 모두 *로 바꾸기
  //정규식을 쓰면 편할것 같은데 아직 익숙치 않아서 다른 방식을 고민
  //how to check last character of string in javascript로 검색->"".slice
  //length에서 마지막 숫자인 4를 뺀 수 만큼 *을 만들고, slice로 자른 숫자 4개를 붙이면 될 것 같음.

  var star = "*";	
  for (var i =1; i<s.length-4; i++){
  star += "*";
  }
  result = star+s.slice(-4);
  
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));

//---------------------------------------------------------------------

/*
level <1> : 문자열 내 p와 y의 개수
*/


function numPY(s){
  var result = true;
  //함수를 완성하세요
  //정규식으로 p와 y의 개수를 세면 될 것 같다고 생각함
  //how to check specific alphabet in javascript로 검색해 String match()를 알게됨
  //String match()는 배열로 반환하여 length로 길이를 측정할 수 있음
  
  var checkp;
  checkp = s.match(/p/gi).length;
  
  //console.log(s.match(/p/gi);
  
  var checky;
  checky = s.match(/y/gi).length;
  
  if(checkp==checky){
  return result;
  } else {
  return false;
  }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
