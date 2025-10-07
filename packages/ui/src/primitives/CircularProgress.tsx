import {
    type CircularProgressProps,
    CircularProgress as MuiCircularProgress,
} from '@mui/material';

export const CircularProgress = (props: CircularProgressProps) => {
    return <MuiCircularProgress size={30} {...props} />;
};
