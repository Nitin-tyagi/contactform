 import styles from "./Navigation.module.css"
 const Navigation =()=>{
    return(
        <>
        <nav className="container">
            <div className="logo">
                <img src="\images\reactlogo.png" alt="do some logo coding"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav></>
    )
 }

 export default Navigation;
