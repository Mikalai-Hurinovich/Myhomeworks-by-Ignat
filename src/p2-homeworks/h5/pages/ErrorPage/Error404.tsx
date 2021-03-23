import React from 'react'
import s from './Error.module.css'

function Error404() {
    return (
        <div>
            <div className={s.mainbox}>
                <div className={s.err}>4</div>
                <i className={`${s.far} far fa-question-circle fa-spin`}></i>
                <div className={s.err2}>4</div>
                <div className={s.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the first
                    place?<p>Let's go <a href="#/pre-junior">home</a> and try from there.</p></div>
            </div>
        </div>
    )
}

export default Error404
