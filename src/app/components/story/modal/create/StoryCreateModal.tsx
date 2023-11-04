import { Box } from "@mui/material";
import ModalLayout from "../../../common/ModalLayout";
import ImageInputStep from "./ImageInputStep";
import StoryCreateModalHeader from "./StoryCreateModalHeader";
import { ContentStep } from "../../@hooks/useStoryCreateModal";
import useStoryCreateModal from "../../@hooks/useStoryCreateModal";
import ImageCropStep from "./ImageCropStep";
import StoryUploadStep from "./StoryUploadStep";

type StoryCreateModalProps = {
  onClose: () => void;
};

export default function StoryCreateModal({ onClose }: StoryCreateModalProps) {
  const { contentStep, stepHandler, inputImageStep, cropImageStep, uploadStoryStep } =
    useStoryCreateModal();

  return (
    <ModalLayout onClose={onClose}>
      <StoryCreateModalHeader {...stepHandler} />
      <Box height="300px">
        {(() => {
          switch (contentStep) {
            case ContentStep.InputImage:
              return <ImageInputStep {...inputImageStep} />;
            case ContentStep.CropImage:
              return <ImageCropStep {...cropImageStep} />;
            case ContentStep.UploadStory:
            default:
              return <StoryUploadStep {...uploadStoryStep} />;
          }
        })()}
      </Box>
    </ModalLayout>
  );
}
