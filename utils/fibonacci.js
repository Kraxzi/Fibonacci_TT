const fibonacciUtils = {
  countFibonacci: function(n) {
    if (n < 0 || Math.trunc(n) != n) {
      throw new Error("Number must be positive");
    }
    return n <= 1 ? n : this.countFibonacci(n - 1) + this.countFibonacci(n - 2);
  }
}

module.exports = fibonacciUtils