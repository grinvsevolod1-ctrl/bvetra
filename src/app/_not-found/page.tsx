import NotFoundPageClient from "./NotFoundPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Nicktio",
};

export const dynamic = "force-dynamic";

export default function NotFoundPage() {
  return <NotFoundPageClient />;
}
