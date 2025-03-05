import div from "./div/main.js"

export default function s1(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
        }`

    const s1 = cE("div", style)
    s1.appendChild(div())
    return(s1)
}