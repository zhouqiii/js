
//构造函数 一般函数名大写 可以new 很多对象

//构造函数扩展：var a={};(就是var a=new Object()) var Foo(){}(就是var Foo=new Function(){})
//instanceof判断一个引用类型是哪一种构造函数的方法，判断一个变量是否是数组： (设变量为test) 
test instanceof Array
//或者下例的 f instanceof Foo//true
//原型规则：1 所有的引用类型（对象，数组，函数）都可以自由的扩展属性2 所有的引用类型都有__proto__(叫做隐式原型)属性，且属性值是一个普通的对象3 所有的函数，都有一个显示原型属性prototype，属性值是一个普通的对象 
           // 4 所有的引用类型的隐式原型对应它构造函数的显示原型 var obj={};console.log(obj.__proto__===Object.prototype)
           // 5 当试图得到一个引用类型的属性而这个引用类型的变量没有定义该属性，那么回去变量的隐式原型(__proto__)(即它的显示原型prototype)里去找
            var Foo=function(firstname,age) {
                this.firstname=firstname;
            }
            Foo.prototype.alertname=function(){
                alert(this.firstname)
            }
            var f=new Foo('zhnagsan');
            f.seftprint=function(){
                console.log('this.firstname')
            }
            f.selfprint();//zhnagsan
            f.alertname();//弹出zhnagsan
            //循环对象自身的属性：
                var item;
                for(item in f){
                    if(f.hasOwnProperty(item)){//现在的浏览器是默认就会屏蔽掉f的__proto__属性的，但是保证准确性的话还是加上判断
                        console.log(item)
                    }
                }
//原型链：f到f.__proto__(Foo.prototype)到f.__proto__.__proto__(Object.prototype,因为Foo.prototype是一个Object,这里的Object就是Foo.prototype的Object函数)