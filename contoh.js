function random_item(items)
function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if( get_param("prod") != "0" )
if( get_param("lang") != "0" ){
	var items = [_ADW5LS,_9HQUTq,_9I9uCu,_9gKhxi,_As98Rq];
	var b = ['aff_short_key', 'aliexpress', 'deep', 'link'];
	var c = ['.aliexpress'];
	var mykey 	= a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6];
	// console.log('https://s.click.'+b[1]+'.com/'+b[2]+'_'+b[3]+'.htm?'+b[0]+'='+mykey+'&dl_target_url=https://'+get_param("lang")+c[0]+'.com/item/'+get_param("prod")+'.html');
	window.location.href = 'https://s.click.'+b[1]+'.com/'+b[2]+'_'+b[3]+'.htm?'+b[0]+'='+random_item(items)+'&dl_target_url=https://'+get_param("lang")+c[0]+'.com/item/'+get_param("prod")+'.html';
}
