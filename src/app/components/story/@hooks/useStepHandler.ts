import { ContentStep } from "./useStoryCreateModal";

export type UseStepHandlerType = ReturnType<typeof useStepHandler>;

type UseStepHandlerProps = {
  contentStep: ContentStep;
  goPreviousStep: () => void;
  goNextStep: () => void;
  resetImage: () => void;
  uploadStory: () => void;
};

export default function useStepHandler({
  contentStep,
  goPreviousStep,
  goNextStep,
  resetImage,
  uploadStory,
}: UseStepHandlerProps) {
  const handleBackButtonClick = () => {
    switch (contentStep) {
      case ContentStep.CropImage: {
        resetImage();
        break;
      }
      case ContentStep.UploadStory: {
        break;
      }
      default:
        return;
    }
    goPreviousStep();
  };

  const handleRightButtonClick = () => {
    switch (contentStep) {
      case ContentStep.UploadStory: {
        uploadStory();
        break;
      }
      case ContentStep.CropImage: {
        goNextStep();
        break;
      }
      default:
        return;
    }
  };

  return {
    contentStep,
    onBackButtonClick: handleBackButtonClick,
    onRightButtonClick: handleRightButtonClick,
  };
}
