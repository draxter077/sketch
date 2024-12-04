import text from "./text/main.js"

export default function div(){
    let style = `
        {
            padding: 5px 10px;
            border-radius: 15px;
            background: green;
            width: fit-content;
            cursor: pointer;
        }`

    const div = cE("div", style)
    div.appendChild(text())
    return(div)
}