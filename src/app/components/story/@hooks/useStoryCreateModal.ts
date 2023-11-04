import { useEffect, useState } from "react";
import useStepHandler from "./useStepHandler";
import useImageInput from "./useImageInput";
import useStoryUpload from "./useStoryUpload";
import useImageCrop from "./useImageCrop";

export type StoryCreateModalProps = ReturnType<typeof useStoryCreateModal>;

export default function useStoryCreateModal({ onClose }: { onClose: () => void }) {
  const [contentStep, setContentStep] = useState<ContentStep>(0);
  const [image, setImage] = useState<ImageFileType | undefined>(undefined);
  const [croppedImage, setCroppedImage] = useState<ImageFileType | undefined>(image);

  // header
  const stepHandler = useStepHandler({
    contentStep,
    goNextStep,
    goPreviousStep,
    resetImage,
    uploadStory,
  });

  // content
  const inputImageStep = useImageInput({ inputImage, goNextStep });
  const cropImageStep = useImageCrop({ croppedImage, setCroppedImage });
  const uploadStoryStep = useStoryUpload({ image: croppedImage });

  useEffect(() => {
    if (image) {
      setCroppedImage(image);
    }
  }, [image]);

  function inputImage(file: File) {
    const imageUrl = URL.createObjectURL(file);
    const newImage: ImageFileType = { imageUrl, file };
    setImage(newImage);
  }

  function goNextStep() {
    setContentStep(step => step + 1);
  }

  function goPreviousStep() {
    setContentStep(step => step - 1);
  }

  function resetImage() {
    setImage(undefined);
  }

  function uploadStory() {
    onClose();
  }

  return {
    contentStep,
    stepHandler,
    inputImageStep,
    cropImageStep,
    uploadStoryStep,
  };
}

export const enum ContentStep {
  InputImage = 0,
  CropImage = 1,
  UploadStory = 2,
}

export type ImageFileType = { imageUrl: string; file: File };
