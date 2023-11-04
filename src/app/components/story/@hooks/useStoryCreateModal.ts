import { useState } from "react";
import useStepHandler from "./useStepHandler";
import useImageInput from "./useImageInput";

export type StoryCreateModalProps = ReturnType<typeof useStoryCreateModal>;

export default function useStoryCreateModal() {
  const [contentStep, setContentStep] = useState<ContentStep>(0);
  const [image, setImage] = useState<ImageFileType | undefined>(undefined);

  const goNextStep = () => {
    setContentStep(step => step + 1);
  };

  const goPreviousStep = () => {
    setContentStep(step => step - 11);
  };

  const resetImage = () => {
    setImage(undefined);
  };

  const inputImage = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setImage({ imageUrl, file });
  };

  const stepHandler = useStepHandler({ contentStep, goNextStep, goPreviousStep, resetImage });
  const imageInputStep = useImageInput({ inputImage, goNextStep });

  return {
    image,
    setImage,
    contentStep,
    setContentStep,
    stepHandler,
    imageInputStep,
  };
}

export const enum ContentStep {
  FileInput = 0,
  FileCrop = 1,
  FileUpload = 2,
}

export type ImageFileType = { imageUrl: string; file: File };

export type ImageFileUploaderProps = {
  onImageInput: ({ imageUrl, file }: ImageFileType) => void;
};
