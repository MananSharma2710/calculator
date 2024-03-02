function Button(prop){
    return <button className={prop.className} onClick={()=> prop.onClick(prop.value)}>{prop.value}</button>
}
export default Button;