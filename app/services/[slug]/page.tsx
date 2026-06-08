import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DetailPage from "@/components/detail-page"
import { getContent, getSlugs, getPageSeo } from "@/lib/site-content"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return getSlugs("services")
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const content = getContent("services", slug)
  if (!content) {
    return { title: "Service Not Found | Zyphercode", robots: { index: false, follow: false } }
  }
  const seo = getPageSeo(slug)
  return pageMetadata({
    title: seo?.title ?? `${content.title} | Zyphercode`,
    description: seo?.description ?? content.intro,
    path: `/services/${slug}`,
    image: content.image,
    imageAlt: seo?.imageAlt ?? content.title,
  })
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const content = getContent("services", slug)
  if (!content) notFound()
  return <DetailPage content={content} />
}
