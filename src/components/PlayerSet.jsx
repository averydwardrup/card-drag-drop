import React from "react";
import ActivePlayers from "./ActivePlayers.jsx";

function PlayerSet() {
    return (
        <div>
            <div className="two-cols">
                <div className="col">
                    <ActivePlayers/>
                </div>
                <div  className="col">
                    <h2>Starters</h2>
                    <div className="drop-zone"></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSet;
