export default function input(){
    let style = `
        {
            width: 50%;
            -webkit-appearance: none;
            cursor: grab;
        }
        ::-webkit-slider-runnable-track {
            background: gray;
            border-radius: 15px;
            padding: 5px 10px;
        }
        ::-webkit-slider-thumb{
            -webkit-appearance: none;
            height: 15px;
            width: 15px;
            background: white;
            border-radius: 15px;
            transition: box-shadow var(--transitionTime);
        }
        :hover::-webkit-slider-thumb{
            box-shadow: 0px 0px 10px 0px black;
        }`
        
    const input = cE("input", style)
    input.type = "range"
    // min="0" max="100" value="90" step="10" are possibles atts

    input.oninput = function a(e){
        let el = e.target.parentElement.children[1] //Encontra o div para value
        el.innerHTML = e.target.value + "%"
    }
    return(input)
}