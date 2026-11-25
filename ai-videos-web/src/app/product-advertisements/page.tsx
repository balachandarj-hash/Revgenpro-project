import { redirect } from "next/navigation";

/** Product video landing now lives at `/`. */
export default function ProductAdvertisementsRedirect() {
  redirect("/");
}
