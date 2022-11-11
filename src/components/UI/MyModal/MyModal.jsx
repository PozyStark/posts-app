import React from "react";
import classes from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]

    if (visible) {
        console.log('visible or not')
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={classes.myModalContent} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}

export default MyModal