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
      case ContentStep.FileCrop: {
        resetImage();
        break;
      }
      case ContentStep.FileUpload: {
        break;
      }
      case ContentStep.FileInput:
      default:
        return;
    }
    goPreviousStep();
  };

  const handleNextButtonClick = () => {
    switch (contentStep) {
      case ContentStep.FileUpload: {
        console.log("save");
        break;
      }
      case ContentStep.FileCrop: {
        break;
      }
      case ContentStep.FileInput:
      default:
        return;
    }
    goNextStep();
  };

  return { contentStep, handleBackButtonClick, handleNextButtonClick };
}
