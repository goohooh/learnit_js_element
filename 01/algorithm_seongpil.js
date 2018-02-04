/*
 * level 1 : 서울에서 김서방 찾기
 */
function findKim(seoul){
  var idx = 0;
  
  // ToDo : 배열을 순회하면서 'Kim' 찾기

  // 배열을 뒤져봐야 하니 for문을 쓰면 어떨까?
  // 배열의 length 속성을 이용해보자
  for(var i = 0; i < seoul.length; i++){
  	// 먼저 순회하는 배열 요소를 저장해서
  	var person = seoul[i];

  	// 만약 그사람이 Kim이라면?
  	if(person === 'Kim'){
  		// 찾았다!!
  		idx = i;
  	}
  	// Kim이 아니라면 다음 for문으로...
  }

  return "김서방은 " + idx + "에 있다";
}

/*
 * level 2 : 행렬의 곱셈
 */
function productMatrix(A, B) {
	var answer = Array();

	// Some Code...

	return answer;
}