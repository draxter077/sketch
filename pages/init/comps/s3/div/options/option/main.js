export default function option(t){
    let style = `
        {
            width: 200%;
            max-height: 100%;
            transition: translate var(--transitionTime), max-height var(--transitionTime);
            overflow: hidden;
        }`

    const option = cE("div", style)
    option.innerHTML = t
    return(option)
}