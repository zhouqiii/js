//异步与同步：
    console.log(1)
    setTimeout(function(){//异步 setTimeOut后执行，但不阻碍程序运行
        console.log(a)
    },1000)
    console.log(2)

    console.log(1)
    alert('name')//同步 当alert出现，必须点击确定或取消alert执行完才会打印2，否则alert一直阻碍打印2
    console.log(2)
//前端异步的场景出现在：
//1 定时任务 setTimeOut setInterval
    console.log(1)
    setTimeout(function(){
        console.log(a)
    },1000)
    console.log(2)
//2 网络请求-ajax请求和动态<img>加载
    console.log(1)
    $.get('/api/data.json',function(data){//ajax异步
        console.log(data)
    })
    console.log(2)

    console.log(1)
    var img=document.createElement('img')
    img.onload=function(){//onload加载src等待异步
        console.log('loaded')
    }
    img.src='https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/29b76b0d77afa23594454d7353d46c67.jpg_890x330_be767ae4.jpg'
    console.log(2)
//3 事件绑定 
    console.log(1)
    var btn=document.createElement('button')
    btn.id='btnid'
    document.getElementById('btnid').addEventListener('click',function(){//事件绑定异步
        console.log(a)
    })
    console.log(2)

//