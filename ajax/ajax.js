const ajax = (function(){
	function send (settings){
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('error',function(ev){
			settings.error({
				errorText : xhr.responseText,
				code: xhr.status
			})
		})
		xhr.addEventListener('load',function(ev){
			settings.success(xhr.responseText);
		})
		xhr.addEventListener('timeout', function(ev){

		})
		xhr.open(settings.method, settings.url);
		xhr.timeout = settings.timeout || 3000;
		xhr.send(settings.data);
	}
	return {
		send: send
	}
})();