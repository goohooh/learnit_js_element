var learnit = 'Study hard';

function fn1(){
	var learnit = 'Coding everyday';
	alert(learnit);
	window.learnit = learnit;
}

function fn2(){
	alert(learnit);
}

function fn3(learnit){
	alert(learnit);
}

function fn4(learnit){
	inner();

	var learnit = 'Keep going';
	function inner(){
		alert(learnit);
	}

	inner();
}

// fn1(), fn2(), fn3(), fn4('Remember me')
// 순서대로 실행할 경우 결과 작성