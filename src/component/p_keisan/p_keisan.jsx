import styles from "./p_keisan.module.css"
import { useState } from "react"

export const P_keisan = ({show, setShow}) => {

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    const handleCloseModal = () => {
        setShow(false)
        setNum1('')
        setNum2('')
    }

    if(show){
        const diffKeisan =() => {
            let diff = Number(num1) - Number(num2)
            console.log(diff)
            let hasu = diff%5000
            console.log(hasu)
            if(hasu>0){
                diff = diff - hasu + 5000
                console.log(diff)
            }else{
                diff = diff + 5000
            }
            return(diff)
        }

        return(
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <input
                        type="number"
                        placeholder="攻"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    ></input>
                    <input
                        type="number"
                        placeholder="防"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    ></input>
                    <p>要求値: {diffKeisan()}</p>
                    <button onClick={() => handleCloseModal()}>close</button>
                </div>
            </div>
        </>
        )
    }else{
        console.log('modal dont show')
        return null
    }
}