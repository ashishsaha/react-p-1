import React from "react";
import dateFormat from "dateformat";

const DishDetailComments = props => {

    return (
        props.comments.map(item => {
            return (
                <div key={item.id}>
                    <h5>{item.author}</h5>
                    <p>{item.comment}</p>
                    <p>{dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MMTT")}</p>
                </div>
            );
        })
    );
}

export default DishDetailComments;