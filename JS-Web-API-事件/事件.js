//通用事件绑定
function bindEvent(elem,type,fn){
    elem.addEventListener(type,fn)
}
var a=document.getElementById('a1')
bindEvent(a,'click',function(e){
    e.preventDefault()//阻止默认行为，即阻止其他绑定，比如a一般绑定跳转，这里像点击触发alert，就会把跳转阻止
    alert('click')
})


//冒泡事件：也就是子向父级冒
<body>
    <div id="div1">
        <p id="p1">确定</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
        <p id="p7">取消</p>
    </div>
</body>
    //点击确定弹出确定，点击取消，弹出取消
    function bindEvent(elem,type,fn){
        elem.addEventListener(type,fn)
    }
    var p1=document.getElementById('p1')
    var body=document.body
    bindEvent(p1,'click',function(e){
        e.stopProgatation()//stopPropatation()方法阻止冒泡，阻止传播事件,所以阻止了body事件弹出取消
        alert('确定')
    })
    bindEvent(body,'click',function(e){
        alert('取消')
    })
//代理-代码简洁/减少浏览器的内存占用
var div1=document.getElementById('div1')
div1.addEventListener('click',function(e){
    var target=e.target//target确定触发事件的具体位置，随时添加节点，target可以动态获取
    if(target.nodeName==='A'){
        alert(target.innerHTML)
    }

})
//完整的通用事件绑定
function bindEvent(elem,type,selector,fn){
    if(fn==null){
        fn=selector,
        selector=null
    }
    elem.addEventListener(type,function(e){
        var target
        if(selector){
            target=e.target
            if(target.matches(selector)){//触发的事件满足selector，比如selector是a标签，触发的事件是p就不满足
                fn.call(target,e)
            }
        }else{
            fn(e)
        }
    })
}
var div1=document.getElementById('div')
bindEvent(div1,'click',a,function(e){//使用代理
    console.log(target.innerHTML)
})
var a1=document.getElementById('a1')
var div1=document.getElementById('div')
bindEvent(div1,'click',function(e){//不使用代理
    console.log(a1.innerHTML)
})