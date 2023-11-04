import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Stack, IconButton, Typography, Button } from "@mui/material";
import { ContentStep } from "../../@hooks/useStoryCreateModal";
import { UseStepHandlerType } from "../../@hooks/useStepHandler";

export default function StoryCreateModalHeader({
  contentStep,
  onBackButtonClick,
  onRightButtonClick,
}: UseStepHandlerType) {
  return (
    <Stack
      direction="row"
      justifyContent={contentStep > 0 ? "space-between" : "center"}
      alignItems={"center"}
      paddingX="4px"
      height="32px"
    >
      {contentStep > 0 && (
        <IconButton onClick={onBackButtonClick} sx={{ width: "40px" }}>
          <ArrowBackRoundedIcon />
        </IconButton>
      )}
      <Typography variant="subtitle1" textAlign={"center"}>
        {(() => {
          switch (contentStep) {
            case ContentStep.CropImage:
              return "Crop";
            case ContentStep.InputImage:
            case ContentStep.UploadStory:
            default:
              return "Create new story";
          }
        })()}
      </Typography>
      {contentStep > 0 && (
        <Button
          sx={{ padding: "4px", minWidth: "fit-content", width: "40px" }}
          onClick={onRightButtonClick}
        >
          {contentStep === ContentStep.UploadStory ? "Create" : "Next"}
        </Button>
      )}
    </Stack>
  );
}
