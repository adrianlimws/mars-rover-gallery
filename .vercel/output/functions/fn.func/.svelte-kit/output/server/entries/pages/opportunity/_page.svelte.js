import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { L as Lightbox } from "../../../chunks/GalleryThumbnail.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $solStore, $$unsubscribe_solStore;
  const solStore = writable(1);
  $$unsubscribe_solStore = subscribe(solStore, (value) => $solStore = value);
  let { sol } = $$props;
  let photos = [];
  async function fetchData() {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sol}&api_key=Y539x3gNFZbriWjlPKavmFxgZojJYtHxFZcoQ1Ku`);
      const responseData = await response.json();
      photos = responseData.photos || [];
      return photos;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  if ($$props.sol === void 0 && $$bindings.sol && sol !== void 0)
    $$bindings.sol(sol);
  {
    {
      sol = $solStore;
      fetchData();
    }
  }
  $$unsubscribe_solStore();
  return `<div class="navbar border-t-2 border-b-2 border-slate-700 text-white"><div class="navbar-start">${photos.length > 0 ? `<span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Rover:
				<p class="font-semibold">${escape(photos[0].rover.name)}</p></span> <span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Status:
				<span class="uppercase"><p class="font-semibold">${escape(photos[0].rover.status)}</p></span></span> <span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Last Contact:
				<p class="font-semibold">${escape(new Date(photos[0].rover.max_date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }))}</p></span>` : ``}</div> <div class="navbar-center"><div class="relative flex items-center max-w-[18rem]" role="group"><button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-slate-600 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" data-svelte-h="svelte-1nj7fcg"><svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16"><path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"></path></svg></button> <input type="text" id="sol-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" requiblue${add_attribute("value", sol, 0)}> <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse" data-svelte-h="svelte-gka1gc"><svg class="w-3.5 h-3.5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg> <span>Sol</span></div> <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-slate-600 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" data-svelte-h="svelte-yf9v46"><svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16"><path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path></svg></button></div></div> <div class="navbar-end">${photos.length > 0 ? `<span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Image Count:
				<p class="font-semibold">${escape(photos[0].rover.total_photos)}</p></span> <span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Duration(SOLs):
				<p class="font-semibold">${escape(photos[0].rover.max_sol)}</p></span> <span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Launch Date:
				<p class="font-semibold">${escape(new Date(photos[0].rover.launch_date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }))}</p></span> <span class="text-slate-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg border border-slate-400 text-center">Landing Date:
				<p class="font-semibold">${escape(new Date(photos[0].rover.landing_date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }))}</p></span>` : ``}</div></div> ${photos.length !== 0 ? `<div class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-3 m-3">${each(photos, (photo) => {
    return `${validate_component(Lightbox, "Lightbox").$$render(
      $$result,
      {
        description: `Image taken by ${photo.rover.name} on SOL ${photo.sol} with ${photo.camera.full_name}, Earth date: ${photo.earth_date}`
      },
      {},
      {
        default: () => {
          return `<img class="w-full h-auto max-w-xl rounded-lg hover:scale-110 transition duration-300 cursor-pointer"${add_attribute("src", photo.img_src, 0)}${add_attribute("alt", `Image taken by ${photo.rover.name} on SOL ${photo.sol} with ${photo.camera.full_name}, Earth date: ${photo.earth_date}`, 0)}> `;
        }
      }
    )}`;
  })}</div>` : `<div class="min-h-screen text-center p-6 text-white"><h1 class="text-5xl font-bold">The rover did not take any images during SOL ${escape(sol)}.</h1> <p class="py-4 text-4xl" data-svelte-h="svelte-3wjkms">Please try another SOL number.</p></div>`}`;
});
export {
  Page as default
};
