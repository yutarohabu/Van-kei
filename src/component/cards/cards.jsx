import { Card } from "../card/card";
import styles from "./cards.module.css"
import { useState } from "react";
import { P_keisan } from "../p_keisan/p_keisan.jsx"

export const Cards = () => {
    const [reset, setReset] = useState(false)
    const [front, setFront] = useState(0)
    const [show, setShow] = useState(false)

    const handleReset = () => {
        setReset(true);
        setTimeout(() => setReset(false), 0);
    };

    const handleFront = (power) => {
        switch(power){
            case 10:
                setFront(10)
                break
            case 5:
                setFront(5)
                break
        }
    //     setFront(true);
        setTimeout(() => setFront(0), 0);
    };

    const handleOpenModal = () => {
        setShow(true)
    }

    return(
        <div className={styles.content}>
            <div className={styles.buttons}>
                <button onClick={handleReset}>リセット</button>
                <button onClick={() => handleFront(10)}>前+10k</button>
                <button onClick={() => handleFront(5)}>前+5k</button>
                <div>
                    <button onClick={() => handleOpenModal()}>計算</button>
                    <P_keisan show={show} setShow={setShow}/>
                </div>
            </div>
            <div className={styles.cards}>
                <Card reset={reset} front={front}/>
                <Card reset={reset} front={front}/>
                <Card reset={reset} front={front}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
                <Card reset={reset}/>
            </div>
        </div>
    )
}