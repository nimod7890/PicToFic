import { useEffect } from "react";
import Story from "../Story";
import ModalLayout from "../../common/ModalLayout";

type StoryModalProps = {
  storyId: number;
  onClose: () => void;
};

export default function StoryModal({ storyId, onClose }: StoryModalProps) {
  useEffect(() => {
    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  return (
    <ModalLayout onClose={onClose}>
      <Story storyId={storyId} />
    </ModalLayout>
  );
}
