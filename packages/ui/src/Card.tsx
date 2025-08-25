import {
    CardActions,
    CardContent,
    Card as MuiCard,
    CardProps as MuiCardProps,
} from '@mui/material';

import { ReactNode } from 'react';

interface CardProps extends Omit<MuiCardProps, 'content' | 'actions'> {
    content: ReactNode;
    actions: ReactNode;
}

export const Card = ({ content, actions, ...rest }: CardProps) => {
    return (
        <MuiCard {...rest}>
            <CardContent>{content}</CardContent>
            <CardActions>{actions}</CardActions>
        </MuiCard>
    );
};
