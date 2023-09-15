import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";
import { IButtonProps } from "../types/button.interface";

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  variable = "primary",
  size,
  className,
  onClick,
  count,
  isActive,
}) => {
  const btnClass = `${s.button} ${s[variable]} ${s[size]} ${className} ${
    isActive ? s.active : ""
  }`;

  return (
    <button className={btnClass} onClick={onClick}>
      <span className={s.text}>{children}</span>
      {count ? <span className={s.count}>{count}</span> : null}
    </button>
  );
};

export default Button;