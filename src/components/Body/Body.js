import React from "react";
import "./Body.css"
import FriendList from "./FriendList/FriendList";
import friends from "../../data"

console.log(friends[0])

function Body() {
    return (
        <div className="body">
            <div className="btn-add-position">
                <button className="btn btn-add hover-effect">Add +</button>
            </div>
            <div className="friend-list-position">
                <FriendList />
            </div>
        </div>
    )
}

export default Body;