import { useEffect, useState } from "react";
import Link from "next/link";

import s from "./styles.module.sass";

import NavItem from "../NavItem";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { Burger } from "@/components/ui/Burger";
import { BurgerIcon } from "@/components/ui/BurgerIcon";

const Header = () => {
  const [active, setActive] = useState(false);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, []);

  const headerClass = `${s.header} ${active ? s.active : ""}`;

  return (
    <header className={headerClass}>
      <Link href="/" className={s.logoWrapper}>
        <LogoIcon className={s.logo} />
      </Link>
      <div className={s.headerContent}>
        <div className={s.top}>
          <NavItem link="#" label="infi@bss-tv.com" isMail />
          <NavItem link="#" label="+7 (900) 845-14-41" isPhone />
          <NavItem link="#" label="+7 (903) 796-24-14" isPhone />
          <div className={s.burger}>
            <span>Меню</span>
            <BurgerIcon />
          </div>
        </div>
        <div className={s.bottom}>
          <NavItem link="/projects" label="Проекты" />
          <NavItem link="/catalog" label="Оборудование" />
          <NavItem link="#" label="Видеостудия" />
          <NavItem link="/contacts" label="Контакты" />
          <NavItem link="#" label="Видеопроекционные комплексы" />
        </div>
      </div>
    </header>
  );
};

export default Header;
