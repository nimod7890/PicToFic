import { IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import StoryCreateModal from "../../story/modal/StoryCreateModal";

export default function StoryCreateButton() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <IconButton onClick={handleOpenModal}>
        <AddBoxIcon />
      </IconButton>
      {isOpenModal && <StoryCreateModal onClose={handleCloseModal} />}
    </>
  );
}
