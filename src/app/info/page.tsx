import { redirect } from "next/navigation";
import { FEATURES } from "@/config/features";
import EventInfoContent from "./EventInfoContent";

export default function EventInfo() {
  if (!FEATURES.SHOW_EVENT_INFO) {
    redirect("/");
  }

  return <EventInfoContent/>;
}
