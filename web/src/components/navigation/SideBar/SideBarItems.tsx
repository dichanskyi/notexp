import styles from '@styles/navigation/sidebar/sidebar_items.module.scss'

interface SideBarItem {
    readonly id: number
    readonly title: string
    readonly route: string
}

const sideBarElements: SideBarItem[] = [
    { title: '🔍 Search For Notes', route: '/', id: 0 },
    { title: '📚 My Library of Notes', route: '/', id: 1 },
    { title: '🚪 Quit', route: '/', id: 2 },
]

export const SideBarItems = (): JSX.Element => {
    return (
        <ul className={styles.sideBar}>
            {sideBarElements.map((element) => (
                <li className={styles.sideBarItem} key={element.id}>
                    {element.title}
                </li>
            ))}
        </ul>
    )
}
