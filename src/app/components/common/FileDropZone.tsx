import { Stack, Typography } from "@mui/material";
import logoIcon from "../../assets/logoPink.svg";
import useFileDropZone from "./@hooks/useFileDropZone";

type FileDropZoneProps = {
  onFileDrop: (file: File) => void;
};

export default function FileDropZone({ onFileDrop }: FileDropZoneProps) {
  const { dropZonStyles } = useFileDropZone({ onFileDrop });

  return (
    <Stack {...dropZonStyles}>
      <img src={logoIcon} height={"100px"} />
      <Typography variant="h6" textAlign="center">
        Drag a photo here
      </Typography>
    </Stack>
  );
}
