export default function trash(){
    let style = `
        {
            height: 50px;
            width: 50px;
            background: green;
            border-radius: 5px;
            position: relative;
        }`

    const trash = cE("div", style)
    return(trash)
}