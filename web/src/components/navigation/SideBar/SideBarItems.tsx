import Link from 'next/link'
import styles from '@styles/navigation/sidebar/sidebar_items.module.scss'
import { PermissionLevels } from '../../../common/enums'

interface SideBarItem {
    readonly id: number
    readonly title: string
    readonly route?: string
    readonly excludedPermitions?: PermissionLevels[]
}

const sideBarElements: SideBarItem[] = [
    { title: '🔍 Search For Notes', route: '/home', id: 0 },
    { title: '📚 My Library of Notes', route: '/notes/my', id: 1 },
    { title: '🚪 Quit', id: 2, excludedPermitions: [PermissionLevels.deafult] },
    { title: '🚪 Login', route: '/authentication/login', id: 3 },
]

export const SideBarItems = (): JSX.Element => {
    const currentPermisionLevel = PermissionLevels.deafult

    const isThisTabPermitted = (el: SideBarItem) => !el.excludedPermitions?.includes(currentPermisionLevel)

    return (
        <ul className={styles.sideBar}>
            {sideBarElements.map(
                (element) =>
                    isThisTabPermitted(element) && (
                        <span className={styles.sideBarItem} key={element.id}>
                            <Link href={element.route ?? ''}>{element.title}</Link>
                        </span>
                    ),
            )}
        </ul>
    )
}
