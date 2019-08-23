
//1 说一下对变量提升的理解
    //：就是执行上下文，在<script></script>标签和函数场景中定义执行上下文，script会先定义变量和函数声明，函数里也会先定义变量和进行函数声明，然后声明this和arguments
//2 说明this几种不同的使用场景
    //作为构造函数执行
    //作为对象属性执行
    //作为普通对象执行
    //call bind apply 
//3 创建10个<a></a>标签，点击的时候弹出来对应的序号
// ：作用域问题
//错误的写法
    var a,i
    for(i=0;i<10;i++){
        a=document.createElement('a')
        a.innerHTML=i+'<br />'
        a.addEventListener('click',function(e) {
            e.preventDefault()
            alert(i)//i是自由变量，去父级获得值，父级的i是var i全局作用域，最后是10，所以每次点击都会弹出10
        })
        document.body.appendChild(a)
    }
//正确的写法-作用域包起来传递及时的i参数
    var i
    for(i=0;i<10;i++){
        (function(i){
            a=document.createElement('a')
            a.innerHTML=i+'<br />'
            a.addEventListener('click',function(e) {
                e.preventDefault()
                alert(i)
            })
            document.body.appendChild(a) 
        })(i)//在这里就把for里每一次的i作为参数即使的传给function(i)
    }
//4 如何理解作用域
   // ：函数作用域和全局作用域 自由变量 作用域链，就是自由变量的查找 闭包的两个场景
//5 实际开发中闭包的作用
    //主要用于封装变量，收敛权限
    function Fn(){
        var list=[]
        return function(id){
                if(list.indexOf(id)>=0){
                    return false
                }else{
                    list.push(id)
                    return true
                }
        }
    }
    var fn=Fn()
    fn(10)//true
    fn(10)//false
    fn(20)//true