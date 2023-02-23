import { makeBid } from "../../API/listings/bid.mjs";
import { singleEntry } from "../../renders/singleEntry.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { save } from "../../storage/local.mjs";
import { getMyCredits } from "../../tools/getMyCredits.mjs";
import { getParam } from "../../tools/getParam.mjs";

export async function makeBidListener(event) {
  event.preventDefault();
  const id = getParam("id");
  const form = event.target;
  const formData = new FormData(form);
  const error = document.querySelector("#user-alert");
  const closeBtn = document.querySelector("#close-modal-btn");

  let payload = Object.fromEntries(formData.entries());
  payload.amount = parseInt(payload.amount);

  try {
    await makeBid(id, payload);
    const myCredits = await getMyCredits();
    save("credits", myCredits);
    singleEntry();
    form.reset();
    closeBtn.click();
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}