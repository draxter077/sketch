import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-height: 250px;
            overflow-y: scroll;
            border-top: 1px solid black;
        }`

    const options = cE("div", style)

    let test = ["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm"]
    for(let i = 0; i < test.length; i++){
        options.appendChild(option(test[i]))
    }
    return(options)
}