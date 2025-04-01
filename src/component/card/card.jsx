import { useState, useEffect  } from 'react'
import styles from './card.module.css'

export const Card = ({ reset }) => {
    const [power, setPower] = useState(0)
    
    useEffect(() => {
        if (reset) {
            setPower(0);
        }
    }, [reset]);

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
            </div>
            <p onClick={() => setPower(0)}>{power}</p>
        </div>
    )
}