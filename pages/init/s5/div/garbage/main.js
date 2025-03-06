export default function garbage(){
    let style = `
        {
            height: 30px;
            width: 30px;
            background: red;
            cursor: grab;
        }`

    const garbage = cE("div", style)
    garbage.draggable = true
    garbage.addEventListener("drag",
        function a(e){
            let trash = e.target.parentElement.children[0].getBoundingClientRect()
            if(trash.top <= e.clientY 
                && trash.bottom >= e.clientY 
                && trash.left <= e.clientX 
                && trash.right >= e.clientX
            ){e.target.style.position = "absolute"}
            else{
                if(e.clientX != 0){e.target.style.position = "static"}
            }
        }
    )
    return(garbage)
}