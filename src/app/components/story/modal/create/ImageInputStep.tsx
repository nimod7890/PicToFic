import { Button, Stack, Typography } from "@mui/material";
import logoIcon from "../../../../assets/logoPink.svg";
import useFileInput from "../../../../hooks/useFileInput";
import { UseImageInputType } from "../../@hooks/useImageInput";

export default function ImageInputStep({ onImageInput }: UseImageInputType) {
  const { dropZoneProps, handleFileInput } = useFileInput({ onFileInput: onImageInput });

  return (
    <Stack {...dropZoneProps}>
      <img src={logoIcon} height={"80px"} />
      <Typography variant="h6">Drag a photo here</Typography>
      <input
        id="raised-button-file"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileInput}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
}
