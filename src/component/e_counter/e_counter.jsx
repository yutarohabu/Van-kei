import styles from "./e_counter.module.css"
import { useState } from "react"

export const E_counter = () => {
    const [ene, setEne] = useState(0)

    return(
        <div className={styles.contents_box}>
            <button className={styles.up_button} onClick={()=>{if(ene < 10){setEne((count)=> count + 1)}}}>▲</button>
            <div onClick={()=>setEne(0)}>
                <p>{ene}</p>
            </div>
            <button className={styles.down_button} onClick={()=>{if(ene > 0){setEne((count)=> count - 1)}}}>▼</button>
        </div>
    )
}