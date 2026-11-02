import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy | Jasmine Rose", "How Jasmine Rose collects, uses and protects information shared by authors."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-20 text-lg leading-relaxed text-muted-foreground">
        <p>Your privacy matters. This website does not sell or share your personal information.</p>
        <h2 className="text-3xl font-semibold text-primary">Information I collect</h2>
        <p>When you email me, I receive your name, email address and details about your book. This is used only to provide my services and communicate with you.</p>
        <h2 className="text-3xl font-semibold text-primary">Your choices</h2>
        <p>You may request that your information be deleted at any time by emailing <a className="text-primary underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </article>
    </>
  ),
});
