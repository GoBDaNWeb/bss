import { useEffect, useState } from "react";

import { catalogList } from "../../data/catalogList";

import s from "./styles.module.sass";

import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import AccordionContent from "../AccordionContent";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import MobileMenu from "../MobileMenu";
import { observer } from "mobx-react-lite";
import { useStores } from "@/shared/context";
import { OutlineArrowRight } from "@/components/ui/OutlineArrowRight";

const breadcrumbs = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Оборудование",
  },
];

const Catalog = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  const [selectedCatalog, setSelectedCatalog] = useState<number>(0);

  const { catalog } = useStores();

  const toggleAccordion = (index: number) => {
    setSelectedAccordion(index);
  };

  const toggleCatalog = (index: number) => {
    setSelectedCatalog(index);
  };

  useEffect(() => {
    toggleAccordion(0);
  }, [selectedCatalog]);

  const handleOpenMenu = () => {
    catalog.handleOpenMenu();
  };

  return (
    <div className={s.catalog}>
      <Breadcrumbs items={breadcrumbs} className={s.bread} />
      <div className={s.top}>
        <Title variant="h2" className="container">
          оборудование
        </Title>
      </div>
      <div className={s.catalogContent}>
        <MobileMenu toggleCatalog={setSelectedCatalog} />
        <div className={s.modalBtnWrapper}>
          <Button
            onClick={handleOpenMenu}
            size="medium"
            variable="clear"
            ariaLabel="open-modal"
          >
            <span>{catalog.currentCatalogItem.title}</span>
            <OutlineArrowRight />
          </Button>
        </div>
        <div className={s.catalogList}>
          {catalogList.map((catalogItem, index) => {
            const buttonClass = `${s.catalogBtn} ${
              selectedCatalog === index ? s.active : ""
            }`;
            return (
              <Button
                key={catalogItem.id}
                count={catalogItem.content.length}
                size="medium"
                variable="clear"
                className={buttonClass}
                onClick={() => toggleCatalog(index)}
                ariaLabel="product"
              >
                {catalogItem.title}
              </Button>
            );
          })}
        </div>
        <div className={s.info}>
          {catalogList[selectedCatalog].content.map((accordion, index) => (
            <Accordion
              key={accordion.id}
              isShow={selectedAccordion === index}
              title={accordion.title}
              onClick={() => toggleAccordion(index)}
              count={accordion.equipments.length}
            >
              <AccordionContent accordion={accordion} />
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(Catalog);
