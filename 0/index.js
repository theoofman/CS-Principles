const factorial = (n) => {
    if (n > 0) {
        if (n == 1) {
            return n
        }
        return n * factorial(n - 1)
    }
}

console.log(factorial(6))