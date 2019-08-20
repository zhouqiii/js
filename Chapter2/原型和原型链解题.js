<html>
    <body>
        1 如何判断一个变量是数组类型
            ：用instanceof(typeof无法判断引用类型)
            //var arr=[];
            arr instanceof Array;//true是数组类型false不是数组类型
        2 描述new一个对象的过程（就是说创建构造函数的过程）
            ：首先创建一个新对象，然后用this指向这个对象，在执行代码即给this赋值，最后返回this
        3 写一个原型链继承的实例
            function Elem(id) {
                this.elem=document.getElementById(id)
            }
            Elem.prototype.html=function(val){
                var elem=this.elem
                if(val){
                    elem.innerHTML=val
                    return this//链式操作所以 div1.html('<p>hello js</p>')可以直接.on即div1.html('<p>hello js</p>').on('click',function(){alert('hello js')})
                }else{
                    return elem.innerHTML
                }
            }
            Elem.prototype.on=function(type,fn){
                var elem=this.elem
                elem.addEventListener(type,fn)
                return this//所以on('click',function(){alert('hello js')})后面可以继续点.html()
            }
            var div1=new Elem('main')
            //console.log(div1.html())
            div1.html('<p>hello js</p>').on('click',function(){
                alert('hello js')
            }).html("<p>i'll get over</p>")
        (4 zepto源码解读，分析zepto是怎样实现原型链的） 
    </body>
</html>