import { permanentRedirect } from "next/navigation";

/** Paused until F&O membership has a documented source and review standard. */
export default function FnoBrokersPage() {
  permanentRedirect("/brokers");
}
