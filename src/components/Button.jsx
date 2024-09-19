

export function Button({btnClass, text, onClick}) {

    return(
        
        <button className={`btn ${btnClass} btn-s`} onClick={onClick}>{text}</button> 
    )
}