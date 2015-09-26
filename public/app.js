function add_to_cart(id){
	var count = window.localStorage.getItem('product_'+id);
	window.localStorage.setItem('product_'+id,count*1+1);
}
function cart_get_number_of_items()
{
    var cnt = 0;
    for(var i=0;i < window.localStorage.length;i++)
    {
        var key = window.localStorage.key(i);
        if (key.indexOf('product_') == 0){
            var value = window.localStorage.getItem(key);
            cnt+=value*1 +1;
        }
    }

    return cnt;
}