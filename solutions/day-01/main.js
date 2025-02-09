
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
words = text.split(' ')
console.log(words)
console.log(words.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes('Meats')){
    shoppingCart.unshift('Meat')
}
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
const allergy = false
if(allergy == true){
    let idx = shoppingCart.indexOf('Honey')
    shoppingCart.splice(idx,1)
}
let tes = shoppingCart.indexOf('Tea')
shoppingCart[tes] = 'Green Tea'
console.log(shoppingCart)
if(countries.includes('Ethiopia') == true){
    console.log('ETHIOPIA')
}
else{
    countries.push('Ethiopia')
}
console.log(countries)
if(webTechs.includes('Sass')){
    console.log("Sass is a CSS preprocess")
}
else{
    webTechs.push('Sass')
    console.log(webTechs)
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
ages.sort()
// console.log(ages.shift())
// console.log(ages.pop())
console.log(ages)
if(ages.length % 2 == 0){
    let med = (ages[ages.length/2 - 1] + ages[ages.length/2]) / 2
    console.log(med)
}
else{
    console.log(ages[(ages.length-1)/2])
}
let sum = 0
for (let i = 0; i < ages.length;i++){
    sum = sum + ages[i];
}
let avg = sum/ages.length
console.log(avg)
min = Math.abs(ages[0]-avg)
max = Math.abs(ages[ages.length-1]-avg)
console.log(min,max)
console.log(countries.slice(0,10))
let id = Math.floor(countries.length/2)
console.log(countries[id])
if(countries.length % 2 == 0){
    let temp = countries.splice(countries.length/2)
    console.log(temp,countries)
}
else{
    let temp = countries.splice(Math.floor(countries.length/2))
    console.log(temp,countries)
}