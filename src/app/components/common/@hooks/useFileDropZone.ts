import React, { useState } from "react";
import { neutral, primary } from "../../../styles/colors";

type useFileDropZoneProps = { onFileDrop: (file: File) => void };

export default function useFileDropZone({ onFileDrop }: useFileDropZoneProps) {
  const [dragOver, setDragOver] = useState(false);

  const preventDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaults(event);
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaults(event);

    setDragOver(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaults(event);
    if (!dragOver) {
      setDragOver(true);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    preventDefaults(event);

    const files = event.dataTransfer.files;

    if (files && files.length > 0) {
      onFileDrop(files[0]);
    }
    setDragOver(false);
  };

  const dropZonStyles = {
    height: "300px",
    border: `2px dashed ${neutral[80]}`,
    transition: "background-color 0.3s ease",
    justifyContent: "center",
    ...(dragOver && {
      backgroundColor: primary[20],
      color: neutral[100],
    }),
  };
  return {
    dropZonStyles: {
      sx: dropZonStyles,
      onDrop: handleDrop,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
    },
  };
}
