function animation(obj, target, msec, callback) {
    //let only one timer is processing
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //计算缓速的步长值应该写到定时器的里面
        //缓速公式：（目标值-现在的位置）/ 10 作为每次移动的距离
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if (callback) {
                //调用函数
                callback()
            }
            //if callback 的另一种写法 ：利用短路
            // callback && callback(); 
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, msec);
}