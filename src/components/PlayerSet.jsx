import React from "react";
import ActivePlayers from "./ActivePlayers.jsx";

function PlayerSet() {
    return (
        <div>
            <div className="columns">
                <div className="column">
                    <ActivePlayers/>
                </div>
                <div  className="column">
                    <h2 className="is-size-2">Starters</h2>
                    <div className="drop-zone"></div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSet;
