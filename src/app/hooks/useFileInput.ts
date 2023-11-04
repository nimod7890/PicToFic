import React, { useState } from "react";
import { neutral, primary } from "../styles/colors";

export default function useFileInput({ onFileInput }: { onFileInput: (File: File) => void }) {
  const [dragOver, setDragOver] = useState(false);

  // handling file uploads with <input />
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  // handling file uploads with <Dropzone />
  const handleDrop = (event: React.DragEvent) => {
    preventDefaults(event);

    const files = event.dataTransfer.files;
    handleFileUpload(files);
    setDragOver(false);
  };

  // handling file uploads
  function handleFileUpload(files: FileList | null) {
    if (!files || files.length === 0) {
      console.error("No files uploaded. Please try again.");
      return;
    }

    const file = files[0];
    onFileInput(file);
  }

  function handleDragEnter(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    setDragOver(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    setDragOver(false);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    preventDefaults(event);
    if (!dragOver) {
      setDragOver(true);
    }
  }

  function preventDefaults(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  const dropZoneStyles = {
    height: "100%",
    border: `2px dashed ${neutral[80]}`,
    transition: "background-color 0.3s ease",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    ...(dragOver && {
      backgroundColor: primary[20],
      color: neutral[100],
    }),
  };

  return {
    dropZoneProps: {
      sx: dropZoneStyles,
      onDrop: handleDrop,
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
    },
    handleFileInput,
  };
}
