import React from 'react';

import './title.scss'

const Title = (props) => {
    return (
        <div className={"cmp-title" + (props.alignCenter ? " cmp-title--align-center" : "") + (props.highlight ? " cmp-title--highlight" : "")}>
            {
                !props.reverse &&
                <>
                    <label className={"cmp-title__primary" + (props.smaller ? " cmp-title__primary--smaller" : "")}>{props.primaryText}</label>
                    <label className={"cmp-title__secondary" + (props.smaller ? " cmp-title__secondary--smaller" : "")}>{props.secondaryText}</label>
                </>
            }
            {
                props.reverse &&
                <>
                    <label className={"cmp-title__secondary" + (props.smaller ? " cmp-title__secondary--smaller" : "")}>{props.primaryText}</label>
                    <label className={"cmp-title__primary" + (props.smaller ? " cmp-title__primary--smaller" : "")}>{props.secondaryText}</label>
                </>
            }
        </div>
    )
}

export default Title;