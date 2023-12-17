import { API_KEY } from '$env/static/private';
export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch(
		`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=${API_KEY}`
	);
	const item = await res.json();
	// console.log(item);
	return { item };
}
