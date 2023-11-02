import { useParams } from "react-router-dom";
import Story from "../components/story/Story";

export default function StoryPage() {
  const { storyId } = useParams();
  if (!storyId) {
    return null;
  }

  return <Story storyId={storyId} />;
}
