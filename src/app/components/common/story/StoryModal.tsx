import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useEffect } from "react";
import Story from "./Story";

import CloseIcon from "@mui/icons-material/Close";

export default function StoryModal({ storyId, onClose }: { storyId: number; onClose: () => void }) {
  useEffect(() => {
    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  return (
    <Dialog keepMounted open onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle variant="h5" sx={{ alignItems: "center", justifyContent: "space-between" }}>
        Story
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 12, top: 12 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Story storyId={storyId} />
      </DialogContent>
    </Dialog>
  );
}
