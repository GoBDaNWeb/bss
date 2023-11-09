import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import ProductSwiper from "./../ProductSwiper/index";
import Specifications from "../Specifications";
import Interactive from "../Interactive";
import Certificates from "../Certificates";
import Projects from "../Projects";
import { Calculator } from "../Calculator";
import { useGetProduct } from "@/shared/hooks";
import { FC } from "react";

const Product: FC<any> = ({ product }) => {
  const breadcrumbs = [
    {
      label: "Главная",
      link: "/",
    },
    {
      label: "Оборудование",
      link: "/catalog",
    },
    {
      label: product.CONTENT["Заголовок"],
    },
  ];

  return (
    <div className={s.product}>
      <Calculator />
      <Breadcrumbs items={breadcrumbs} />
      <div className={s.top}>
        <Title variant="h2" className="container">
          {product.CONTENT["Заголовок"]}
        </Title>
        <span className={s.type}>{product.NAME}</span>
      </div>
      <div className={s.content}>
        <div className={s.swiperWrapper}>
          <ProductSwiper images={product.CONTENT["Картинки"]} />
        </div>
        <Specifications specifications={product.CONTENT["Характеристики"]} />
        <Interactive />
        <Certificates сertificates={product.CONTENT["Сертификаты"]} />
      </div>
      <Projects projects={product.CONTENT["Проекты"]} />
    </div>
  );
};

export default Product;
