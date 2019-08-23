
//1 DOM节点操作-获取DOM节点/prototype/Attribute
//获取DOM节点
var div1=document.getElementById('div1')//元素
var divList=document.getElementsByTagName('div')//div集合
console.log(divList.length)
console.log(divList[0])
var anyclass=document.getElementsByClassName('.container')//集合
var pList=document.querySelectorAll('p')//集合 与getElementsByTagName相比，getElementsByTagName('div')是动态的实时的，比如添加新的div节点，length会加1，而querySelectAll是静态的
//prototype-js对象的标准属性
var pList=document.querySelectorAll('p')//集合  pList也是js的对象 所以属性就是可扩展的
var p1=pList[0]
console.log(p1.style.width)//获取样式
p1.style.width='100px'//修改样式
console.log(p1.className)//获取class
p1.className="namep1"//修改class
console.log(p1.nodeName)//p1
console.log(p1.nodeType)
//Attribute-是html文档中的标签属性，而不是js对象的属性；像下面的img的Attribute就是src data-name；a的Attribute是href
//<img src="img.png" data-name="name" />
//<a href="xxx.html"></a>
var pList=document.querySelectorAll('p')//集合
var p1=pList[0]
p1.getAttribute('style')
p1.setAttribute('style','width:100px;')
p1.getAttribute('data-name')//获取p1下一个data-name的属性
p1.setAttribute('data-name','p1name')//修改该属性