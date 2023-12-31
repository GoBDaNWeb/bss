import { clientsList } from "../../data/clientsList";

import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ClientItem from "../ClientItem";
import { useGetClients } from "@/shared/hooks";

const ClientsSection = () => {
  const { clients } = useGetClients();

  return (
    <section className={s.section}>
      <div className="container">
        <SectionTitle label="Клиенты" />
      </div>

      <div className={s.clientsListWrapper}>
        <div className={`${s.clientsList} ${s.reverse}`}>
          {/* {clientsList.reverse().map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
          {clientsList.map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))} */}
          {clients &&
            //@ts-ignore
            clients[0].LOGO.reverse().map((client) => (
              <ClientItem key={client} img={client} />
            ))}
          {clients &&
            //@ts-ignore
            clients[0].LOGO.map((client) => (
              <ClientItem key={client} img={client} />
            ))}
        </div>
        <div className={s.clientsList}>
          {clients &&
            //@ts-ignore
            clients[1].LOGO.reverse().map((client) => (
              <ClientItem key={client} img={client} />
            ))}
          {clients &&
            //@ts-ignore
            clients[1].LOGO.map((client) => (
              <ClientItem key={client} img={client} />
            ))}
          {/* {clientsList.map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))}
          {clientsList.reverse().map((client) => (
            <ClientItem key={client.id} img={client.img} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
