function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if( get_param("prod") != "0" ){
	window.location.href = 'https://besthappyshop-ko.blogspot.com/?prod='+get_param("prod");

}
