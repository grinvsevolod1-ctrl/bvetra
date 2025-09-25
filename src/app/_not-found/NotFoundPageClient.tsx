'use client';

import NotFound from "@/components/NotFound";
import HeroSub from "@/components/SharedComponents/HeroSub";

export default function NotFoundPageClient() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "404" },
  ];

  return (
    <>
      <HeroSub
        title="404"
        description="We Can't Seem to Find The Page You're Looking For"
        breadcrumbLinks={breadcrumbLinks}
      />
      <NotFound />
    </>
  );
}
