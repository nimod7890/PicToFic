import { Box } from "@mui/material";
import ModalLayout from "../../../common/ModalLayout";
import ImageInputStep from "./ImageInputStep";
import StoryCreateModalHeader from "./StoryCreateModalHeader";
import useStoryCreateModal, { ContentStep } from "../../@hooks/useStoryCreateModal";

type StoryCreateModalProps = {
  onClose: () => void;
};

export default function StoryCreateModal({ onClose }: StoryCreateModalProps) {
  const { image, contentStep, stepHandler, imageInputStep } = useStoryCreateModal();

  return (
    <ModalLayout onClose={onClose}>
      <StoryCreateModalHeader {...stepHandler} />
      <Box height="300px">
        {(() => {
          switch (contentStep) {
            case ContentStep.FileInput:
              return <ImageInputStep {...imageInputStep} />;
            case ContentStep.FileCrop:
              return image?.imageUrl;
            case ContentStep.FileUpload:
            default:
              return "upload";
          }
        })()}
      </Box>
    </ModalLayout>
  );
}
