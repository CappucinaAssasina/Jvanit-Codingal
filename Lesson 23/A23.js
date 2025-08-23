function one(){
    console.log("one")
}
function two(){
    one()
    console.log("two")
}
function three(){
    two()
    console.log("three")
}

three()

four = {
    value : "four"
}
five = {
    value : "five"
}
six = {
    value : "six"
}
 
numbers = [four,five]
console.log(numbers[0])
numbers.push(six);
console.log(numbers)