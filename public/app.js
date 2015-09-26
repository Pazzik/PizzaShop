function add_to_cart(id){
	var count = window.localStorage.getItem('product_'+id);
	window.localStorage.setItem('product_'+id,count*1+1);
    update_orders_input();
    update_orders_button();
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
function update_orders_input(){
    var orders = cart_get_orders();
    $('#orders_input').val(orders);
}

function update_orders_button(){
    var text = 'Cart(' + cart_get_number_of_items()+')';
    $('#orders_button').val(text);
}

function cart_get_orders()
{
    var orders = '';
    for(var i=0;i < window.localStorage.length;i++)
    {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        if (key.indexOf('product_') == 0){
            orders+=key+'='+value+',';
        }
    }
    return orders;
}