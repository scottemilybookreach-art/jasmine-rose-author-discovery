import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms of Service | Jasmine Rose", "Terms for Goodreads Listopia research and submission services provided by Jasmine Rose."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-20 text-lg leading-relaxed text-muted-foreground">
        <p>By working with Jasmine Rose you agree to the following terms.</p>
        <h2 className="text-3xl font-semibold text-primary">Services</h2>
        <p>I research and submit books to relevant Goodreads Listopia lists. Rankings depend on genuine reader votes and cannot be guaranteed.</p>
        <h2 className="text-3xl font-semibold text-primary">Independence</h2>
        <p>This service is independent and not affiliated with or endorsed by Goodreads or Amazon.</p>
        <h2 className="text-3xl font-semibold text-primary">Questions</h2>
        <p>Contact <a className="text-primary underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </article>
    </>
  ),
});
