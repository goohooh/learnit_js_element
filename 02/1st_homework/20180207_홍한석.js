/*
 * level 3: 다음 큰 숫자
 */
function nextBigNumber(n){
  // n의 이진수에서 1의 갯수를 세고
  var num_of_1 = n.toString(2).split('').filter((i) => i === '1').length;
  
  // 그것과 같은 1의 갯수를 가진 수가 나올 때까지 n을 증가시킵니다.
  while (num_of_1 !== (++n).toString(2).split('').filter((i) => i === '1').length);
  
  return n;
}

//---------------------------------------------------------------------

/*
 * level 3: 시저 암호
 */
function caesar(s, n) {
  var base;
  var result = '';
    // 문자열을 문자 배열로 만들고
  for (const c of s.split('')) {
    var ascii_code = c.charCodeAt();
    // 공백일 땐 시저 암호에도 공백 넣어줍니다.
    if (ascii_code === ' '.charCodeAt()) {
      result += ' ';
      continue;
    }
    
    // 소문자면 a를 기본으로
    if (ascii_code >= 97 && ascii_code <= 122) { // for small letter
      base = 'a'.charCodeAt();
    // 대문자면 A를 기본으로
    } else {
      base = 'A'.charCodeAt();
    }

    ascii_code -= base;
    // 순환 리스트 증가
    ascii_code = (ascii_code+n)%26;
    ascii_code += base;
    
    var caesar_char = String.fromCharCode(ascii_code);
    
    result += caesar_char;
  }

  return result;
}

//---------------------------------------------------------------------

/*
 * level 4: 숫자의 표현
 */
function expressions(num) {
  var cnt = 1; // itself
  // 절반 이하부터
  for (var i = 1; i <= Math.trunc(num/2); i++) {
    var sum = 0;
    // 절반 이상까지만
    for (var j = i; j <= Math.ceil(num/2); j++) {
      // 순차적으로 합
      sum += j;
      // 합이 num이면 증가
      if (sum === num) {
        cnt++;
      } else if (sum > num) {
        sum = 0;
        break;
      }
    }
  }

	return cnt;
}

//---------------------------------------------------------------------

/*
 * level 5: 2 x n 타일링
 */
// 전통적인 메모아이제이션 피보나치
function tiling(n) {
  var fib = [1, 2];
	for(var i = 2; i < n; i++) {
    fib.push((fib[i-2]+fib[i-1])%100000) 
  }

	return fib[n-1];
}
// 제너레이터(왜 안되죠?)
function* fib() {
  var t1 = 1;
  var t2 = 2;
  while (true) {
    yield t1;
    [t1, t2] = [t2, (t1+t2)%100000];
  }
}
function tiling(n) {
  var fib_gen = fib();
  while (n--) {
    var val = fib_gen.next();
  }

  return val.value;
}

//---------------------------------------------------------------------

/*
 * level 5: 124나라의 숫자
 */
function change124(n) {
  // 3진법?을 124로 표기
  var answer = ['1', '2', '4'];
  for(var i = 0; i < n; i++) {
    // 이전 자릿 수 뒤에 1 2 4 중 모듈러로 나온 값을 붙여줍니다.
    answer.push(answer[Math.floor(i/3)-1]+answer[i%3])
  }
  return answer[n-1]
}
