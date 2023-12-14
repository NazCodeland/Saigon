<script>
	import { slide } from 'svelte/transition';
	let showImages = true; // Add this line at the top of your script

	let menu = {
		'small plates': [
			{
				id: 1,
				img: '/menu/dishes/small plates/Vegetarian Spring Rolls.jpg',
				name: 'Vegetarian Spring Rolls',
				quantity: 2,
				type: null,
				description:
					'Egg roll wrapped shredded sweet potato, cabbage, taro, and clear vermicelli served with nuoc cham sauce. Hot, super crispy, and addictive!',
				variants: [],
				price: 9,
				addons: []
			},
			{
				id: 2,
				img: '/menu/dishes/small plates/Salad Rolls.jpg',
				name: 'Salad Rolls',
				quantity: 2,
				type: null,
				description:
					'Rice paper wrap with shredded lettuce, mint, vermicelli, served with house made hoisin based dipping sauce or nuoc cham sauce. A classic.',
				variants: [
					{ name: 'Grilled tofu', price: null },
					{ name: 'Grilled shrimp', price: null }
				],
				price: 10,
				addons: []
			},
			{
				id: 3,
				img: '/menu/dishes/small plates/Papaya Salad.jpg',
				name: 'Papaya Salad',
				quantity: null,
				type: 'GF',
				description:
					'Shredded green papaya, carrots, mango, chopped fresh mint served with nuoc cham dressing and shrimp chips. Light and refreshing!',
				variants: [],
				price: 10,
				addons: [{ name: 'Shrimp', price: 3 }]
			},
			{
				id: 4,
				img: '/menu/dishes/small plates/Chicken Wings.jpg',
				name: 'Chicken Wings',
				quantity: '5',
				type: null,
				description:
					'Deep fried chicken wings. Savory and delicious. Perfect addition while sipping on an ice cold beverage.',
				variants: [
					{
						name: 'Original Nuoc Cham sauce with chopped green onion and crispy fried shallots',
						price: null
					},
					{ name: 'Honey Soy Sauce with chopped green onion', price: null }
				],
				price: 10,
				addons: []
			},
			{
				id: 5,
				img: '/menu/dishes/small plates/Braised Pork Belly.jpg',
				name: 'Braised Pork Belly',
				quantity: 'Limited Quantity',
				type: null,
				description:
					'A classic dish for home cooked family meal. Juicy pork belly is caramelized and slow braised in fish sauce, served on a bed of jasmine rice. This is comfort food in the simplest form.',
				variants: [],
				price: 12,
				addons: []
			},
			{
				id: 6,
				img: '/menu/dishes/small plates/Bo Tai Tartare.jpg',
				name: 'Bo Tai Tartare',
				quantity: null,
				type: null,
				description:
					'Lean top round beef finely chopped and marinated. Topped with micro greens, crispy fried shallots and served with fresh tortilla chips. A classic Vietnamese "beef carpaccio" meets French techniques for an ultimate fusion experience.',
				variants: [],
				price: 19,
				addons: []
			},
			{
				id: 7,
				img: null,
				name: 'French Fries',
				quantity: null,
				type: null,
				description: '‘Nuff said...it’s fries. Served with our Saigon Aioli',
				variants: [],
				price: 7,
				addons: []
			},
			{
				id: 8,
				img: null,
				name: 'Chicken Chips',
				quantity: null,
				type: null,
				description:
					'Lightly breaded and deep fried chicken skins topped with shredded kaffir lime leaf. The best part about fried chicken is even greater with that drink you’re about to order.',
				variants: [],
				price: 8,
				addons: []
			},
			{
				id: 9,
				img: '/menu/dishes/small plates/Stir-Fry Veggies.jpg',
				name: 'Stir-Fry Veggies',
				quantity: null,
				type: null,
				description:
					'Chefs choice veggies stir fried in a mushroom "oyster" sauce. You can’t go wrong with a side of veggies this good.',
				variants: [],
				price: 11,
				addons: []
			}
		],
		soups: [
			{
				id: 10,
				img: '/menu/dishes/soups/Beef Pho.jpg',
				name: 'Beef Pho',
				quantity: null,
				type: null,
				description:
					'Beef brisket, pho rice noodles, onions, thai basil, and cilantro in beef pho broth.',
				variants: [
					{ name: 'Mini', price: 11 },
					{ name: 'Large', price: 19 }
				],
				addons: []
			},
			{
				id: 11,
				img: '/menu/dishes/soups/King Oyster Mushrooms.jpg',
				name: 'Beef Pho',
				quantity: null,
				type: 'GF',
				description:
					'Steamed king oyster mushroom in a spicy, fragrant lemongrass, ginger, kaffir lime leaf and thai chili broth. Packs a whole lot of heat and a whole lot of flavor!',
				variants: [],
				price: 12,
				addons: []
			}
		],
		'rice plates': [
			{
				id: 12,
				img: '',
				name: 'Grilled Chicken',
				quantity: null,
				type: null,
				description:
					'Grilled chicken, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 13,
				img: '',
				name: 'Grilled Beef',
				quantity: null,
				type: null,
				description:
					'Grilled beef, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 14,
				img: '',
				name: 'Grilled Pork',
				quantity: null,
				type: null,
				description:
					'Grilled pork, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 15,
				img: '',
				name: 'Grilled Shrimp',
				quantity: null,
				type: null,
				description:
					'Grilled shrimp, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 22,
				addons: []
			},
			{
				id: 16,
				img: '',
				name: 'Grilled Tofu',
				quantity: null,
				type: null,
				description:
					'Grilled tofu, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			}
		],
		'vermicelli plates': [
			{
				id: 17,
				img: '',
				name: 'Grilled Chicken',
				quantity: null,
				type: null,
				description:
					'Grilled chicken, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 18,
				img: '',
				name: 'Grilled Beef',
				quantity: null,
				type: null,
				description:
					'Grilled beef, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 19,
				img: '',
				name: 'Grilled Pork',
				quantity: null,
				type: null,
				description:
					'Grilled pork, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			},
			{
				id: 20,
				img: '',
				name: 'Grilled Shrimp',
				quantity: null,
				type: null,
				description:
					'Grilled shrimp, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 22,
				addons: []
			},
			{
				id: 21,
				img: '',
				name: 'Grilled Tofu',
				quantity: null,
				type: null,
				description:
					'Grilled tofu, 1 veggie spring roll and house greens served with nuoc cham sauce.',
				variants: [],
				price: 20,
				addons: []
			}
		],
		'specialty items': [
			{
				id: 22,
				img: '/menu/dishes/specialty items/Saigon Taco.jpg',
				name: 'Saigon Taco',
				quantity: 1,
				type: null,
				description:
					'Saigon aioli, spicy mayo, pickled red cabbage, green papaya, carrots, and cilantro. Street food staple with a saigon twist.',
				variants: [
					{ name: 'Pork', price: null },
					{ name: 'Beef', price: null },
					{ name: 'Chicken', price: null },
					{ name: 'Tofu', price: 8 },
					{ name: 'Shrimp', price: 10 }
				],
				price: null,
				addons: []
			},
			{
				id: 23,
				img: '/menu/dishes/specialty items/Saigon Sliders.jpg',
				name: 'Saigon Sliders',
				quantity: 2,
				type: null,
				description:
					'Juicy marinated pork patties with lettuce, pickled green papaya and carrots, and house spicy mayo on brioche buns, served with shrimp chips. Our most popular item, and for good reason...They’re delicious.',
				variants: [],
				price: 18,
				addons: []
			}
		],
		Dessert: [
			{
				id: 24,
				img: '',
				name: 'Deep Fried Banana',
				quantity: null,
				type: null,
				description:
					'Fresh banana, battered, deep fried and served with vanilla ice cream and a drizzle of honey. Mmmmm yum yum!',
				variants: [],
				price: 8,
				addons: []
			},
			{
				id: 25,
				img: '',
				name: 'Vanilla Ice Cream',
				quantity: '1 SCOOP',
				type: '',
				description:
					'A refreshing scoop of classic vanilla ice cream, perfect for a sweet finish to any meal.',
				variants: [],
				price: 3.5,
				addons: []
			}
		]
	};
</script>

<!-- Add a button or checkbox to toggle showImages -->
<!-- <button class="py-2 px-4 border-2 w-40 rounded" on:click={() => (showImages = !showImages)}>
		{#if showImages}
			Hide Images
		{:else}
			Show Images
		{/if}
	</button> -->
<div class="grid gap-8 md:gap-24" id="menu">
	{#each Object.entries(menu) as [category, items]}
		<section class="grid gap-4">
			<h2 class="text-theme-secondary text-3xl font-bold text-center">
				{category.toUpperCase()}
			</h2>

			<ul class="flex flex-wrap gap-4 justify-center">
				{#each items as item (item.id)}
					<li
						class="flex flex-col gap-1 border p-2 rounded-md border-gray-300 w-full max-w-[380px]"
					>
						<!-- if menu item contains an image -->
						{#if showImages && item.img}
							<figure class="flex flex-col gap-2" transition:slide={{ duration: 150, delay: 0 }}>
								<img
									class="object-cover w-full max-w-[380px] h-[320px]"
									src={item.img}
									alt={item.name}
								/>
								<!-- TODO: dishes without picture have Dish Name aligned:left, keep it that way or center all? -->
								<figcaption class="text-center">
									<strong class="font-bold text-theme-secondary text-lg">
										{item.name.toUpperCase()}
										{#if item.quantity}({item.quantity}){/if}
									</strong>
								</figcaption>
							</figure>
						{:else}
							<!-- TODO: have the dish names centered or aligned to the left? -->
							<!-- if menu item does not contain an image -->
							<strong class="font-bold text-theme-secondary text-lg">
								{item.name.toUpperCase()}
								{#if item.quantity}({item.quantity}){/if}
							</strong>
						{/if}

						<p>{item.description}</p>

						<!-- variants -->
						{#if item.variants.length > 0}
							<p>Choice of:</p>
						{/if}

						{#each item.variants as variant}
							{#if variant.name}
								<p>
									- {variant.name}
									{#if variant.price}<strong>${variant.price}</strong>{/if}
								</p>
							{/if}
						{/each}

						<!-- regular item price -->
						{#if item.price}
							<strong>${item.price}</strong>
						{/if}

						<!-- addons -->
						{#each item.addons as addon}
							<strong>{addon.name} - ${addon.price}</strong>
						{/each}
					</li>
					<hr />
				{/each}
			</ul>
		</section>
	{/each}
</div>

<!-- <br />
<br />
<br />
<p>GF - Gluten Free. Please let server know as some modifications will need to be made.</p>
<br />
<p>
	Reminder Statement *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may
	increase your risk of foodborne illness, especially if you have certain medical conditions.
</p>
-->

<style>
</style>
