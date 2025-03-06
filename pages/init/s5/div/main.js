import trash from "./trash/main.js"
import garbage from "./garbage/main.js"

export default function div(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 50%;
        }`

    const div = cE("div", style)
    div.appendChild(trash())
    div.appendChild(garbage())
    return(div)
}