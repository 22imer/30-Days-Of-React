const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
        'React',
        'Redux',
    'Node',
    'MongoDB',
  ]
const empty = []
const five = Array(6).fill('X')
console.log(five)
const num = five.length
console.log(five[0])

console.log(countries) // -> all countries in array
console.log(countries[0]) //  -> Albania
let lastIndex = five.length - 1
console.log(five[lastIndex]) //  -> Kenya
console.log(lastIndex/2)
console.log(five[Math.ceil(lastIndex/2)])
// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies
const mixedDataTypes = ['1',2,"34",true,null,undefined]
console.log(mixedDataTypes.length)
str = "Facebook, Google, Microsoft, Apple, IBM, Oracle , Amazon"
itCompanies = str.split(',')
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
last = itCompanies.length
console.log(itCompanies[last])
console.log(itCompanies[Math.floor((last)/2)])
console.log(itCompanies.toString().concat(" are big IT companies"))
console.log(itCompanies.includes('oo'))
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(last-3))
console.log(itCompanies.slice(last/2-1,last/2+2))
itCompanies.shift()
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
itCompanies.splice(itCompanies.length/2+1,1)
console.log(itCompanies.splice(itCompanies.length/2+1,1)
)
console.log(itCompanies.splice())