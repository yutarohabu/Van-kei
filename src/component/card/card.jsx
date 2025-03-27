import { useState } from 'react'
import styles from './card.module.css'

export const Card = () => {
    console.log('card component throw')
    const [power, setPower] = useState(0)

    return(
        <div className={styles.card}>
            <div className={styles.buttons}>
                <button onClick={() => setPower((count) => count + 5000)}>
                +5k
                </button>
                <button onClick={() => setPower((count) => count + 1000)}>
                +1k
                </button>
                <button onClick={() => setPower((count) => count - 1000)}>
                -1k
                </button>
                {/* <button onClick={() => setPower(0)}>
                reset
                </button> */}
            </div>
            <p onClick={() => setPower(0)}>{power}</p>
        </div>
    )
}