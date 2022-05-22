export const pushNamed = (route: string): string => {
    switch (route) {
        case 'create-draft':
            return '/draft/create-draft'
        default:
            return '/home'
    }
}
