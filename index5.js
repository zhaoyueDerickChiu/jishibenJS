//function


function makemoney(){
    console.log(100+202-2)
}

makemoney()



function makelife(price1,price2){
    console.log(price1+price2)
}

makelife(102,3)



function yuezhao(age1,age2,age3)
{
    let result=age1+age2-age3
    return result
}


let ageee=yuezhao(10,20,2)

console.log("ageee",ageee)




//重要
function createCard(initname) {
    this.name=initname
}


let a1=new createCard('小明')
console.log(a1)