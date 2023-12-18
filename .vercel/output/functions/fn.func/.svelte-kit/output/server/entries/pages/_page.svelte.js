import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const marsVideo = "/_app/immutable/assets/bg-vid-mars.PmnubJ34.mp4";
const HeroHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="hero min-h-screen" data-svelte-h="svelte-1acf2hj"><div class="absolute w-full h-full"><video class="w-full h-full object-cover"${add_attribute("src", marsVideo, 0)} type="video/mp4" autoplay muted loop></video></div> <div class="hero-overlay bg-opacity-100"></div> <div class="hero-content text-center text-white"><div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">Mars Rovers Gallery</h1> <p class="mb-5 text-lg">Showcasing images sent by NASA&#39;s mars rovers &quot;Curiosity&quot;, &quot;Opportunity&quot;, and &quot;Spirit&quot; since
				SOL 1.</p> <a class="btn btn-warning" href="/curiosity">Curiosity</a> <a class="btn btn-warning" href="/opportunity">Opportunity</a> <a class="btn btn-warning" href="/spirit">Spirit</a></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HeroHome, "Hero").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
