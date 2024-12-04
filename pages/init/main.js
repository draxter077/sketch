import s0 from "./comps/s0/main.js"
import s1 from "./comps/s1/main.js"
import s2 from "./comps/s2/main.js"

export default function init(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100dvh;
            width: 100%;
        }
        >div{
            border-bottom: 1px solid var(--colorBlack);
            padding: 20px;
            width: 100%;
        }`

    const init = cE("div", style)
    init.appendChild(s0())
    init.appendChild(s1())
    init.appendChild(s2())
    return(init)
}