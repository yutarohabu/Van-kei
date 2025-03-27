import { Card } from "../card/card";
import styles from "./cards.module.css"

export const Cards = () => {
    console.log('cards component throw')

    return(
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}