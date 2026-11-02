import { createFileRoute } from "@tanstack/react-router";
import { CTA, FAQ } from "@/components/sections";
import { PageHeader } from "@/components/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ — Goodreads Listopia Promotion | Jasmine Rose", "Answers about Goodreads Listopia, timelines, genres, rankings and how many lists your book will join."),
  component: () => (<><PageHeader eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ /><CTA /></>),
});
