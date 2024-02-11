import React from "react";
import "./FriendList.css"
import Friend from "./Friend/Friend";
import friends from "../../../data";

function FriendList() {

    // update date format
    function formatDate(dateString) {
        const newDate = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).format(newDate);
    }

    return (
        <div className="friend-list">
            {friends.map(friendData => (
                <Friend 
                    key={friendData.id}
                    imageUrl={friendData.imageUrl}
                    title={friendData.title}
                    name={friendData.name}
                    date={formatDate(friendData.date)}
                />
            ))}
        </div>
    )
}

export default FriendList;