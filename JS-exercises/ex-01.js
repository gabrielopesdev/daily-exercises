function calc(a, b, c) {

    let r = (a + b) ** 2
    let s = (b + c) ** 2

    var d = (r + s) / 2
    return d
}

console.log(calc(2, 4, 3))