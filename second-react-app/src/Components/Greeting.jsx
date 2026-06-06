function Greeting(props) {
    return (
        <div>
            {props.name ? <h1>Hello <i>{props.name}</i>!</h1>: <h1>Hello, World!</h1>}
            {props.children}
        </div>
    )
    
}

export default Greeting;