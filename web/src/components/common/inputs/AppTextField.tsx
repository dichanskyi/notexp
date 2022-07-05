import { TextField } from '@mui/material'

interface ITextFieldProps {
    onChange?: any
    value: string | number
    isDisabled?: boolean
    placeholder?: string
    variant?: string
}

export const AppTextField = ({ onChange, placeholder, value, isDisabled = false }: ITextFieldProps) => {
    return (
        <TextField
            variant="outlined"
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
