export function localStor(method, key, val) { 
	switch(method) {
		case 'set':
			{
				window.localStorage.setItem(key, val);
				break
			}
		case 'get':
			{
				let tmep = window.localStorage.getItem(key);
				if(tmep) {
					return tmep
				} else {
					return false
				}
			}
		case 'remove':
			{
				window.localStorage.removeItem(key);
				break
			}
		default:
			{
				return false;
			}
	}

}
