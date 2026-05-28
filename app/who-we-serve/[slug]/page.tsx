import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DetailPage from "@/components/detail-page"
import { getContent, getSlugs } from "@/lib/site-content"

export function generateStaticParams() {
  return getSlugs("who-we-serve")
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const content = getContent("who-we-serve", slug)
  if (!content) return { title: "Who We Serve | Zyphercode" }
  return {
    title: `${content.title} | Zyphercode`,
    description: content.intro,
    openGraph: { title: `${content.title} | Zyphercode`, description: content.intro, type: "website" },
  }
}

export default async function SegmentDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const content = getContent("who-we-serve", slug)
  if (!content) notFound()
  return <DetailPage content={content} />
}
