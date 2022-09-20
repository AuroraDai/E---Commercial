function animation(obj, target, msec, callback) {
    //let only one timer is processing
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //The calculation of the step should be written into the timer
        //formula :(target value - current position) / 10 (as the distance of each move)
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //callback function need to write into interval
            if (callback) {
                callback()
            }
            //if callback another way to apporach 
            // callback && callback(); 
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, msec);
}
