import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ContactMap from "../ContactMap";
import ContactItem from "../ContactItem";

const ContactsSection = () => {
  return (
    <section className={s.section}>
      <div className={`${s.contactsInfo} container`}>
        <SectionTitle label="Контакты" color="black" />
        <div className={s.contactsInfoContent}>
          <div className={s.address}>
            <h6>Адрес</h6>
            <p>
              г. Москва, Алтуфьевское шоссе, дом 37, стр.1 Логистический центр
              &quot;Аврора&quot;
            </p>
          </div>
          <div className={s.contactsList}>
            <ContactItem
              title="Телефоны для связи"
              links={["+7 (900) 845-14-41", "+7 (903) 796-24-14"]}
            />
            <ContactItem title="Email" links={["infi@bss-tv.com"]} isMail />
            <ContactItem title="Факс" links={["+7 (495) 931-99-09"]} />
            <ContactItem
              title="Финансовый отдел"
              links={["+7 (495) 600-06-38"]}
            />
          </div>
        </div>
      </div>
      <ContactMap />
    </section>
  );
};

export default ContactsSection;