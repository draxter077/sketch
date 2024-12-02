import inputRange from "./comps/inputRange/main.js"

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
    init.appendChild(inputRange())
    return(init)
}