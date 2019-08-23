//日期
console.log(Date.now())//当前毫秒数
var date=new Date()
console.log(date)//Thu Aug 22 2019 10:43:57(自动转成toString字符串格式)

console.log(date.getSeconds())//当前秒数
console.log(date.getMinutes())//当前分钟
console.log(date.getHours())//当前小时

console.log(date.getDate())//当前是哪一日
console.log((date.getMonth()+1))//当前月
console.log(date.getFullYear())//对当前哪一年

console.log(date.getTime())//当前毫秒数

//Math.random()生成0-1之间的随机数
Math.random().toFixed(2)//生成随机的两位小数

//数组api
//forEach
var arr=['a','b','c']
arr.forEach(function(item,index){//第一个参数是值，第二个参数是下标
    console.log(item,index)
})
//every
var arr1=[1,2,3]
var result=arr1.every(function(item,index){
    if(item<4){
        return true
    }
})
console.log(result)//true
var arr1=[1,2,3]
var result=arr1.every(function(item,index){
    if(item<3){
        return true
    }
})
console.log(result)//false
//some至少有一个满足规则
var arr1=[1,2,3]
var result=arr1.some(function(item,index){
    if(item<3){
        return true
    }
})
console.log(result)//true
var arr1=[1,2,3]
var result=arr1.some(function(item,index){
    if(item<1){
        return true
    }
})
console.log(result)//false
//sort
var arr2=[1,3,4,2,5,0]
var arra=arr2.sort(function(a,b){
    return a-b//[0, 1, 2, 3, 4, 5]从小到大 b-a从大到小
})
console.log(arra)
//map将数组按新的规则重新组装
var arr3=[1,2,3,4]
var arrb=arr3.map(function(item,index){
    return item+'<br />'
})
console.log(arrb)//["1<br />", "2<br />", "3<br />", "4<br />"]
//filter过滤
var arr1=[1,2,3]
var results=arr1.filter(function(item,index){
    if(item<3){
        return true
    }
})
console.log(results)//[1,2]

//对象api
var obj={
    x:1,
    y:'a',
    z:{
        name:'ming',
        interests:['book','ball']
    }
}
for(var key in obj){
    if(obj.hasOwnProperty(key)){//hasOwnProperty是指对象的原生属性，而不是从原型获取的
        console.log(key,obj[key])
    }
}