import input from "./input/main.js"
import value from "./value/main.js"

export default function inputRange(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 50%;
        }`
        
    const inputRange = cE("div", style)
    inputRange.appendChild(input())
    inputRange.appendChild(value())
    return(inputRange)
}