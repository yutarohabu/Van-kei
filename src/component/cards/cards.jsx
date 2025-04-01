import { Card } from "../card/card";
import styles from "./cards.module.css"
import { useState } from "react";

export const Cards = () => {
    const [reset, setReset] = useState(false)

    const handleReset = () => {
        setReset(true);
        setTimeout(() => setReset(false), 0);
    };

    return(
        <div className={styles.content}>
            <div className={styles.buttons}>
                <button onClick={handleReset}>reset</button>
            </div>
            <div className={styles.cards}>
                <Card reset={reset}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
            </div>
        </div>
    )
}