function add_to_cart(id){
	var count = window.localStorage.getItem('product_'+id);
	window.localStorage.setItem('product_'+id,count*1+1);
}