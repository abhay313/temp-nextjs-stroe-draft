"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActiveLink = pathname === link.href;
        const variant = isActiveLink ? "default" : "ghost";
        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
