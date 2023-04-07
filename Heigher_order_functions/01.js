function salary(num) {
  return num * 0.7;
}

setTimeout(salary, 2000);

const mySalaries = [50, 40, 29, 129, 400];

const afterFilter = mySalaries.filter((i) => i > 29).filter().map()

// () => {}
// (func) => {}
// (func) => () =>{}
// (func) => async() => {}

const asyncHandler =  (fn) => async(req, res, next) =>{
    try {
        await fn(req, res, next)
    } catch (error) {
        
    }
}