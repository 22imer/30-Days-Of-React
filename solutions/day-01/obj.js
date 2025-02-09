const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`
    },
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
      .slice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.slice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}` 
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())
  const copyperson = Object.assign({},person)
  console.log(copyperson)
const values = Object.values(copyperson)
console.log(values)
const entries = Object.entries(copyperson)
console.log(entries)
let dog = {
    name: 'cat',
    color:  'red',
    legs: 4,
    age : 12,
    bark: function(){
        return 'Woof woof'
    },

}
console.log(dog)
console.log(dog.name)
console.log(dog.color)
console.log(dog.legs)
console.log(dog.bark())
dog.breed = 'tay'
dog.getDoginfo = function () {
    let state = `${this.name} , ${this.color}`
    return state
}
console.log(dog.breed)
console.log(dog.getDoginfo())
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let maxSkillsUser = null;
let maxSkillsLength = 0;

for (let user in users) {
  if (users[user].skills.length > maxSkillsLength) {
    maxSkillsLength = users[user].skills.length;
    maxSkillsUser = user;
  }
}

console.log(`User with the largest skill set: ${maxSkillsUser} with ${maxSkillsLength} skills.`);
let log_count = 0
for (let user in users){
    if (users[user].isLoggedIn == true){
        log_count++
    }
}
console.log(log_count)
let counter = 0
for (let user in users){
    if (users[user].points >= 50){
        counter++
    }
}
console.log(counter)
let mernStackDevelopers = []
for (let user in users) {
    const skills = users[user].skills;
    
    // Check if the user has all the necessary skills for the MERN stack
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
      mernStackDevelopers.push(user);
    }
  }
  
  console.log('MERN Stack Developers:', mernStackDevelopers);
  users.Duc = {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  }
  console.log(users)
  const properties = Object.values(users)
  console.log(properties)
  const keys = Object.keys(users)
  console.log(keys)

//   const users = [
//     {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt: '08/01/2020 9:00 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt: '08/01/2020 9:30 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt: '08/01/2020 9:45 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt: '08/01/2020 9:50 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt: '08/01/2020 10:00 AM',
//       isLoggedIn: false,
//     },
//   ]
  
//   const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 },
//       ],
//       likes: [],
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy'],
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy'],
//     },
//   ]
//   const personAccount = {
//     firstName:'A',
//     lastName: 'B',
//     income: 1000,
//     expense: 500,
//     totalIncome: function (){
//          return this.income
//     },
//     totalExpense: function (){
//         return this.expense
//     },
//     accountinfo: function (){
//         return `${this.firstName} ${this.lastName}'s Account: Total Income - $${this.totalIncome()}, Total Expense - $${this.totalExpense()}`
//     },
//     addIncome(description, amount) {
//         this.incomes.push({ description, amount });
//       },
//   }
  function fullName(firstName,lastName){
    let temp = firstName + lastName
    return temp 
  }
  function addnumber(n1,n2){
    let sum = n1 + n2
    return sum
  }
  const PI = 3.14
  function area(r){
    return r*r*PI
  }
  function conv(temp){
    return (temp-32)/(9/5)
  }
  function bmi(weight,height){
    let bmi = weight / (height*height)
    if(bmi < 18.5){
        return 'under'
    }
    else if(bmi < 25){
        return 'normal'
    }
    else if(bmi < 30){
        return 'overweight'
    }
    else{
        return 'obese'
    }
  }
  console.log(bmi(70,1.7))
  function checkseason(month){
    if(month < 4){
        return 'spring'
    }
    else if(month < 7){
        return 'summer'
    }
    else if(month < 10){
        return 'autumn'
    }
    else{
        return 'winter'
    }
  }