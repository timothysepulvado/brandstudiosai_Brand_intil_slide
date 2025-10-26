import Head from "next/head";
import dynamic from "next/dynamic";

const BrandIntelligenceDiagram = dynamic(() => import("../components/BrandIntelligenceDiagram"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>BrandStudios.ai • Investor View</title>
        <meta name="description" content="Brand Intelligence Engine – multi-tenant creative pipeline with evaluators and headless delivery." />
      </Head>
      <main className="min-h-screen bg-[#F5F1EB]">
        <BrandIntelligenceDiagram />
      </main>
    </>
  );
}
