import { createFileRoute } from "@tanstack/react-router";
import { CTA, SuccessStories } from "@/components/sections";
import { PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/success-stories")({
  head: () => seo("Success Stories — Real Goodreads Results | Jasmine Rose", "See real author feedback and Goodreads Listopia rankings achieved with Jasmine Rose."),
  component: () => (<><PageHeader eyebrow="Success Stories" title="Real Results from Real Authors" /><SuccessStories /><CTA /></>),
});
