import React, {useState} from 'react';

export default function TextForms(props) {
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleTitleClick = () => {
        let newText = toTitleCase(Text);
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [Text, setText] = useState('');

    // Function to convert text to title case
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to Title</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h2>Your text summary</h2>
                <p>{Text.split(" ").length} Words, {Text.length} Characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </>
    );
}
