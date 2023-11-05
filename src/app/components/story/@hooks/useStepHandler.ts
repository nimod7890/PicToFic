import { ContentStep } from "./useStoryCreateModal";

export type UseStepHandlerType = ReturnType<typeof useStepHandler>;

type UseStepHandlerProps = {
  contentStep: ContentStep;
  goPreviousStep: () => void;
  goNextStep: () => void;
  resetImage: () => void;
  uploadStory: () => void;
  disabledNextStepButton: boolean;
};

export default function useStepHandler({
  contentStep,
  goPreviousStep,
  goNextStep,
  resetImage,
  uploadStory,
  disabledNextStepButton,
}: UseStepHandlerProps) {
  const handleBackButtonClick = () => {
    switch (contentStep) {
      case ContentStep.InputImage:
        break;
      case ContentStep.CropImage: {
        resetImage();
        goPreviousStep();
        break;
      }
      case ContentStep.UploadStory: {
        goPreviousStep();
        break;
      }
    }
  };

  const handleRightButtonClick = () => {
    switch (contentStep) {
      case ContentStep.InputImage:
        break;
      case ContentStep.CropImage: {
        goNextStep();
        break;
      }
      case ContentStep.UploadStory: {
        uploadStory();
        break;
      }
    }
  };

  return {
    contentStep,
    disabledNextStepButton,
    onBackButtonClick: handleBackButtonClick,
    onRightButtonClick: handleRightButtonClick,
  };
}
