import validateImage from "../@utils/validateImage";

export type UseImageInputType = ReturnType<typeof useImageInput>;

export default function useImageInput({
  inputImage,
  goNextStep,
}: {
  inputImage: (image: File) => void;
  goNextStep: () => void;
}) {
  const handleImageInput = (file: File) => {
    if (!validateImage(file)) {
      return;
    }

    inputImage(file);
    goNextStep();
  };

  return { onImageInput: handleImageInput };
}
