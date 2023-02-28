import { cloneTemplate } from "./cloneTemplate.mjs";
import * as render from "../renders/index.mjs";

export const postProductDescription = (data, parent) => {
  try {
    const doc = cloneTemplate("description-template");
    const bidHistoryContainer = doc.querySelector("#bid-history-container");

    render.renderBidHistory(data, bidHistoryContainer);

    doc.querySelector("p.description").innerText = data.description;
    doc.querySelector(".seller-name").innerText = data.seller.name;
    doc.querySelector(".email").innerText = data.seller.email;
    doc.querySelector("#seller-img").src = data.seller.avatar;

    parent.append(doc);
  } catch (e) {
    render.userAlert(parent, "Could not fetch data", "secondary");
    throw new Error(e);
  }
};
