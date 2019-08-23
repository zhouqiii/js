//1 获取固定格式的日期 如2019-08-22
var formatDate=function (date) {
    if(!date){
        var date=new Date()
    }
    var year=date.getFullYear()
    var month=date.getMonth()
    var day=date.getDate()
    if(month<10){
        month='0'+month
    }
    if(day<10){
        day='0'+day
    }
    return year+'-'+month+'-'+day
}
var date=new Date()
var formatdate=formatDate(date)
console.log(formatdate)
//2 获取随机数，要求是长度一致的字符串格式
var random=Math.random()
var random=random+'0000000000'
console.log(random.slice(0,10))//截取前十位
//3 写一个能遍历对象和数组的通用forEach函数
function foreach(obj,fn){
    if(obj instanceof Array){
        obj.forEach(function(item,index){
            fn(index,item)
        })
    }else{
        for(var key in obj){
            fn(key,obj[key])
        }
    }
}
var arr=[1,2,3]
foreach(arr,function(index,value){
    console.log(index,value)//0 1,1 2,2 3
})
var object={
    x:1,
    y:'a'
}
foreach(object,function(index,value){
    console.log(index,value)//x 1,y a
})

