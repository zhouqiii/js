//因为js的单线程机制，所以会出现异步
    console.log(1)
    setTimeout(function(){
        console.log(a)
    },1000)
    console.log(2)
    //执行第一行，打印出1；执行下一步，setTimeOut是异步需要时间，把它暂存；执行下一步打印出2；这个时候全部执行完，程序处于空闲，然后开始将暂存的程序按时间设定执行完成，这就是单线程
//题1：同步与异步的区别是什么 分别举一个例子
//：同步会阻碍代码的执行，异步是等待，但不会阻碍代码执行
    console.log(1)
    setTimeout(function(){//异步
        console.log(a)
    },1000)
    console.log(2)

    console.log(1)
    alert('name')//同步 
    console.log(2)
//题2：关于setTimeOut的笔试题
    console.log(1)
    setTimeout(function(){
        console.log('a')
    },0)
    console.log(2)
    setTimeout(function(){
        console.log('b')
    },1000)
    console.log(3)//1 2 3 a b 