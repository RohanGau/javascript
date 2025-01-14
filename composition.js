function pipe(funcs) {
	return function(value) {
		const result = funcs.reduce((acc, curr) => {
			acc = curr(acc);
			return acc;
		}, value);
		return result;
	}

	
	return function(...args) {
		if(funcs.length === 0) return 1;
		let result;
		for(let i = 0; i < funcs.length; i++) {
			const steps = funcs[i];
			if(!result) {
				result = funcs[i].apply(this, args);
			} else {
				result = funcs[i](result);
			}
		}
		return result;
	}	
}

