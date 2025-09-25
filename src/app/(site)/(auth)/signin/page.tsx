import SigninPageClient from "./SigninPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Nicktio",
};

export default function SigninPage() {
  return <SigninPageClient />;
}
