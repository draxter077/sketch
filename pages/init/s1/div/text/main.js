export default function text(){
    let style = `
        {
            width: 100%;
            text-align: center;
            opacity: 0;
            padding: 20px;
            transition: opacity var(--transitionTime);
        }`

    const text = cE("div", style)
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return(text)
}