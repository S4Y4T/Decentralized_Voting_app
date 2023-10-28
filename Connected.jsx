import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container"> <br></br><br></br>
            <h1 className="connected-header">You are connected to Metamask! <br></br> Choose THE BEST OF THE BEST!</h1>
            <p className="connected-account">Remaining Time: {props.remainingTime} seconds</p>
            { props.showButton ? (
                <p className="connected-account">YOU HAVE ALREADY VOTED!!!</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br></br><br></br>
            <p className="connected-account">Metamask Account: {props.account}</p>
        </div>
    )
}

export default Connected;