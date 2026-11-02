import { createFileRoute } from "@tanstack/react-router";
import { CTA, HowItWorks, Services, WhyListopia } from "@/components/sections";
import { PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => seo("Services — Goodreads List Research & Submission | Jasmine Rose", "Goodreads list research, book submission, visibility optimization, personalized strategy and author support."),
  component: () => (<><PageHeader eyebrow="Services" title="My Services" text="Thoughtful, human-led Listopia promotion tailored to your book." /><Services /><WhyListopia /><HowItWorks /><CTA /></>),
});
