//XMLHttpRequest
var xhr=new XMLHttpRequest()//XMLHttpRequest对象用于在后台与服务器交换数据
xhr.open("GET","/api",false)//false是指发送请求是异步的
xhr.onreadystatechange=function(){//每次readyState改变就会触发onreadystatechange事件，该事件规定服务器响应就绪后执行的任务
    if(xhr.readyState==4){//状态码readyState：0-请求未初始化,就是还没有调用send()方法 1-已调用send(),正在请求服务器建立连接 2-send()执行完，请求接收 3-请求正处理，解析响应 4-请求完成，响应就绪可在客户端调用
        if(xhr.status==200){//status：200-ok成功处理请求 404-未找到页面未能成功处理请求 4xx-客户端请求错误 5xx-服务器端错误
            alert(xhr.responseText)//responseText：服务器返回内容
        }
    }
}
xhr.send(null)


//跨域：浏览器有同源策略，不允许ajax访问其他域接口
    //跨域的条件：协议/域名/端口有一个不同就算跨域
//可以跨域的标签：三个标签允许跨域加载资源 <img src=xxx>:用于打点统计，统计网站可能是其他域
                                    // <link href=xxx>(css) <script src=xxx> 可以使用CDN，
                                    //<script>可以用于JSONP

//跨域解决方法：
//JSONP实现原理
    //加载如http://coding.m.imooc.com/class.html
    //不一定服务器端真正有一个class.html文件
    //imooc服务器可以根据请求，动态拼接生成一个文件，返回请求需要的数据，反悔内容的格式如callback({x:20,y:306})
    //同理于<script src=xxx.js> 服务器可以动态拼接一个该js文件返回
    <script>
        window.callback=function(data){//用callback回调方法拿到数据
            console.log(data)
        }
    </script>
    <script src="https://coding.m.imooc.com/api.js"></script>//返回callback({x:20,y:306})
//方法二：服务器端设置http header
response.setHeader('Access-Control-Allow-Origin',"http://a.com,http://b.com")//第二个参数是允许跨域的域名称
response.setHeader('Access-Control-Allow-Methods',"PUT,POST,OPTIONS")