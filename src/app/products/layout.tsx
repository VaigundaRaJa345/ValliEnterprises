import type { Metadata, ResolvingMetadata } from "next";
import { getDynamicIntent } from "@/lib/seo";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedSearchParams = (await searchParams) || {};
  const query = (resolvedSearchParams.q as string) || (resolvedSearchParams.intent as string) || "";
  const dynamicIntent = getDynamicIntent(query);
  
  return {
    title: `Valli Enterprises | ${dynamicIntent.pageTitle}`,
    description: dynamicIntent.pageDescription,
    keywords: [`${query}`, "RO Service Chennai", "Water Softener Expert Chennai", "Valli Enterprises"],
  };
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
