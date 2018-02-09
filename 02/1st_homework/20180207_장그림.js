/**
* level1 약수의 합
* 약수란? 나누어 떨어지게 하는 수
* ex) 12의 약수 [1,2,3,4,6,12]
*/
function sumDivisor(num) {
	var answer = 0;

  for(var i=1; i<=num; i++){
     if(num%i === 0){					//나머지가 0인 수가 약수
      console.log(i);
      answer += i;						//약수이면 중복해서 더한다
     }
  }
	return "약수의 합: "+answer;
}

console.log(sumDivisor(12));
//console.log(sumDivisor(3));

//---------------------------------------------------------------------

/**
* level1 수박수박수박수박수박수?
* 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하는 함수
*/
function waterMelon(n){
  var result = new Array;
  var str = "";
  var num = n;

  /* 첫번째 풀이법 */
  // n을 기준으로 생각해서 문제 풀이.. 너무 어려운 코드가 됨
//   for( var i=n; i>=1; i--) {
//     // n이 짝수면 "박"을 홀수면 "수"를 더한다
//     n%2 === 0 ? str += "박" : str += "수";
//     n--;
//   }

//   result = str.split("").reverse();
//   str = "";
//   console.log(num);
//   for( var j=0; j<num; j++){
//   	str += result[j];
//   }

  /* 두번째 풀이법 */
  // i를 기준으로 생각해서 문제 풀이
  for( var i=1; i<=n; i++){
    // i가 홀수면 "수" 아니면 "박" 문자열을 더한다
    i%2 !== 0 ? str += "수" : str += "박";
  }

  return str;
}

console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))

//---------------------------------------------------------------------

/**
* level2: 콜라츠 추측
* 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측
* ex) 6이라면 6→3→10→5→16→8→4→2→1
*/
function collatz(num) {

	//최대 반복수는 500
  for(var i=1; i<=500; i++){
    //console.log(i);

    if( 500 <= i ) {  //500번을 반복해도 1이 되지 않는다면 –1을 반환
      return -1;
    } else {
      if(num !== 1) {	//num이 1이 될때까지 반복
         num%2 === 0 ? num = num/2 : num = num*3+1; // 입력된 수가 짝수라면 num/2 아니면 num*3+1
      } else {
        // num이 1이 될 때까지 반복한 횟수를 리턴
        // 변수 i는 반복 횟수를 가리키며, num이 1임에도 불구하고 판별여부를 확인하기 위해 한번 더 반복문을 타야하기 때문에 최종 i에서 -1을 한 수가 1이 되기위한 반복횟수
        return i-1;
      }
    }
  }

}

console.log( collatz(1252662) );
console.log( collatz(6) );

//---------------------------------------------------------------------

/**
* level2 소수찾기
* 소수? 1과 자기 자신으로만 나누어지는 수
* ex) 10 [2,3,5,7] , 5 [2,3,5]
*/
function numberOfPrime(n) {
	var result = 0;
	var count = 0;

	for(var i=1; i<=n; i++){ 	// 1~n 사이에 있는 수를 검증
		if( i > 1 ) {						// 1은 소수가 아니므로 검증에서 제외
			//console.log("i: "+i);
			for( var j=i; 1<=j; j--) {
				//console.log(" j: "+j);
				if(i%j === 0) {			// 나누어 떨어지는 경우
					//console.log("* j: "+j);
					count++;   				// 소수는 1과 자기자신으로 나누어 떨어지므로 나누어 떨어지는 경우의 수가 2인 i를 구하기 위해 count
				}
		  }
		  //console.log("  >>"+count);
		  count === 2 ? result++ : result;	//count가 2면 소수이므로 result를 증가
		  count = 0;												// count 초기화
		}
	}
	return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numberOfPrime(10) )

//---------------------------------------------------------------------

/**
* level2: 가장 긴 팰린드롬
* 팰린드롬? 앞 뒤를 뒤집어도 똑같은 문자열
* ex) 토마토맛토마토
*/
function longest_palindrom(s){
  var result = 0;
  var str = "";
  var sLength = s.length;		//입력받은 문자열 길이
  var arr = new Array;			//배열
  var rArr = new Array;			//역배열

  console.log("sLength:\t"+sLength);

  arr = s.split("");						//한글자씩 잘라 배열로 만듦
  rArr = s.split("").reverse(); //한글자씩 잘라 역배열로 만듦
  console.log("==arr==");
  console.log(arr);
  console.log("==rArr==");
  console.log(rArr);

  /* 배열과 역배열 한글자씩 비교 */
  for(var i=0; i<arr.length; i++) {
   for(var j=0; j<rArr.length; j++) {

    // 아래의 if문 과정을 반복해주면 될거 같은데 모르겠다;;;;;
   	if(arr[i] === rArr[j]) {
      str += arr[i];
       if(arr[i+1] === rArr[j+1]){
       	 str += arr[i+1];
         console.log("if문 안"+str);
       } else {
         str = ""; //str초기화
       }
    }else {
      str = ""; //str초기화
    }

   	}
   }

  // for(var i=0; i<arr.length; i++) {
  //      //console.log(""+arr[i]);
  //  for(var j=0; j<rArr.length; j++) {
  //    //console.log(""+rArr[j]);
  //  	if(arr[i] !== rArr[j]) {
  //   	      str = ""; //str초기화
  //   }else {
  //     str+=arr[i];
  //   }
  //    console.log("str: "+str);
  //  }
  // }

  /* 팰린드롬 여부 */
//   if( sLength > 1 ){
//     for(i=0; i<(sLength/2); i++){
//         console.log("First i: "+i);
//         console.log("Last i: "+ ((sLength-1) - i)  );

//         if( s.charAt(i) != s.charAt( (sLength-1) - i ) ){
//             return false;
//         }
//     }

//     return true;
//   }


    /* 팰린드롬 여부
     * 배열과 역배열의 비교 순서 동일 */
//   for(var k=0; k < sLength; k++){
//     if(arr[k] !== rArr[k]) {
//     	str = ""; //str초기화
//     }else {
//       str+=arr[k];
//     }

//   }

  console.log("str: "+str);
  return str.length;
}

console.log( longest_palindrom("토마토맛토마토") )
console.log( longest_palindrom("토마토맛있어") );
console.log( longest_palindrom("하늘아아늘하") )
