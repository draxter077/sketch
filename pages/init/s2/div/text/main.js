export default function text(){
    let style = `
        {
            font-size: 20px;
            position: relative;
        }
        ::after{
            content: "";
            position: absolute;
            bottom: 0%;
            left: 0%;
            width: 0%;
            height: 1px;
            background: black;
            transition: width var(--transitionTime);
        }
        :hover::after{
            width: 100%;
        }`

    const text = cE("div", style)
    text.innerHTML = "Clique"
    return(text)
}