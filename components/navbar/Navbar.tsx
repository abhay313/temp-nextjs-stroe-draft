import React, { Suspense } from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import LinkDropdown from "./LinkDropdown";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
      <Logo />
      <Suspense>
        <NavSearch />
      </Suspense>
      <div className="flex gap-4 items-center">
        <CartButton />
        <DarkMode />
        <LinkDropdown />
      </div>
    </Container>
  );
}

export default Navbar;
