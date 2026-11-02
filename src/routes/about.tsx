import { createFileRoute } from "@tanstack/react-router";
import { About, CTA, WhyChoose } from "@/components/sections";
import { PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Jasmine Rose — Goodreads Listopia Specialist", "Meet Jasmine Rose, the book researcher helping indie and traditionally published authors gain exposure on Goodreads Listopia."),
  component: () => (<><PageHeader eyebrow="About" title="Meet Jasmine Rose" text="A book researcher devoted to helping readers find your story." /><About /><WhyChoose /><CTA /></>),
});
