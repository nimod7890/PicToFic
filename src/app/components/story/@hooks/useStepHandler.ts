import { ContentStep } from "./useStoryCreateModal";

export type UseStepHandlerType = ReturnType<typeof useStepHandler>;

export default function useStepHandler({
  contentStep,
  goPreviousStep,
  goNextStep,
  resetImage,
}: {
  contentStep: ContentStep;
  goPreviousStep: () => void;
  goNextStep: () => void;
  resetImage: () => void;
}) {
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
        console.log("save");
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
