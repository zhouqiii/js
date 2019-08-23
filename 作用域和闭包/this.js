
//this在定义时不会确认值，只有在执行时才会确认值
//this执行场景： 
    //1 作为构造函数执行
        function Foo(name) {
            this.name=name//this指Foo()
        }
        var f=Foo('zhangsan')
    //2 作为对象属性执行
        var obj={
            name: 'A',
            fn:function(){
                console.log(this.name)//作为obj对象的属性执行
            }
        }
        obj.fn()
    //3 作为普通函数执行
        function narmal(){
            console.log(this)//this===window
        }
        normal()
    //4 call apply bind
        function callfn(name){
            alert(name)
            console.log(this)//this就是{x:10}
        }
        callfn.call({x:10},'zhangsan')//{x:10}后面的是narmal的参数

        var normal=function(name,age){
            alert(name)
            console.log(this)//this就是{y:20}
        }.bind({y:20})
        normal('zhangsan',20)
