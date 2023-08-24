const names = ['alif','tammana','mehedi','sanjana','alif','sanjana']


function duplicatevlue (names){
    const unique = []

    for(let i = 0; i < names.length; i++){
        const name = names[i]

        if(unique.includes(name) ===false){
            unique.push(name)
        }
    }
    return unique

}

const value =  duplicatevlue(names)
console.log(value)


const phones =[
{
    name:"walton",
    price:1200,
    color:"selver"
},
{
    name:"samsung",
    price:600,
    color:"selver"
},
{
    name:"mi",
    price:1500,
    color:"selver"
},
{
    name:"walton",
    price:1600,
    color:"selver"
}

]

function chipestphone (phones){
    let chipest = phones[0]
    for(let i =0 ; i < phones.length; i++){
        const phone = phones[i]

        if(phone.price > chipest.price ){
            chipest = phone
        }     
    }
    return chipest
}
const chip = chipestphone(phones)
console.log(chip)
