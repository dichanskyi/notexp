import styles from '@styles/navigation/sidebar/sidebar_items.module.scss'

interface SideBarItem {
    title: string
    route: string
}

const sideBarElements: SideBarItem[] = [
    { title: '🔍 Search For Notes', route: '/' },
    { title: '📚 My Library of Notes', route: '/' },
    { title: '🚪 Quit', route: '/' },
]

export const SideBarItems = (): JSX.Element => {
    return (
        <ul className={styles.sideBar}>
            {sideBarElements.map((element) => (
                <li className={styles.sideBarItem}>{element.title}</li>
            ))}
        </ul>
    )
}
