
/* 문자열 다루기 - level 1 */
function alpha_string46(s){
    // 비교 연산자 이용: === / ||(or) / &&(and) / !(부정) 
    // 숫자이면 참이라는 명제에 대해 함수를 찾아봄. !NaN(s): 숫자이면 참이다
  if((s.length===4||s.length===6)&&!isNaN(s)){
  return true;
 } else{
  return false;
 }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );
console.log( alpha_string46("1234") );

//---------------------------------------------------------------------


/* 문자열 내 p와 s의 개수 - level 1 */

function numPY(s){
  // 대문자/소문자 구분 조건이 없음에 대해 함수를 찾아봄 - gi = global and case-insensitive
  // 비교 연산자 이용: === / *length
	if (s.match(/p/gi).length === s.match(/y/gi).length) {
      	return true;
      } else {
  return false;
}
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

/* p와 y가 하나도 없는 경우를 

if ((s.match(/p/gi).length === s.match(/y/gi).length) || (s.match(/p/gi), s.match(/y/gi) === 0))  { return true; } 이렇게 정의하고 console.log( numPY("sstt") ) 를 불러올 때 왜 true 로 읽지 못하는 지 모르겠습니다. 

//---------------------------------------------------------------------


/* 핸드폰번호 가리기 - level 1 */
function hide_numbers(s){
  var result = ""
//for 함수 사용. 전체에서 -4자리수를 *로 바꾸어준다. 
  for(var i=0; i<s.length-4; i++){
    result += "*";
  }
//배열의 마지막 원소로부터 앞쪽에서 4번째까지 반환/ 핸드폰 번호가 10자리,11자리수로 다를 수 있는 점 유의
  result += s.slice(-4);
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
console.log("결과 : " + hide_numbers('0233334444'));

//---------------------------------------------------------------------


/*스트링을 숫자로 바꾸기*/
// Integer.parslnt(string변수): 문자열 >> 정수
public class StrToInt {
    public int getStrToInt(String str) {
        return Integer.parseInt(str);
    }
 
    //아래는 테스트로 출력해 보기 위한 코드입니다.
    public static void main(String args[]) {
        StrToInt strToInt = new StrToInt();
        System.out.println(strToInt.getStrToInt("-1234"));
    }
}

//---------------------------------------------------------------------

/*정수제곱근 판별하기*/

function nextSqaure(n){
  // 제곱근은 정수이므로, Math.sqrt을 이용해 제곱근을 반환한다.
  var numBe = Math.sqrt(n);
  var result = parseInt(numBe) - numBe === 0 ? (numBe + 1 ) * (numBe + 1) : "no";
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
console.log("결과 : " + nextSqaure(133));