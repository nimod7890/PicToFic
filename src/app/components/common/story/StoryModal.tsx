import { useEffect } from "react";
import Story from "./Story";
import ModalLayout from "../ModalLayout";

export default function StoryModal({ storyId, onClose }: { storyId: number; onClose: () => void }) {
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
