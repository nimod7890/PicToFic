import ImageCardGrid from "../components/common/image/ImageCardGrid";
import useUserPage from "../features/user/@hooks/useUserPage";

export default function UserPage() {
  const { images } = useUserPage();

  return (
    <>
      <ImageCardGrid images={images} />
    </>
  );
}
