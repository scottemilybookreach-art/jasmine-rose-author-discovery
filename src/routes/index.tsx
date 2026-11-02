import { createFileRoute } from "@tanstack/react-router";
import { About, CTA, FAQ, Hero, HowItWorks, Services, SuccessStories, WhyChoose, WhyListopia } from "@/components/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Jasmine Rose — Goodreads Listopia Promotion for Authors", "Jasmine Rose helps authors get their books seen on relevant Goodreads Listopia lists so real readers discover them organically."),
  component: () => (
    <>
      <Hero /><About /><WhyListopia /><Services /><WhyChoose /><SuccessStories /><HowItWorks /><FAQ /><CTA />
    </>
  ),
});
