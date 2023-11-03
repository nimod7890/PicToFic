import { Typography } from "@mui/material";
import ModalLayout from "../../common/ModalLayout";
import FileDropZone from "../../common/FileDropZone";

type StoryCreateModalProps = {
  onClose: () => void;
};

export default function StoryCreateModal({ onClose }: StoryCreateModalProps) {
  return (
    <ModalLayout onClose={onClose}>
      <Typography variant="subtitle1" textAlign="center">
        Create new story
      </Typography>
      <FileDropZone onFileDrop={file => console.log(file)} />
    </ModalLayout>
  );
}
