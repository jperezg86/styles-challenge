import React from "react"
import styles from './styles.module.scss'
type FirmFactCardProps = {
    variant?: 'default' | 'border',
    className?: string,
    children?: React.ReactElement
}
const FirmFactCard =({
    variant = 'default',
    className = '',
    children
}: FirmFactCardProps) => {
    console.log(variant)
    return <div className={`${styles.card} ${className} ${styles[variant]}`}>
       {children}
    </div>
}

export default FirmFactCard
