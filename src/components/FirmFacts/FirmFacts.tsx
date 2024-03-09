import React from "react"
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon"
import Button from "../Button/Button"
import styles from './styles.module.scss'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import FirmFactCard from "../FirmFactCard/FirmFactCard"

const FirmFacts = () => {
    return <div className={styles.firmFactWrapper}>
        <div className={styles.actionsBar}>
            <XMarkIcon className={styles.closeIcon} width={50} color="white"/>
        </div>
        <div className={styles?.firmFactHeader}>
            <h1>Firm Facts</h1>
        </div>
        <div className={styles?.firmFactContent}>
            <FirmFactCard className={styles.gridItem}>
                <Button text="This is a two line button that terminates with very very large text" 
                        icon={<MagnifyingGlassIcon width={35} />} 
                        variant="icon"/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem}>
                <Button text="This is a two line button that terminates with very very large text" 
                    icon={<MagnifyingGlassIcon width={35} />} 
                    variant="icon"/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem}>
                <Button text="This is a one line button"/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem}>
                <Button text="This is a two line button that terminates with very very large text" 
                    icon={<MagnifyingGlassIcon width={35} />} 
                    variant="icon"/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem} variant="border">
                <Button text="This is a two line button that terminates with very very large text" icon={<MagnifyingGlassIcon width={35}/>} variant="icon"/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem} variant="border">
                <Button text="This is a two line button that terminates with very very large text" icon={<MagnifyingGlassIcon width={35}/>} variant="icon" disabled/>
            </FirmFactCard>
            <FirmFactCard className={styles.gridItem} variant="border">
                <Button text="This is a two line button that terminates with very very large text" icon={<MagnifyingGlassIcon width={35}/>} variant="icon"/>
            </FirmFactCard>
        </div>
    </div>
}

export default FirmFacts
