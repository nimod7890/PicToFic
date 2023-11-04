import { useEffect, useState } from "react";
import useStepHandler from "./useStepHandler";
import useImageInput from "./useImageInput";
import useStoryUpload from "./useStoryUpload";
import useImageCrop from "./useImageCrop";

export type StoryCreateModalProps = ReturnType<typeof useStoryCreateModal>;

export default function useStoryCreateModal() {
  const [contentStep, setContentStep] = useState<ContentStep>(0);
  const [image, setImage] = useState<ImageFileType | undefined>(undefined);
  const [croppedImage, setCroppedImage] = useState<ImageFileType | undefined>(image);

  useEffect(() => {
    if (image) {
      setCroppedImage(image);
    }
  }, [image]);

  const goNextStep = () => {
    setContentStep(step => step + 1);
  };

  const goPreviousStep = () => {
    setContentStep(step => step - 1);
  };

  const resetImage = () => {
    setImage(undefined);
  };

  const inputImage = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setImage({ imageUrl, file });
  };

  const stepHandler = useStepHandler({ contentStep, goNextStep, goPreviousStep, resetImage });

  const inputImageStep = useImageInput({ inputImage, goNextStep });
  const cropImageStep = useImageCrop({
    croppedImage: croppedImage as ImageFileType,
    setCroppedImage,
  });
  const uploadStoryStep = useStoryUpload({ croppedImage: croppedImage as ImageFileType });

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
