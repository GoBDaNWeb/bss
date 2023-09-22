import Head from "next/head";
import { Projects } from "@/components/views/Projects";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Big Screen Show - Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectPage;