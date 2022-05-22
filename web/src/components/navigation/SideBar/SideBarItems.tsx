import Link from 'next/link'
import styles from '@styles/navigation/sidebar/sidebar_items.module.scss'

interface SideBarItem {
    readonly id: number
    readonly title: string
    readonly route?: string
}

const sideBarElements: SideBarItem[] = [
    { title: '🔍 Search For Notes', route: '/home', id: 0 },
    { title: '📚 My Library of Notes', route: '/notes/my', id: 1 },
    { title: '🚪 Quit', id: 2 },
]

export const SideBarItems = (): JSX.Element => {
    return (
        <ul className={styles.sideBar}>
            {sideBarElements.map((element) => (
                <span className={styles.sideBarItem}>
                    <Link href={element.route ?? ''} key={element.id}>
                        {element.title}
                    </Link>
                </span>
            ))}
        </ul>
    )
}
