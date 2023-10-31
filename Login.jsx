import React from "react";

const Login = (props) => {
    return (
        <div className="login-container"> <br></br><br></br><br></br><br></br>
            <h1 className="welcome-message-login">Welcome to Decentralized Voting Application!</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button> <br></br>
            <img className="login-gif" src = "https://media.tenor.com/h4uE7CkRjYsAAAAd/happy-election-day-election-day.gif" alt=""></img>
        </div>
    )
}

export default Login;