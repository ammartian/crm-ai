import React from "react";
import "./Body.css"
import FriendList from "./FriendList/FriendList";
import Edit from "./FriendList/Edit/Edit";
import friends from "../../data"

console.log(friends[0])

function Body() {
    return (
        <div className="body">
            <div className="btn-add-position">
                <button className="btn btn-add hover-effect">Add +</button>
            </div>
            <div className="friend-list-position">
                <Edit 
                    key={friends[0].id}
                    imageUrl={friends[0].imageUrl}
                    title={friends[0].title}
                    name={friends[0].name}
                    notes={friends[0].notes}
                />
            </div>
        </div>
    )
}

export default Body;