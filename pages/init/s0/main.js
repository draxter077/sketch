import input from "./input/main.js"
import value from "./value/main.js"

export default function s0(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }`
        
    const s0 = cE("div", style)
    s0.id = "s0"
    s0.appendChild(input())
    s0.appendChild(value())
    return(s0)
}