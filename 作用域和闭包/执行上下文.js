
//全局
    console.log(a)//undefined
    var a=100 

    var a=100
    console.log(a)//100

    a=100
    console.log(a)//100
    var a
//函数
    fn('ming')//ming 20 66
    function  fn(name) {
        //console.log(this)
        //console.log(arguments)
        age=20
        console.log(name,age)
        var age 
        
        bar(66)
        function bar(num){
            console.log(num)
        }
    }
//执行上下文：<script></script>标签或者函数会形成一个执行上下文，在script执行上下文里，首先会进行变量定义和函数声明，然后这里的函数在执行之前也会先进行变量定义和函数声明，以及this、arguments声明
//函数声明和函数表达式的区别：fn('zhangsan')//zhangsan-函数声明
        function fn(name){
            console.log(name)
        }
        fn('zhangsan')//会报错-函数表达式
        var fn1=function(name){//fn1只是一个变量，是变量的用法
            console.log(name)
        }