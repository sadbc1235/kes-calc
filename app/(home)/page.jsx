'use client'

import { useRef } from "react";
import styles from "../../styles/header.module.css"

export default function HomePage() {
    

    const monthRef = useRef(null);
    const monthClick = () => {
        monthRef?.current?.showPicker();
    }
    const monthChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <header className={styles.header}>
                <h1 onClick={monthClick}>2024-04</h1>
                <input ref={monthRef} type="month" value="2024-04" onChange={monthChange} />
                <div className={styles.profileBox}>
                    <div> </div>
                    <div></div>
                </div>
            </header>
        </>
    );
}