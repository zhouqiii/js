<!DOCTYPE html>
<html>
    <body>
        typeof(6):值类型：string boolean undefined number引用类型：object（[],{},null） function
        
        js变量按照存储方式分为值类型和引用类型

        var a={age:20};
        var b=a;
        b.age=21;
        console.log（a.age）//21-是变量的引用类型a，b指针都指向{age：20}

        == 慎用，会进行强制类型转换 ===是严格意义上的相等
        除了一种情况：(obj.a===null||obj.a===undefined)简写成(obj.a==null)其他的所有情况全写成===

        js的内置函数：Object String Boolean Number Array Function Date RegExp Error

        json是一种数据格式，但在js中只是js的一个对象而已，有两个api，JSON.parse('{a:21,b:'name'}')把字符串转成对象JSON.stringify({a:21,b:'name'})把对象转成字符串
    </body>
</html>