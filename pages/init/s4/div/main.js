export default function div(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 40px 20px 0px;
            box-shadow: 0px 0px 5px 0px black;
            border-radius: 15px;
            height: 200px;
            opacity: 0;
            transition: padding var(--transitionTime), opacity var(--transitionTime);
        }`

    const div = cE("div", style)
    div.innerHTML = "teste"
    window.addEventListener("scroll", function a(){
        //console.log(window.scrollY +"-"+ div.getBoundingClientRect().top)
        if(window.scrollY > 200){
            div.style.padding = "20px"
            div.style.opacity = "1"
        }
        //window.history.pushState({}, "", "/test");
    })
    return(div)
}