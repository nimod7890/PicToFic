import moment from "moment";
import useAppRepository from "../../../hooks/useAppRepository";
import { ImageListSchema } from "../../../types/image";

const mockImages: ImageListSchema = Array.from({ length: 5 }).map(() => ({
  id: 1,
  summary:
    "Dolore est ad nostrud id dolor. Sit ea consectetur labore et ea voluptate in do sit. Ut commodo deserunt laboris esse sint mollit amet labore officia irure eu cupidatat officia. Id non velit anim labore deserunt sint magna deserunt reprehenderit laboris ea ea consequat sit. Aute ullamco laborum cillum cillum eu occaecat ullamco sint reprehenderit amet irure laboris veniam amet.",
  likesCount: 321,
  isLiked: true,
  picturedAt: moment(new Date()).format("YY.M.D dddd"),
}));

const mockImages2: ImageListSchema = Array.from({ length: 5 }).map(() => ({
  id: 1,
  summary:
    "Consequat cillum quis reprehenderit non laboris sunt proident nulla cillum. Esse est veniam do commodo velit dolor esse. Ipsum duis fugiat ullamco do. Officia nulla veniam culpa minim eu laborum cillum minim sint irure. Sit irure est ea est nulla labore mollit dolor adipisicing sint commodo magna aute excepteur. Deserunt laborum quis esse culpa magna consequat laboris pariatur adipisicing sint minim reprehenderit qui amet. Aute aute non ex eiusmod .",
  likesCount: 321,
  isLiked: true,
  picturedAt: moment(new Date()).format("YY.M.D dddd"),
}));

export default function useUserPage() {
  const { user } = useAppRepository();

  return { user, images: [...mockImages, ...mockImages2] };
}