import * as render from "../renders/index.mjs";
export async function renderOffsetListings(listings, offset) {
  const container = document.querySelector("#listings-container");
  try {
    container.clearHTML();
    const limit = offset + 12;
    const offsetListing = listings.slice(offset, limit);
    render.renderCards(offsetListing, container);
  } catch (e) {
    render.userAlert(container, "failed to fetch data");
    throw new Error(e);
  }
}
