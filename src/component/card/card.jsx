import { useState, useEffect  } from 'react'
import styles from './card.module.css'

export const Card = ({ reset, front }) => {
    const [power, setPower] = useState(0)

    useEffect(() => {
        if(front==10){
            console.log('front:10k')
            setPower((count)=>count + 10000)
        }
        else if(front==5){
            console.log('front:5k')
            setPower((count)=>count + 5000)
        }
    }, [front])
    
    useEffect(() => {
        if (reset) {
            console.log('reset:true')
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