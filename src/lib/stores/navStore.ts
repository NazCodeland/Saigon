import { type Writable, writable } from 'svelte/store';

export const navStore: Writable<boolean> = writable(true);

export function toggleNav() {
	navStore.update((value) => {
		return (value = !value);
	});
}
