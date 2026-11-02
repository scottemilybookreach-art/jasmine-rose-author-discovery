import { createFileRoute } from "@tanstack/react-router";
import { CTA, HowItWorks } from "@/components/sections";
import { PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Jasmine Rose — Get Your Book Discovered", "Email Jasmine Rose at jasminerosebookresearch@gmail.com to start promoting your book on Goodreads Listopia."),
  component: () => (<><PageHeader eyebrow="Contact" title="Let's Get Your Book Discovered" text="Tell me about your book and I'll reply personally." /><CTA /><HowItWorks /></>),
});
