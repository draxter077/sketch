export default function title(){
    let style = `
        {
            position: absolute;
            bottom: 0%;
            left: 0%;
            padding: 20px;
            font-size: 30px;
            transition: left var(--transitionTime);
        }`

    const title = cE("div", style)
    title.innerHTML = "Título"
    return(title)
}