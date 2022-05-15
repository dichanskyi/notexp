import { StraightPagination } from '../../../pagination/StraightPagination'

import styles from '@styles/grids/content_grid_large/main.module.scss'

interface ContentGridLargeProps {
    readonly content: Array<any>
}

export const ContentGridLarge = ({ content }: ContentGridLargeProps): JSX.Element => {
    return (
        <div className={styles.main}>
            <span>Home</span>
            <StraightPagination count={10} />
        </div>
    )
}
