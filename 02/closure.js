function doSomething(){
	var a = 0;
	return function(){
		alert(++a);
	}
}

// a값을 3까지 증가시키려면?