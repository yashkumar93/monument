import type { Metadata } from "next";
import { GetPricing } from "@/components/get-pricing";

export const metadata: Metadata = {
  title: "Get Pricing — Monument Solutions",
  description:
    "A 2-minute call. A real number. No sales theatre. Arrange your AI Discussion with Monument.",
};

export default function GetPricingPage() {
  return (
    <main>
      <GetPricing />
    </main>
  );
}
