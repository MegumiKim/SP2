import * as API from "../API/index.mjs";
import * as template from "../templates/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const navBtn = document.querySelector("#navBtn");
  if (container) {
    container.clearHTML();

    const name = tool.getParam("name");

    try {
      const data = await API.fetchSingleUser(name);
      const myBids = await render.myBids();

      template.postMyPage(data, container);
      render.myListings();
      render.myWins(data, myBids);
      render.myFavorites();
      navBtn.src = data.avatar;
    } catch (e) {
      render.userAlert(
        container,
        "Fail to fetch data, please refresh the page.",
        "secondary"
      );
      console.warn(e);
    }
  }
};
