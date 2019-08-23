//DOM结构操作
//新增节点
var div1=document.getElementById('div1')
var p1=document.createElement('p')//创建新节点
//var p2=document.getElementById('p2')//移动已有节点
p1.innerHTML='this is new pnew'
div1.appendChild(p1)
div1.appendChild(p2)
//删除节点-removeChild
var div=document.getElementById('div1')
var parent=div.parentElement
var child=div.childNodes
var childf=div.childNodes[0]
div.removeChild(childf)
//获取父元素和子元素
var p=document.getElementById('p1')
var parent=p.parentElement
console.log(parent)
var child=div.childNodes
var childf=div.childNodes[0]
