//window.alert("wwww")



//callback 回呼
window.addEventListener("load",function(params)

{
       //console.log('load')
       const p1=document.getElementById('title')
       console.log(p1)

     p1.innerText="我修改了"


     const b1=document.getElementById('btn')
     b1.addEventListener('click',function(){
        console.log('ahhh,u click me!!!')
     })
     

     const  box1=document.getElementById('box')
     box1.innerHTML='<p>test</p>'
     


     const in1=document.getElementById('input1')
     in1.addEventListener('keyup',function(e){
        console.log('e.target.value',e.target.value)
     })
}

)