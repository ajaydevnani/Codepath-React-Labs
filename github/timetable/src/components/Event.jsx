import React from "react";

const Event = (props) => {
    return(
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h9>{props.location}</h9>
        </td>
    )
}
export default Event;