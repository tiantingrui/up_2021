const value = {number: 10}
const number = 2
const multiply = (x = {...value}, y = number) => {
  y++
  console.log((x.number *= y))
}

multiply()
multiply()
multiply(value, number)
multiply(value, number)
