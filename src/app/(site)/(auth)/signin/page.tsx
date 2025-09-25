'use client';

import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Nicktio",
};

export default function SigninPage() {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />
      <Signin />
    </>
  );
}
