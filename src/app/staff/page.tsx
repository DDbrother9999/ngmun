import { redirect } from "next/navigation";
import { FEATURES } from "@/config/features";
import StaffContent from "./StaffContent";

export default function Staff() {
  if (!FEATURES.SHOW_STAFF) {
    redirect("/");
  }

  return <StaffContent/>;
}
