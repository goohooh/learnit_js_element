function toArray(arrayLike){
	return Array.prototype.slice.call(arrayLike);
}

function isType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

function throwError(type1, type2, err_msg) {
    err_msg = err_msg || '기본 오류 메시지';
    if (isType(type1) !== type2) {
      throw new Error(err_msg); }
}
