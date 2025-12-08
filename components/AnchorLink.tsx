"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnchorLink({ href, children, className }: AnchorLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Handle scroll when arriving at page with hash
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100; // Account for sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(href, window.location.origin);
    const hash = url.hash;

    // If it's a same-page anchor link, let the browser handle it
    if (url.pathname === pathname && hash) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      return;
    }

    // If navigating to a different page with an anchor
    if (hash && url.pathname !== pathname) {
      e.preventDefault();
      router.push(href);
      // Scroll will be handled by useEffect when page loads
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}





