import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { HEADER_LINKS } from "@/config";
import Link from "next/link";

export default function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          aria-label="Toggle menu"
          variant='ghost'
        >
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={20} className='min-w-40'>
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} asChild>
            <Link href={link.href} className='flex items-center gap-4'>
              {link.icon}
              <div className="capitalize">{link.key}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}