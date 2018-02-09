//짝수와 홀수 Level 1

function evenOrOdd(num) {
  // 짝수, 홀수인 경우 각각의 값을 반환해야하기 때문에 if문 사용
  // 2로 나누었을때 0 이 되면 짝수임으로 매개변수에 %2 를 해줌 
  if(num % 2 === 0){
  return "Even"
}
  // else로 %2 했을때 0이 되지않는 반대의 경우를 구함
else {
  return "Odd"
}
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));

//---------------------------------------------------------------------


//약수의 합  Level 1

//약수를 구하기위해 i를 1로 초기값을 잡고 매개변수 보다 작거나 같게 조건을 준 후 1~12까지 1씩 증가 라는 조건을줌
//for문안에 if문을 사용해 약수를 구하고 answer에 i의 더한값을 담아줌
function sumDivisor(num) {
    var answer = 0;
    for(var i=1; i<=num; i++){
        if(num % i === 0){
            console.log(i);
            answer += i;
        }
    }
    return answer;
}
console.log(sumDivisor(12));


//---------------------------------------------------------------------

//수박수박수박수박수박수? Level 1

// 반복문인 for문을 이용해서 i를 2로 나누면 0이라는 조건을 주어 홀수, 짝수를 구gka
//(num % 2)? "Odd":"Even"; 삼항 연산자로 () 안에 값이 true라면 앞에 값을 반환, () 안에 값이 false라면 뒤에 값을 반환...
//..............해서 하려 했는데 실행 안됌
function waterMelon(n){
    var result = "";
    for(var i=0; i<n; i++){
        result += (i % 2 === 0) ? '수' : '박';
    }
    return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))



//---------------------------------------------------------------------


//핸드폰 가리기

// slice라는 배열에서 일부분을 선택하여 새로운 배열로 만들어주는 매서드를 이용..... 
//*로 표현해줄 문자를 변수에 담고....
//매개변수 s의 7번째 까지 의 수를 위에 만든 새로운 변수로 반환...하려했지만 에러남 
function hide_numbers(s){
    var result = "*******";
    result += s.slice(7);
    return result;
}
console.log("결과 : " + hide_numbers('01033334444'));