/*
	#1 level 1 : 평균구하기	
*/

function average(array){ 
  //함수를 완성하세요
  //for문을 이용하여 array를 더해준 다음 array.length로 나누어 줬다.
	var sum = 0;
	  for(var i=0; i<array.length; i++){
	  	sum += array[i]
	  }
	  return sum/array.length;
	}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));

//---------------------------------------------------------------------


/*
	#2 level 1 : 최대값과 최소값
*/

public class GetMinMaxString {
    public String getMinMaxString(String str) {
        int max = 0; int min = Integer.MAX_VALUE; //최대값과 최소값을 나타낼 변수의 초기값
      	String a[] = str.split(" "); //str 배열을 공백을 기준으로 나눔
      
      // string 배열을 int형으로
      int [] b = new int[a .length];
      
      // 배열을 하나하나 풀어서 값 저장
      for(int i = 0;i<a .length;i++)
        b[i] = Integer.parseInt(a [i]);
      
      //max와 min에 값 입력
      for(int i = 0; i<b.length; i++)
      {
        if(b[i] > max)
          max = b[i];
        if(b[i] < min)
          min = b[i];
      }
      
      //max와 min 값 반환
      return min + " " + max;
    }

    public static void main(String[] args) {
        String str = "1 2 3 4";
        GetMinMaxString minMax = new GetMinMaxString();
        //아래는 테스트로 출력해 보기 위한 코드입니다.
        System.out.println("최대값과 최소값은?" + minMax.getMinMaxString(str));
    }
}

//---------------------------------------------------------------------


/*
	#3 level 1 : 짝수와 홀수	
*/

function evenOrOdd(num) {
	// if, else문을 이용하여 2로 나눈 나머지가 0일 경우 'Even'아닐경우 'Odds'를 리턴하도록 함.
  if(num % 2 == 0)
    return "Even";
  else
    return "Odd";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));


//---------------------------------------------------------------------


/*
	#4 level 1 : 핸드폰 번호 가리기	
*/

// 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 '*'로 바꿔야한다.

function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
  var hide_num = s.length - 4;
  var result = s.substr(hide_num);
  for(var i = 0; i < hide_num; i++){
  	result = '*' + result;
  }
  
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));


//---------------------------------------------------------------------


/*

 #5 level 1 : 수박수박수박수박수?

*/

function waterMelon(n){
  var result = ""
  //함수를 완성하세요
  var i=0;
  for(i=0;i<n;i++){
    if(i%2==0){
      result+="수"; 
    }else{
     result+="박"; 
    }
   
  }

  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
