import { Button } from '@mui/material'

interface IButtonProps {
    onClick: () => void
    children: React.ReactNode
    variant?: string
}

export const AppButton = ({ children, onClick, variant = 'standart' }: IButtonProps) => {
    return (
        <Button color="primary" variant="contained" onClick={onClick}>
            {children}
        </Button>
    )
}
