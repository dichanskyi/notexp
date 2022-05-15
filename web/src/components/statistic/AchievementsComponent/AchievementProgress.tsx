import { LinearProgress, styled } from '@material-ui/core'
import { linearProgressClasses } from '@mui/material'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 2,
        backgroundColor: '#49ae92',
    },
}))

interface AchievementProgressProps {
    progressValue: number
}

export const AchievementProgress = ({ progressValue }: AchievementProgressProps): JSX.Element => {
    return <BorderLinearProgress variant="determinate" value={80} />
}
