import moment from "moment";
import "moment/locale/ko";

export default function momentSetting() {
  /**
   * update start of week as Monday
   */
  moment.updateLocale("ko", {
    week: {
      dow: 1,
    },
  });
}
