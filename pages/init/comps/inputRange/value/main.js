export default function value(){
    let style = `
        {
            font-size: 20px;
        }`
    
    const value = cE("div", style)
    value.innerHTML = "50%"
    return(value)
}