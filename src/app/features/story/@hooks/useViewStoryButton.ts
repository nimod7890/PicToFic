import { useState, useCallback, useEffect } from "react";
import { getStoryPagePath } from "../../../routes/routePath";

export default function useViewStoryButton({ storyId }: { storyId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    window.history.pushState(null, "", getStoryPagePath(storyId));
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    window.history.back();
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handlePopState = () => setIsModalOpen(false);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
}
