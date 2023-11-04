export default function validateImage(file: File): boolean {
  const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];

  if (file && validImageTypes.includes(file.type)) {
    return true;
  }
  console.error("Invalid file type. Only Image available.");
  return false;
}
