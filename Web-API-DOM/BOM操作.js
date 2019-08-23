//BOM:broser object model 浏览器 对象 模型
//navigater-浏览器，screen-屏幕
var bros=navigator.userAgent//userAgent是一个字符串，分析字符串内容判断浏览器
var isbros=bros.indexOf('Chrome')
console.log(navigator.userAgent)
console.log(isbros)

console.log(screen.height)
console.log(screen.width)
//location(分析url)和history
console.log(location.href)
console.log(location.protocol)//协议http https
console.log(location.hostname)//域名
console.log(location.pathname)//路径
console.log(location.hash)

history.back()
history.forward()
history.go()

//1 如何检测浏览器的类型
var bros=navigator.userAgent//userAgent是一个字符串，判分析字符串内容判断浏览器
var isbros=bros.indexOf('Chrome')
console.log(isbros)
//2 拆解url的各部分
console.log(location.href)//地址可以使用location.href=""更改//https://coding.m.imooc.com/classindex.html?cid=99&a=b#mid=100
console.log(location.protocol)//协议(http: https:)//"https:"
console.log(location.hostname)//域名//coding.m.imooc.com
console.log(location.pathname)//路径///classindex.html
console.log(location.search)//？后面的相当于给页面的参数//?cid=99&a=b
console.log(location.hash)//存储//#mid=100
