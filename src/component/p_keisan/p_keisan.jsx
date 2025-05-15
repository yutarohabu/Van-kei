import styles from "./p_keisan.module.css"
import { useState } from "react"

export const P_keisan = ({show, setShow}) => {
    console.log('modal component')

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState(null)

    const handleCloseModal = () => {
        setShow(false)
        setNum1('')
        setNum2('')
        setResult('')
    }

    if(show){
        console.log('modal show')

        const handleCalculate = () => {
          const diff = Number(num1) - Number(num2) + 5000
          setResult(diff);
        };

        return(
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    {/* <p>これがモーダルウィンドウです。</p> */}
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
                    <button onClick={handleCalculate}>計算</button>
                    <p>要求値: {result}</p>
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