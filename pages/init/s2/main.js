import div from "./div/main.js"

export default function s2(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
        }`

    const s2 = cE("div", style)
    s2.appendChild(div())
    return(s2)
}