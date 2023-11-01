import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, Zoom, IconButton, DialogContent } from "@mui/material";

type ModalLayoutProps = { onClose: () => void; children: ReactNode };

export default function ModalLayout({ onClose, children }: ModalLayoutProps) {
  return (
    <Dialog
      keepMounted
      open
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      TransitionComponent={Zoom}
      PaperProps={{
        style: {
          minWidth: "300px",
          maxHeight: "max-content",
          overflow: "auto",
        },
      }}
    >
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
      <DialogContent sx={{ padding: "28px" }}>{children}</DialogContent>
    </Dialog>
  );
}
