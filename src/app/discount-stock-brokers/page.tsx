import { permanentRedirect } from "next/navigation";

/** Paused until broker classifications have a documented source and review standard. */
export default function DiscountStockBrokersPage() {
  permanentRedirect("/brokers");
}
