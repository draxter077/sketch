export default function background(){
    let style = `
        {
            position: absolute;
            top: 50%;
            left: -50%;
            width: 200%;
            height: 100%;
            transform: rotate(5deg);
            background: var(--colorBlue);
            opacity: 0.3;
            transition: top var(--transitionTime), transform var(--transitionTime);
        }`

    const background = cE("div", style)
    return(background)
}