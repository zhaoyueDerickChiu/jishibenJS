const content=document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')
const listContent=[]

function render(){

    let htmlsrt=''
    listContent.forEach(function(item){
        // console.log('item',item);
        htmlsrt=htmlsrt+`
        <div class="item">
            <div>
                <p>内容：${item.content}</p>
                <p>时间：${item.date} ${item.time}</p>
            </div>

          </div>
        `
    })

    list.innerHTML=htmlsrt


}
//注意unshift和push的区别，一个从前往后，一个从后往前
addedBtn.addEventListener('click',function(){
    listContent.unshift({
        content:content.value,
        date:date.value,
        time:time.value,
    })
    render()
    
})



deletedBtn.addEventListener('click',function(){
       listContent.shift()
    //    listContent.pop()

    render()




}





)


