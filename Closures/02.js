function hello (x)  {
    const a  = "Variable a"
    const b  = "Variable b"
    return function() {
        console.log(a,b,x)
    }
}

const ans = hello("argument")
ans();