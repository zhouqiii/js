<html>
    <body>
    作用域：js没有块级作用域，只有函数和全局作用域
        //块级作用域
            if(true){
                var name='zhangsan'
            }
            console.log(name)//zhangsan,如果像es6有let作用域的话，在{}外name=undefined
        //函数和全局作用域
            var a=200;
            function allfn() {
                var a=100
                console.log('函数作用域',a)//100
            }
            console.log('全局作用域',a)//200
            allfn()

            var a=200
            function allfn() {
                var b=100
                console.log('函数作用域',a,b)//200 100也就是说函数作用域变量中的自由变量可以引用全局变量，全局变量只能去全局定义
            }
            console.log('全局作用域',a,b)//b未被定义
            allfn()
    作用域链-子级作用域能得到父级作用域的变量值，父级变量只能在父级或父级的父级才能找到，也就是低得到高，高得不到低
            var a=100;
            function F1(){
                var b=200;
                function F2(){
                    var c=300
                    var a=400
                    var b=500
                    console.log(c)
                    console.log(a)
                    console.log(b)
                }
                //console.log(c)//c报错，找不到值
                F2()
            }
            //console.log(c)同样c报错，只能定义在全局才能得到值
            F1()//300 400 500
    闭包：
            function Foo(){
                var a=100
                return function foo(){
                    console.log(a)
                }
            }
            var fn=Foo()
            var a=200
            fn()//100 fn()变量取定义时的值，虽然在全局作用域下执行，但定义是在函数作用域
    闭包的使用场景：
        1 函数作为返回值(上式)
        2 函数作为参数传递
            function F1(){
                var a=100
                return function(){
                    console.log(a)
                }
            }
            var fn=F1()
            function F2(ff){
                var a=200
                ff()
            }
            F2(fn)//100
    </body>
</html>