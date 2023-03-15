let c1='小明'
//let..................
let c30='小红'
//阵列array
//上边太麻烦，直接用下边的阵列
let classA=['小明','小白','小红',"小绿"]
console.log('转学前：',classA)

classA.push('小黄')
console.log('转学后：',classA)

let igphotos=['http://xx.img.com/a1.png',
'http://xx.img.com/a2.png',
'http://xx.img.com/a3.png'
]

console.log('igphotos',igphotos)
console.log('igphotos',igphotos[0])
console.log(classA.length)

//物件 object

const card={
    name:"cards of zhaoyue",
    address:"usa,dallasxxx",
    age:2.2
}

console.log("name",card.name)


const post={
    image:'http://xx.img.com/a1.png',
    desc:"this is a photo",
    date:'2022/2/21',
    comment:["so cool","beautiful...."]
}
//array he object 的组合
const wall=[
    post,
    post,
    post,
    post
]

console.log("wall",wall)