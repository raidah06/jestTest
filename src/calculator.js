const Calculator = (() => {
    const sum = (a, b) => {
      return a + b
    }
    const difference = (a, b) => {
      return a - b
    }
    const product = (a, b) => {
      return a * b
    }
    const quotient = (a, b) => {
      return a / b
    }
    return {
      sum,
      difference,
      product,
      quotient
    }
  })()
  
  export default Calculator