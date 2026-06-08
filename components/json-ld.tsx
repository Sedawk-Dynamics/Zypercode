/**
 * Renders one or more JSON-LD blocks as <script type="application/ld+json">.
 * Server-component safe. Each block is emitted separately so Google's
 * Rich Results test parses them independently.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inject; values come from our own config/content.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
