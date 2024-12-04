const num = 237

function isPrime(n) 
{
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}


for (let i = num; i > 1; i--) {
    if (isPrime(i)) console.log(i);
}