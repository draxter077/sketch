import div from "./div/main.js"

export default function s3(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
        }`

    const s3 = cE("div", style)
    s3.appendChild(div())
    return(s3)
}