import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DetailPage from "@/components/detail-page"
import { getContent, getSlugs } from "@/lib/site-content"

export function generateStaticParams() {
  return getSlugs("services")
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const content = getContent("services", slug)
  if (!content) return { title: "Service | Zyphercode" }
  return {
    title: `${content.title} | Zyphercode`,
    description: content.intro,
    openGraph: { title: `${content.title} | Zyphercode`, description: content.intro, type: "website" },
  }
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const content = getContent("services", slug)
  if (!content) notFound()
  return <DetailPage content={content} />
}
