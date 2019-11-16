//找对象
var lists = document.getElementsByName('list');
var list1s = document.getElementsByName('list1');
var m=0;
var timmer;
var n=150;
//改属性
//左右点击效果
function left(bool){
    clearInterval(timmer);
    switch(bool){
        case '-':
            m=m-2;
            if(m<-1){
                m=list.length-2;
            }
            break;
            case '+':
                //自动显示
                break;
    }
    go();
    timmer = setInterval(go,4000);
}
//写一个函数来显示图片
function show(m){
    for(i=0;i<lists.length;i++){
        if(m == i){
            lists[i].style.display='block';
          
        }else{
            lists[i].style.display='none';
        }
    }
}
//调用函数
function go(){
    m++;
    if(m >= lists.length){
        m = 0;
    }
    show(m);
}
//使用定时器让函数动起来
timmer = setInterval(go,3000);
