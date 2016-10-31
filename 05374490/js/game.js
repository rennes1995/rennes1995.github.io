var start = document.querySelector('.start'); //会返回当前文档中第一个类名为 "start" 的元素
    var startBtn = document.querySelector('.startBtn');//会返回当前文档中第一个类名为 "startBtn" 的元素
    startBtn.onclick = function() {
        start.style.display = 'none';    //按下star隐藏star
    }
    var body_ = document.querySelector('.box');//会返回当前文档中第一个类名为 "box" 的元素
    var wrap = document.createElement('div');
    wrap.className = 'wrap';
    body_.appendChild(wrap);
    var center = document.createElement('div');
    center.className = 'center';    //中心不动的大球
    body_.appendChild(center);          //appendChild在尾部添加
  
    var x = 6;
    var arr = [];
    function made(){
    for (var i = 0; i < x; i++) {
        var line = document.createElement('div');
        line.className = 'line';
        line.setAttribute('id', 'init-line' + (i + 1) + '');//添加一个新属性（attribute）到元素上，或改变元素上已经存在的属性的值。
        line.style.transform = 'rotate(' + i * (360 / x) + 'deg)';//每72°放一个针
        arr.push(i * 360 / x);
        console.log(arr);                  //输出数据
        var ball = document.createElement('div');
        ball.className = 'ball';
        line.appendChild(ball);
        wrap.appendChild(line);
    }
}
    var timer = null;                          //旋转
    var z = 0;
    timer = setInterval(function() {         //周期性地调用一个函数(function)或者执行一段代码。
        z++;
        wrap.style.transform = 'rotate(' + z + 'deg)';
        wrap.style.transformOrigin = '50% 50%';
        if (z >= 360) {
            z = 0;
        } else {
            z++;
        }
    }, 20)

    body_.onclick = function() {                                        //游戏主体
        var newline = document.createElement('div');
        newline.className = 'newline';
        newline.style.width = '2px';
        newline.style.height = '124px';
        newline.style.background = 'black';
        newline.style.position = 'absolute';
        newline.style.left = '199px';
        newline.style.top = '76px';
        newline.style.transformOrigin = '50% 100%';
        var newZ = 180 - z;
        if (newZ <= 0) {
            arr.push(newZ + 360)
        } else {
            arr.push(newZ);
        }
        newline.style.transform = 'rotate(' + newZ + 'deg)';
        var newball = document.createElement('div');
        newball.className = 'newball';
        newline.appendChild(newball);
        wrap.appendChild(newline);
        for (var i = 0; i < arr.length - 1; i++) {
            if (Math.abs(arr[i] - arr[arr.length - 1]) <= 10) {
                clearInterval(timer);//          取消用setInterval设置的重复定时任务。
                gameover();
            }
        }
        var mm=0;
        var nums=document.querySelectorAll('.num');
        body_.removeChild(nums[mm]);
        console.log(nums.length);
        if (nums.length==1) {
          next();
        }
    }
    var c = 20;
    for (var i = 0; i < c; i++) {
        var num = document.createElement('div');  //createElement（）方法使用指定的名称创建一个元素节点在创建元素后，使用 元素 .appendChild（）方法将其插入到文档中。
        num.className = 'num';
        num.innerHTML =c-i;   //点击更改为球数字
        body_.appendChild(num);
    }
    var niu=document.querySelector('.niu');
    function next(){
      clearInterval(timer);
      niu.style.display='block';
    }
      made();
    var over=document.querySelector('.over');
    function gameover(){
        over.style.display='block';
    }