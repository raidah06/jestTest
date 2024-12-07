const arrayAnalyser = arr => {
    const sum = (arr => {
      return arr.reduce((accumulator, number) => {
        return accumulator + number
      }, 0)
    })(arr)
    const min = (arr => {
      return arr.reduce((accumulator, number) => {
        return accumulator <= number ? accumulator : number
      })
    })(arr)
    const max = (arr => {
      return arr.reduce((accumulator, number) => {
        return accumulator >= number ? accumulator : number
      })
    })(arr)
  
    const length = (arr => arr.length)(arr)
    const mean = (arr => sum / length)(arr)
    return {
      mean,
      length,
      min,
      max
    }
  }
  
  export { arrayAnalyser }