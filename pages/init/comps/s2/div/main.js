import text from "./text/main.js"

export default function div(){
    let style = `
        {
            border-radius: 5px;
            background: white;
            box-shadow: 0px 0px 3px 0px black;
            width: fit-content;
            padding: 5px 10px;
            cursor: pointer;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 5px 0px black;
        }`

    const div = cE("div", style)
    div.appendChild(text())
    return(div)
}