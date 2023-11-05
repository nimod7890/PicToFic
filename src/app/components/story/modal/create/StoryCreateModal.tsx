import { Box } from "@mui/material";
import StoryCreateModalHeader from "./StoryCreateModalHeader";
import ImageInputStep from "./ImageInputStep";
import ImageCropStep from "./ImageCropStep";
import StoryUploadStep from "./StoryUploadStep";
import ModalLayout from "../../../common/ModalLayout";
import useStoryCreateModal from "../../@hooks/useStoryCreateModal";
import { ContentStep } from "../../@hooks/useStoryCreateModal";
import { modalSize } from "../../../../constants/globalSizes";

type StoryCreateModalProps = {
  onClose: () => void;
};

export default function StoryCreateModal({ onClose }: StoryCreateModalProps) {
  const {
    isImageExists,
    contentStep,
    stepHandler,
    inputImageStep,
    cropImageStep,
    uploadStoryStep,
  } = useStoryCreateModal({ onClose });

  return (
    <ModalLayout onClose={onClose}>
      <StoryCreateModalHeader {...stepHandler} />
      <Box height={modalSize}>
        {(() => {
          switch (contentStep) {
            case ContentStep.InputImage:
              return <ImageInputStep {...inputImageStep} />;
            case ContentStep.CropImage: {
              if (!isImageExists) {
                return "loading";
              }
              return <ImageCropStep {...cropImageStep} />;
            }
            case ContentStep.UploadStory: {
              if (!isImageExists) {
                return "loading";
              }
              return <StoryUploadStep {...uploadStoryStep} />;
            }
          }
        })()}
      </Box>
    </ModalLayout>
  );
}
