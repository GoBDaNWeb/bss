import Head from "next/head";
import { Project } from "@/components/views/Project";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import he from "he";

export const getStaticPaths = (async () => {
  const res = await fetch("https://adm.bss-tv.com/video/");
  const data = await res.json();

  const paths = data.map((project: any) => ({
    params: {
      slug: project.DETAIL_PAGE_URL.replace("/video/", "").slice(0, -1),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const res = await fetch("https://adm.bss-tv.com/video/");
  const data = await res.json();
  const project = data.filter((project: any) => {
    return (
      project.DETAIL_PAGE_URL.replace("/video/", "").slice(0, -1) ===
      //@ts-ignore
      context.params?.slug
    );
  });

  return { props: { project, revalidate: 60 } };
}) satisfies GetStaticProps<{
  project: any;
}>;

// export const getServerSideProps = (async (context) => {
//   const res = await fetch("https://adm.bss-tv.com/projects/");
//   const data = await res.json();
//   const project = data.filter((project: any) => {
//     return project.DETAIL_PAGE_URL === context.params?.slug;
//   });

//   return { props: { project } };
// }) satisfies GetServerSideProps<{
//   project: any;
// }>;

const ProjectPage = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Big Screen Show - {project && project[0].NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project project={project[0]} />
    </>
  );
};

export default ProjectPage;
