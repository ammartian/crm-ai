import React, { useState } from "react";
import "./Edit.css"

// 1. Create form for the inputs and submit button
//2. Each input must have onChange={}, function & state to handle the state
//2a. Add onChange for the input
//2b. Create function to handle the onChange
//2c. Create state to handle the value data. Use props as initial value
//2d. Take the updated data and assign it to the input

function Edit(props){

    const [title, setTitle] = useState(props.title)
    const [name, setName] = useState(props.name)
    const [notes, setNotes] = useState(props.notes)

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleName(event) {
        setName(event.target.value);
    }

    function handleNotes(event) {
        setNotes(event.target.value);
    }

    function handleSubmit(event) {
        console.log("!-- SUBMITTED --!")
        setTitle(title)
        console.log("Title:", title)
        setName(name)
        console.log("Name:", name)
        setNotes(notes)
        console.log("Notes:", notes)
        console.log("!-- SUBMITTED --!")

        event.preventDefault();
    }

    return (
        <div className="edit">
        <form>
            <div className="img-title-name">
                <img className="avatar-img" src={props.imageUrl} alt="avatar" />
                <div className="title-name-box">
                    <input className="title-box" type="text" placeholder="Title" value={title} onChange={handleTitle} />
                    <input className="name-box" type="text" placeholder="Name" value={name} onChange={handleName} />
                </div>
            </div>
            <textarea className="notes-box" placeholder="Enter text here.." value={notes} onChange={handleNotes}></textarea>
            <h4>Topic Suggestion</h4>
            <p>Enter notes to receives topic suggestion!</p>
            <p>More detailed your notes, we will suggest more relevant topic for you!</p>
            <ol>
                <li>AI topic suggestion 1</li>
                <li>AI topic suggestion 2</li>
                <li>AI topic suggestion 3</li>
            </ol>
            <p>Click on the suggestions to insert in the notes!</p>
            <div className="edit-page-buttons">
                <button className="btn-edit btn-edit-cancel">Cancel</button>
                <button className="btn-edit btn-edit-save" type="submit" onClick={handleSubmit}>Save</button>
            </div>
        </form>
        </div>
    )
}

export default Edit;