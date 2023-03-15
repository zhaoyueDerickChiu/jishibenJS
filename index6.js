
//class 的基本操作
// class card{
//     constructor(initname){
//         this.name=initname
//     }
// }

// const c1=new card("yuezhao")
// console.log("c1",c1)


//this 
// class card{
//     constructor(initname){
//         this.name=initname
//     }
//     hello(){
//         console.log("hellloooo",this.name)
//     }

//     hello2=()=>{
//         console.log("hello",this.name)
//     }
// }

// const c1=new card('yuezhaoa')

// console.log('c1',c1)

// c1.hello()



// const a={name:'AA'}

// a.heeeeelllllooo=c1.hello



// a.heeeeelllllooo()

// a.heeeeelllllooo=c1.hello2
// a.heeeeelllllooo()

//继承

class Car{
    constructor(initname){
        this.name=initname
    }
    start(){
        console.log('车子启动')
    }
}


class porche extends Car{
    constructor(porchename){
        super(porchename)
    }

    start2(){
        super.start()
    }
    start(){
        console.log('porche车子启动!!!')
    }
}
//注意继承时候新的功能会覆盖父系的功能！！！！比如porche里的start盖掉了car里的start
const p1=new porche("赵悦的保时捷")
p1.start()
console.log('name:',p1.name)