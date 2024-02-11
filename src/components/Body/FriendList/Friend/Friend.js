import React from "react";
import "./Friend.css"

function Friend(props) {

    return (
        <div className="col-12 friend">
            <div className="col-3 avatar">
                <img className="avatar-img" src={props.imageUrl} alt="avatar" />
            </div>
            <div className="col-7 info">
                <h3 className="title">{props.title}</h3>
                <h4>{props.name}</h4>
                <p>{props.date}</p>
            </div>
            <div className="col-2 action-button">
                <button className="btn-friend btn-friend-edit">Edit</button>
                <button className="btn-friend btn-friend-delete">Delete</button>
            </div>
        </div>
    )
}

export default Friend;