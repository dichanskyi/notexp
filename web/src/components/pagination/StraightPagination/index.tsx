import { ThemeProvider } from '@material-ui/core'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { mainTheme } from '../../../styles/material_ui_presets/main_preset'

interface StraightPaginationProps {
    count: number
}

export const StraightPagination = ({ count = 10 }: StraightPaginationProps): JSX.Element => {
    return (
        <Stack spacing={2}>
            <Pagination count={count} variant="outlined" shape="rounded" />
        </Stack>
    )
}
