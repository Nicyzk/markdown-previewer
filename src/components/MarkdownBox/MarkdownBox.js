import React from 'react';
import classes from './MarkdownBox.module.css';

const editor = (props) => {
    let content;
    if (props.type === "editor") {
        content = (
        <div className={classes.container} style={{top: "20%", left: "5%", width: "30%"}}>
            <div className={classes.heading}>Editor</div>
            <textarea 
            id="editor"
            value={props.text}
            className={classes.editor}
            onChange={props.changed}
            placeholder="Write some markdown here."></textarea>
        </div>
        )
    }
    else if (props.type === "previewer") {
        content = (
        <div className={classes.container} style={{top: "20%", left: "40%", width: "50%", backgroundColor: "lavenderblush"}}>
            <div className={classes.heading}>Previewer</div>
            <div id="preview" className={classes.previewer} dangerouslySetInnerHTML={props.markedText}></div>
        </div>
        );
    }
    return (
        <React.Fragment>
            {content}
        </React.Fragment>)
}

export default editor;