import background from "./background/main.js"
import title from "./title/main.js"
import text from "./text/main.js"
import onmouseDiv from "./onmouseDiv/main.js"

export default function div(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 300px;
            border: 1px solid var(--colorBlack);
            border-radius: 15px;
            overflow: hidden;
            position: relative;
            background: rgb(255, 150, 0, 0.3);
        }`
    
    const div = cE("div", style)
    div.appendChild(background())
    div.appendChild(title())
    div.appendChild(text())
    div.appendChild(onmouseDiv())
    return(div)
}