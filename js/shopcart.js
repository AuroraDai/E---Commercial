$('.check').change(function () {
    getProdTotal();

})

$('.add').click(function () {
    //First declare a variable, make the value ++, and then assign it to the input
    //get the input value now
    let product_Number = $(this).siblings('.productNum').val();
    product_Number++;
    //give the new product_number to input
    $(this).siblings('.productNum').val(product_Number);

    //get single product price
    let single_product_price = $(this).parent().parents().siblings().children('.product-item-price').text().substr(1);
    //calc the total price
    let item_total_price = (product_Number * single_product_price).toFixed(2);
    //sign tht total price to the total price innerHTML
    $(this).parent().parents().siblings().children('.product-item-total-price').text('$' + item_total_price);

    getProdTotal();

})

$('.minus').click(function () {
    //取得 当前文本框里的值
    let product_Number = $(this).siblings('.productNum').val();
    //当文本框的数字等于1 的时候文本框不再改变,不再进行减法操作
    if (product_Number == 1) {
        return false;
    }
    product_Number--;
    //减去之后的值赋值给文本框
    $(this).siblings('.productNum').val(product_Number);

    let single_product_price = $(this).parent().parents().siblings().children('.product-item-price').text().substr(1);
    let total = (product_Number * single_product_price).toFixed(2);
    $(this).parent().parents().siblings().children('.product-item-total-price').text('$' + total);

    getProdTotal();
})


 getProdTotal();
 function getProdTotal() {
     var total_cost = 0;
     $('.product-item-total-price').each(function (index, domEle) {
         if ($('.check').eq(index).prop('checked')) {
             total_cost += parseFloat($(domEle).text().substr(1));
         }
         $('#subtotal').text((total_cost).toFixed(2));
     })

     getCheckoutTotal();

 }

function getCheckoutTotal(){
    let tax = parseFloat($('#subtotal').text() * 0.056).toFixed(2);
    $('#tax').text(tax);
   

    let allTotal = parseFloat(($('#subtotal').text() * 0.056) + ( parseFloat($('#shipping-fee').text())) + (parseFloat($('#subtotal').text())) ).toFixed(2);
    $('#estimated-total').text((allTotal));

}


//删除当前商品
$('.remove-item').click(function () {
    $(this).parents('li').remove()
    getProdTotal();
    no_check();

})
no_check();
function no_check() {
    var total_cost = 0;
    if ($('.check:checked').length === 0) {
        $('#estimated-total').text('0.00');
        $('#subtotal').text('0.00')
    }
}


