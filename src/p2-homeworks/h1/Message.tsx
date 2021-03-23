import React from 'react'
import classes from "./Message.module.css";

type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    return (
        <div className={classes.message}>
            <div className={classes.wrapper}>
                <img className={classes.img} src={props.avatar} alt=""/>
            </div>
                <div className={classes.reviews}>
                    <div className={classes.comment}>
                        <div className={classes.comment_bubble}>
                            <div className={classes.message__content_name}>{props.name}</div>
                            <div className={classes.comment_text}>{props.message}
                                <div className={classes.message__content_time}>{props.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Message;
