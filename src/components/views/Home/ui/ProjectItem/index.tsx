import { FC, useEffect } from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { useSwiper, useSwiperSlide } from "swiper/react";

import { useStores } from "@/shared/context";

import { IProjectItemProps } from "../../types/projectItrem.interface";

import s from "./styles.module.sass";
import { PlusIcon } from "@/components/ui/PlusIcon";
import { Button } from "@/components/ui/Button";

const ProjectItem: FC<IProjectItemProps> = ({ title, year, img }) => {

  return (
    <div className={s.projectItem}>
      <div className={s.imageWrapper}>
        <Button size="large" variable="rounded" className={s.btn}>
          <PlusIcon />
        </Button>
        <Image src={img.src} alt={title} fill />
      </div>
      <div className={s.text}>
        <h5>{title}</h5>
        <h6>{year}</h6>
      </div>
    </div>
  );
};

export default ProjectItem;
