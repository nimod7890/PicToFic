import { Box } from "@mui/material";
import { ReactNode } from "react";
import StoryModal from "../../../components/common/story/StoryModal";
import useViewStoryButton from "../@hooks/useViewStoryButton";

type ViewStoryButtonProps = { storyId: number; children: ReactNode };

export default function ViewStoryButton({ storyId, children }: ViewStoryButtonProps) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useViewStoryButton({ storyId });

  return (
    <>
      <Box onClick={handleOpenModal} sx={{ cursor: "pointer" }}>
        {children}
      </Box>
      {isModalOpen && <StoryModal storyId={storyId} onClose={handleCloseModal} />}
    </>
  );
}
