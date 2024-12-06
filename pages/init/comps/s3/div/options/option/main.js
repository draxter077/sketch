export default function option(t){
    let style = `
        {
            width: 100%;
            height: fit-content;
            max-height: 100%;
            transition: max-height var(--transitionTime);
            overflow: hidden;
        }`

    const option = cE("div", style)
    option.innerHTML = t
    return(option)
}