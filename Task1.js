

const num = 15

Number(num % 2 == 0 || num % 3 == 0 || num % 2 == 0) == true && console.log(1)

Number(num % 2 == 0 && num % 3 == 0 || num % 3 == 0 && num % 5 == 0 || num % 2 == 0 && num % 5 == 0 ) == true && console.log(2)

Number(num % 2 == 0 && num % 3 == 0 && num % 5 == 0) == true && console.log(3)


