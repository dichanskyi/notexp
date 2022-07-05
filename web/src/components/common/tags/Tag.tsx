import styles from '@styles/tags/tags.module.scss'
const randomColor = require('randomcolor') //* undortunutely, this lib doesnt support import/export

interface TextTagProps {
    value: string
    color?: string
    isActive?: boolean
}

export const TextTag = ({ value, color = randomColor(), isActive = false }: TextTagProps): JSX.Element => {
    return (
        <span
            className={styles.text_tag}
            style={{ color: color, border: `2px solid ${color}`, cursor: isActive ? 'pointer' : 'default' }}
        >
            {value}
        </span>
    )
}
