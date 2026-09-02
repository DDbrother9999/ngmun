import { redirect } from "next/navigation";
import { FEATURES } from "@/config/features";
import CommitteesContent from "./CommitteesContent";

export default function CommitteesPage() {
  if (!FEATURES.SHOW_COMMITTEES) {
    redirect("/");
  }

  return <CommitteesContent/>;
}
