import UserContext from "../utils/UserContext"

const About=()=>{
    return(
        <div>
            <h1>About Us</h1>
            <div>LoggedIn User: <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>
                }</UserContext.Consumer>
            </div>
        </div>
    )
}

export default About