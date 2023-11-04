import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, Zoom, IconButton, DialogContent } from "@mui/material";
import { modalMinimumSize } from "../../constants/globalSizes";

type ModalLayoutProps = {
  onClose: () => void;
  children: ReactNode;
  configs?: {
    isCloseButton?: boolean;
  };
};

export default function ModalLayout({ onClose, children, configs = {} }: ModalLayoutProps) {
  const { isCloseButton = false } = configs;

  return (
    <Dialog
      keepMounted
      open
      onClose={onClose}
      maxWidth="lg"
      TransitionComponent={Zoom}
      PaperProps={{
        style: {
          minWidth: modalMinimumSize,
          maxHeight: "max-content",
          overflow: "auto",
        },
      }}
    >
      {isCloseButton && (
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            width: "36px",
            height: "36px",
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent sx={{ padding: isCloseButton ? "28px" : 0 }}>{children}</DialogContent>
    </Dialog>
  );
}
