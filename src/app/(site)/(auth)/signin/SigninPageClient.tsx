'use client';

import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function SigninPageClient() {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />
      <Signin />
    </>
  );
}
