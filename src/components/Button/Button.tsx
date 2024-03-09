import React, { ReactElement } from "react"
import styles from './styles.module.scss'
type ButtonProps = {
    text: string
    tint?: 'outline' | 'filled'
    primary?: boolean
    secondary?: boolean
    disabled?: boolean
    variant?: 'default' | 'icon'
    icon?: ReactElement | null
}

const Button = ( {
    text, 
    disabled = false, 
    variant = 'default',
    icon: Icon = null} : ButtonProps) => {
    return <button type="button" className={`${styles.button} ${styles[variant]}`} disabled={disabled}>
        {(Icon && variant == 'icon') && Icon}
        <span className={styles.text}>
            {text}
        </span>
    </button>
}

export default Button
