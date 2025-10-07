import {
    type ModalProps as MuiModalProps,
    Modal as MuiModal,
} from '@mui/material';

export const Modal = ({ open, onClose, children, ...rest }: MuiModalProps) => {
    return (
        <MuiModal open={open} onClose={onClose} {...rest}>
            {children}
        </MuiModal>
    );
};
