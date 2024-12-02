export default function input(){
    let style = `
        {
            width: 50%;
            -webkit-appearance: none;
        }
        ::-webkit-slider-runnable-track {
            background: red;
            border-radius: 15px;
            padding: 5px 10px;
        }
        ::-webkit-slider-thumb{
            -webkit-appearance: none;
            height: 15px;
            width: 15px;
            background: green;
            border-radius: 15px;
            cursor: ew-resize;
            transition: background var(--transitionTime);
        }
        :hover::-webkit-slider-thumb{
            background: yellow;
        }`
        
    const input = cE("input", style)
    input.type = "range"
    input.id = "inputRange02122024"
    // min="0" max="100" value="90" step="10" are possibles atts

    input.oninput = function a(e){
        let el = e.target.parentElement.children[1] //Encontra o div para value
        el.innerHTML = e.target.value + "%"
    }
    return(input)
}