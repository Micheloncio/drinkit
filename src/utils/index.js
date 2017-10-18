function cloneArray(arr)
{
	console.log('array recibida:'+arr)
	if (!(arr instanceof Array)){
		console.log('devuelvo 0')
		return 0;
	}

	var arrClone = arr.map(function(element){ 
		if (element instanceof Array){
			console.log('array dentro de array');
			cloneArray(element);
			}

		console.log('devuelvo elemento:'+element)
		return element;
		});
	console.log('devuelvo array clonada:'+arrClone)
	return arrClone;
}

export { cloneArray }