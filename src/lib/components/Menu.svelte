<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	let showImages: boolean = true;
	let showDrinks: boolean = false;

	type VariantDetails = {
		name: string | null;
		price: number | null;
	};

	type AddonDetails = {
		name: string;
		price: number;
	};

	type DishDetails = {
		id: number;
		img: string | null;
		name: string;
		quantity: string | null;
		type: string | null;
		description: string;
		variants: VariantDetails[];
		price: number | null;
		addons: AddonDetails[];
	};

	type DrinkDetails = {
		id: number;
		img: string | null;
		name: string;
		quantity: string | null;
		type: string | null;
		size: string | null;
		description: string | null;
		variants: any[];
		price: number | null;
	};

	let foodMenu: { [key: string]: DishDetails[] } = {
		'small plates': [
			{
				id: 1,
				img: '/menu/dishes/small-plates/vegetarian-spring-rolls',
				name: 'Vegetarian Spring Rolls',
				quantity: '2',
				type: null,
				description:
					'Egg roll wrapped shredded sweet potato, cabbage, taro, and clear vermicelli served with nuoc cham sauce. Hot, super crispy, and addictive!',
				variants: [],
				price: 9,
				addons: []
			},
			{
				id: 2,
				img: '/menu/dishes/small-plates/salad-rolls',
				name: 'Salad Rolls',
				quantity: '2',
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
				img: '/menu/dishes/small-plates/papaya-salad',
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
				img: '/menu/dishes/small-plates/chicken-wings',
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
				img: '/menu/dishes/small-plates/braised-pork-belly',
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
				img: null,
				name: 'Beef Carpaccio',
				quantity: null,
				type: 'Bo Tai Chanh',
				description:
					'Thin sliced rare beef in a lime, sesame, fish sauce marinade with mint, cilantro and crispy fried shallots. served with tortilla chips and shrimp chips.',
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
				img: '/menu/dishes/small-plates/stir-fry-veggies',
				name: 'Stir-Fry Veggies',
				quantity: null,
				type: null,
				description:
					'Chefs choice veggies stir fried in a mushroom "oyster" sauce. You can’t go wrong with a side of veggies this good.',
				variants: [],
				price: 11,
				addons: []
			},
			{
				id: 10,
				img: null,
				name: 'Fried Wonton',
				quantity: null,
				type: null,
				description: 'Chicken wonton, fried and served with sweet chili sauce.',
				variants: [],
				price: 12,
				addons: []
			},
			{
				id: 11,
				img: null,
				name: 'Steamed wonton',
				quantity: null,
				type: null,
				description:
					'Chicken wonton, steamed and served in house made soy sauce vinaigrette and chili oil.',
				variants: [],
				price: 12,
				addons: []
			}
		],
		soups: [
			{
				id: 1,
				img: '/menu/dishes/soups/beef-pho',
				name: 'Beef Pho',
				quantity: null,
				type: null,
				description:
					'Beef brisket, pho rice noodles, onions, thai basil, and cilantro in beef pho broth.',
				variants: [
					{ name: 'Mini', price: 11 },
					{ name: 'Large', price: 19 }
				],
				price: null,
				addons: []
			},
			{
				id: 2,
				img: '/menu/dishes/soups/king-oyster-mushrooms',
				name: 'king oyster mushrooms',
				quantity: null,
				type: 'GF',
				description:
					'Steamed king oyster mushroom in a spicy, fragrant lemongrass, ginger, kaffir lime leaf and thai chili broth. Packs a whole lot of heat and a whole lot of flavor!',
				variants: [],
				price: 12,
				addons: []
			},
			{
				id: 3,
				img: null,
				name: 'Wonton Noodle',
				quantity: null,
				type: null,
				description:
					'Egg Noodle, chicken wonton, bok choy, shitake mushroom in chicken broth served with a side of house made chili oil.',
				variants: [],
				price: 18,
				addons: []
			}
		],
		'rice plates': [
			{
				id: 1,
				img: null,
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
				id: 2,
				img: null,
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
				id: 3,
				img: null,
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
				id: 4,
				img: null,
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
				id: 5,
				img: null,
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
				id: 1,
				img: null,
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
				id: 2,
				img: null,
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
				id: 3,
				img: null,
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
				id: 4,
				img: null,
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
				id: 5,
				img: null,
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
				id: 1,
				img: '/menu/dishes/specialty-items/saigon-taco',
				name: 'Saigon Taco',
				quantity: '1',
				type: null,
				description:
					'Saigon aioli, spicy mayo, pickled red cabbage, green papaya, carrots, and cilantro. Street food staple with a saigon twist.',
				variants: [
					{ name: 'Pork', price: 8 },
					{ name: 'Beef', price: 8 },
					{ name: 'Chicken', price: 8 },
					{ name: 'Tofu', price: 8 },
					{ name: null, price: 8 },
					{ name: 'Shrimp', price: 10 }
				],
				price: null,
				addons: []
			},
			{
				id: 2,
				img: '/menu/dishes/specialty-items/saigon-sliders',
				name: 'Saigon Sliders',
				quantity: '2',
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
				id: 3,
				img: null,
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
				id: 4,
				img: null,
				name: 'Vanilla Ice Cream',
				quantity: '1 SCOOP',
				type: null,
				description:
					'A refreshing scoop of classic vanilla ice cream, perfect for a sweet finish to any meal.',
				variants: [],
				price: 3.5,
				addons: []
			}
		]
	};

	let drinkMenu: { [key: string]: DrinkDetails[] } = {
		'signature-cocktails': [
			{
				id: 1,
				img: '/menu/drinks/signature-cocktails/spill-the-tea',
				name: 'Spill The Tea',
				quantity: 'serves 2ppl',
				type: null,
				size: '5.5 oz',
				description:
					'House infused chrysanthemum Luksusowa Vodka, orange and brandy liqueur, honey, lemon juice. a refreshing citrussy vodka based cocktail with floral chrysanthemum tea notes. served chilled in a beautiful tea pot for 2. spill the tea, but sip it slow!',
				variants: [],
				price: 32
			},
			{
				id: 2,
				img: '/menu/drinks/signature-cocktails/mangos-in-the-market',
				name: 'Mangos in the market',
				quantity: null,
				type: null,
				size: '3 oz',
				description:
					'El Jimador Tequila, Malibu Coconut Rum, Mezcal, Mango nectar, lime juice, chili salted rim. Inspired by travels in Vietnam, where street vendors serve fresh sliced mango with chili salt. Bringing the perfect pairing to the Byward Market!',
				variants: [],
				price: 18
			},
			{
				id: 3,
				img: `/menu/drinks/signature-cocktails/pop-it-like-its-hot`,
				name: "Pop it like it's hot",
				quantity: null,
				type: null,
				size: '1.5 oz',
				description: `Luksusowa Vodka, Saigon iced tea, Popping boba. First of it's kind in Ottawa! Refreshing and delicious bubble tea made for fun adults.`,
				variants: [],
				price: 16
			},
			{
				id: 4,
				img: '/menu/drinks/signature-cocktails/good-morning-vietnam',
				name: 'Good morning, Vietnam!',
				quantity: null,
				type: null,
				size: '2 oz',
				description:
					'Luksusowa vodka, Vietnamese phin dripped espresso, Tia Maria, non-dairy milk (oat). Our rendition of an espresso martini boasts the bold flavors of Vietnamese style brewed coffee.',
				variants: [],
				price: 16
			},
			{
				id: 5,
				img: '/menu/drinks/signature-cocktails/saigon-mai-tai',
				name: 'Saigon Mai Tai',
				quantity: null,
				type: null,
				size: '2 oz',
				description:
					'Flor de Cana 5yr dark rum, triple sec, lime juice, lime leaf syrup, orgeat syrup. in house kaffir lime leaf syrup completely changes up the complexities of this classic Tiki cocktail.',
				variants: [],
				price: 17
			},
			{
				id: 6,
				img: '/menu/drinks/signature-cocktails/tiger-shrike',
				name: 'Tiger Shrike',
				quantity: null,
				type: null,
				size: '2 oz',
				description:
					'Beefeater gin, Campari, lychee, lemon, simple syrup. One of our most popular signature-cocktails is fruity, refreshing and fragrant.',
				variants: [],
				price: 16
			},
			{
				id: 7,
				img: '/menu/drinks/signature-cocktails/pho-old-fashioned',
				name: 'Pho Old Fashioned',
				quantity: null,
				type: null,
				size: '2 oz',
				description:
					'Old Forester Bourbon, brown sugar, home made pho bitters, angostura bitters. over 6 different aromatics creates a new and unforgettable experience for old fashioned lovers.',
				variants: [],
				price: 17
			},
			{
				id: 8,
				img: '/menu/drinks/signature-cocktails/ume-sour',
				name: 'Ume Sour',
				quantity: null,
				type: null,
				size: '2.5 oz',
				description: `Choya umeshu liqueur, Jack Daniel's, lemon, egg white, simple syrup. if you like amaretto or whiskey sours, you’ll love this drink.`,
				variants: [],
				price: 17
			},
			{
				id: 9,
				img: '/menu/drinks/signature-cocktails/district-1-mojito',
				name: 'District 1 Mojito',
				quantity: null,
				type: null,
				size: '1.5 oz',
				description:
					'Flor de Cana 5yr Dark Rum, home made tamarind syrup, lime, fresh mint, club soda. a homage to the tamarind trees that were planted in District 1 of Saigon in the early 1900s and are still protected to this day.',
				variants: [],
				price: 15
			}
		],
		'classic cocktails': [
			{
				id: 10,
				img: null,
				name: 'Negroni',
				quantity: null,
				type: null,
				size: '2 oz',
				description: 'Beefeater gin, sweet vermouth, Campari, orange zest',
				variants: [],
				price: 16
			},
			{
				id: 11,
				img: null,
				name: 'Martini',
				quantity: null,
				type: 'classic or dirty',
				size: '3 oz',
				description:
					'Beefeater gin (or Luksusowa vodka), Dolin dry vermouth, bitters, lemon twist (or olives)',
				variants: [],
				price: 16
			},
			{
				id: 12,
				img: null,
				name: 'Manhattan',
				quantity: null,
				type: null,
				size: '3 oz',
				description: 'Old Forester Bourbon Whiskey, sweet vermouth, bitters',
				variants: [],
				price: 16
			},
			{
				id: 13,
				img: null,
				name: `Dark N' Stormy`,
				quantity: null,
				type: null,
				size: '1.5 oz',
				description: 'Goslings Bermuda black seal rum, ginger beer, lime',
				variants: [],
				price: 16
			},
			{
				id: 14,
				img: null,
				name: 'Cosmopolitan',
				quantity: null,
				type: null,
				size: '2.25 oz',
				description: 'Luksusowa Vodka, triple sec, lemon juice, cranberry juice',
				variants: [],
				price: 16
			},
			{
				id: 15,
				img: null,
				name: 'Margarita',
				quantity: null,
				type: null,
				size: '2.5 oz',
				description: 'El Jimador Blanco Tequila, triple sec, lime, salted rim',
				variants: [],
				price: 16
			}
		],
		'da basics': [
			{
				id: 1,
				img: null,
				name: 'Mixed Bar Rail',
				quantity: null,
				type: null,
				size: null,
				description:
					'Luksusowa Vodka, Flor De Cana 5 Yr Rum, El Jimador Tequila Blanco, Jack Daniels Whiskey, Beefeater Gin',
				variants: [
					{ name: null, size: 'Single', price: 10 },
					{ name: null, size: 'Double', price: 16 }
				],
				price: null
			},
			{
				id: 2,
				img: null,
				name: 'Bar Rail Shots',
				quantity: null,
				type: null,
				size: null,
				description:
					'Luksusowa Vodka, Flor De Cana 5 Yr Rum, El Jimador Tequila Blanco, Jack Daniels Whiskey, Beefeater Gin',
				variants: [],
				price: 8
			}
		],
		beer: [
			{
				id: 1,
				img: null,
				name: 'Asahi',
				quantity: 'Bottle',
				type: null,
				size: null,
				description: 'Japan',
				variants: [],
				price: 9
			},
			{
				id: 2,
				img: null,
				name: 'Bud Light',
				quantity: 'Bottle',
				type: null,
				size: null,
				description: 'America',
				variants: [],
				price: 9
			},
			{
				id: 3,
				img: null,
				name: 'Stella Artois',
				quantity: 'Bottle',
				type: null,
				size: null,
				description: 'Belgium',
				variants: [],
				price: 9
			},
			{
				id: 4,
				img: null,
				name: 'Corona',
				quantity: 'Bottle',
				type: null,
				size: null,
				description: 'Mexico',
				variants: [],
				price: 9
			},
			{
				id: 5,
				img: null,
				name: 'Red Stripe',
				quantity: 'Bottle',
				type: null,
				size: null,
				description: 'Jamaica',
				variants: [],
				price: 9
			},
			{
				id: 6,
				img: null,
				name: 'Blood Orange',
				quantity: 'Tall Can',
				type: null,
				size: null,
				description: 'Ontario',
				variants: [],
				price: 12
			}
		],
		wine: [
			{
				id: 1,
				img: null,
				name: 'Two oceans cabernet sauvignon merlot',
				quantity: null,
				type: 'Red',
				size: null,
				description: null,
				variants: [
					{ name: null, size: '5 oz', price: 8 },
					{ name: null, size: 'Bottle', price: 36 }
				],
				price: null
			},
			{
				id: 2,
				img: null,
				name: 'Nederburg shiraz',
				quantity: null,
				type: 'Red',
				size: null,
				description: null,
				variants: [
					{ name: null, size: '5 oz', price: 9.5 },
					{ name: null, size: 'Bottle', price: 42 }
				],
				price: null
			},
			{
				id: 3,
				img: null,
				name: 'Two oceans sauvignon blanc',
				quantity: null,
				type: 'White',
				size: null,
				description: null,
				variants: [
					{ name: null, size: '5 oz', price: 8 },
					{ name: null, size: 'Bottle', price: 36 }
				],
				price: null
			},
			{
				id: 4,
				img: null,
				name: 'Fleur du cap chardonnay',
				quantity: null,
				type: 'White',
				size: null,
				description: null,
				variants: [
					{ name: null, size: '5 oz', price: 9.5 },
					{ name: null, size: 'Bottle', price: 42 }
				],
				price: null
			},
			{
				id: 5,
				img: null,
				name: 'Adobe reserva organic rose',
				quantity: null,
				type: null,
				size: null,
				description: null,
				variants: [
					{ name: null, size: '5 oz', price: 10.5 },
					{ name: null, size: 'Bottle', price: 48 }
				],
				price: null
			}
		],
		mocktails: [
			{
				id: 1,
				img: null,
				name: 'Enlightened lemonade',
				quantity: null,
				type: null,
				size: null,
				description: 'lychee, lemon, simple, club soda',
				variants: [],
				price: 10
			},
			{
				id: 2,
				img: null,
				name: 'Fineapple',
				quantity: null,
				type: null,
				size: null,
				description: 'pineapple, lime, orgeat, chili salt rim',
				variants: [],
				price: 10
			},
			{
				id: 3,
				img: null,
				name: '"no whiskey" sour',
				quantity: null,
				type: null,
				size: null,
				description: 'Apple juice, lemon, simple, egg white, angostura',
				variants: [],
				price: 10
			},
			{
				id: 4,
				img: null,
				name: 'no rum no problem',
				quantity: null,
				type: null,
				size: null,
				description: 'Tamarind, lime, mint, club soda',
				variants: [],
				price: 10
			}
		],
		'non-alcoholic': [
			{
				id: 1,
				img: null,
				name: 'Pop',
				quantity: null,
				type: null,
				size: null,
				description: 'coke, diet coke, ginger ale, nestea',
				variants: [],
				price: 3.5
			},
			{
				id: 2,
				img: null,
				name: 'Juice',
				quantity: null,
				type: null,
				size: null,
				description: 'apple, pineapple, cranberry',
				variants: [],
				price: 4
			},
			{
				id: 3,
				img: null,
				name: 'Perrier',
				quantity: null,
				type: null,
				size: null,
				description: 'sparkling water',
				variants: [],
				price: 4
			},
			{
				id: 4,
				img: null,
				name: 'Vietnamese iced coffee',
				quantity: null,
				type: null,
				size: null,
				description: 'Vietnamese drip coffee, robusta arabica blend, condensed milk',
				variants: [],
				price: 8
			},
			{
				id: 5,
				img: null,
				name: 'Saigon iced tea',
				quantity: null,
				type: null,
				size: null,
				description: 'in house brewed lemon iced tea',
				variants: [],
				price: 7
			},
			{
				id: 6,
				img: null,
				name: 'Limeade soda',
				quantity: null,
				type: 'chanh soda',
				size: null,
				description: 'lime, sugar, club soda',
				variants: [],
				price: 7
			},
			{
				id: 7,
				img: null,
				name: 'Salted lime soda',
				quantity: null,
				type: 'chanh muoi soda',
				size: null,
				description: 'salted lime, club soda',
				variants: [],
				price: 7
			},
			{
				id: 8,
				img: null,
				name: 'Tea',
				quantity: null,
				type: 'chanh muoi soda',
				size: null,
				description: null,
				variants: [
					{ name: 'green tea, earl grey, jasmine', size: null, price: 3 },
					{ name: 'chrysanthemum', size: null, price: 5 }
				],
				price: null
			}
		]
	};
</script>

<section class="flex flex-col items-center gap-8" id="menu">
	<div class="flex flex-wrap items-center justify-center gap-2">
		<button
			type="button"
			class="w-32 select-none rounded border py-2 {showDrinks ? '' : ' border-theme-primary '}"
			on:click={() => (showDrinks = false)}
		>
			FOOD
		</button>
		<button
			type="button"
			class="w-32 select-none rounded border py-2 {showDrinks ? ' border-theme-primary' : ''}"
			on:click={() => (showDrinks = true)}
		>
			DRINKS
		</button>
	</div>

	<button
		type="button"
		class="w-30 hidden select-none whitespace-nowrap rounded border border-[#474747] px-4 py-2 text-gray-300 motion-safe:inline-block"
		on:click={() => (showImages = !showImages)}
	>
		{#if showImages}
			Hide Images
		{:else}
			Show Images
		{/if}
	</button>

	{#key showDrinks}
		<div class="grid gap-12 md:gap-24" transition:fade={{ duration: 150 }}>
			{#if !showDrinks}
				<!-- food menu -->
				{#each Object.entries(foodMenu) as [category, items]}
					<section class="grid gap-4">
						<h2
							class="text-center text-3xl font-bold text-theme-secondary selection:bg-[#FFFF00] selection:text-theme-background"
						>
							{category.toUpperCase()}
						</h2>
						<ul class="flex flex-wrap justify-center gap-4">
							{#each items as item (item.id)}
								<li
									class="flex w-full max-w-[380px] flex-col gap-1 rounded-md border border-[#474747] p-2"
								>
									<!-- if menu item contains an image -->
									{#if showImages && item.img}
										<figure
											class="flex flex-col gap-2"
											transition:slide={{ duration: 150, delay: 0 }}
										>
											<picture class="overflow-hidden rounded-md">
												<source srcset="{item.img}.avif" type="image/avif" />
												<source srcset="{item.img}.webp" type="image/webp" />
												<img
													loading="lazy"
													class="{item.img.includes('Beef Pho') ||
													item.img.includes('King Oyster Mushrooms')
														? 'object-left-bottom'
														: ''} motion-safe:transition-scale h-[320px] w-full max-w-[380px] object-cover motion-safe:duration-200 motion-safe:hover:scale-150"
													src="{item.img}.webp"
													alt={item.name}
												/>
											</picture>

											<figcaption class="text-center">
												<strong class="text-lg font-bold text-theme-secondary">
													{item.name.toUpperCase()}
													{#if item.type}({item.type.toUpperCase()}){/if}
													{#if item.quantity}({item.quantity}){/if}
												</strong>
											</figcaption>
										</figure>
									{:else}
										<!-- if menu item does not contain an image -->
										<strong class="text-lg font-bold text-theme-secondary">
											{item.name.toUpperCase()}
											{#if item.type}({item.type.toUpperCase()}){/if}
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
										<span> {addon.name} + <strong> ${addon.price}</strong></span>
									{/each}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			{:else}
				<!-- drinks menu -->
				{#each Object.entries(drinkMenu) as [category, items]}
					<section class="grid gap-4">
						<h2
							class="text-center text-3xl font-bold text-theme-secondary selection:bg-[#FFFF00] selection:text-theme-background"
						>
							{category.toUpperCase()}
						</h2>
						<ul class="flex flex-wrap justify-center gap-4">
							{#each items as item (item.id)}
								<li
									class="flex w-full max-w-[380px] flex-col gap-1 rounded-md border border-[#474747] p-2"
								>
									{#if showImages && item.img}
										<figure
											class="flex flex-col gap-2"
											transition:slide={{ duration: 150, delay: 0 }}
										>
											<picture>
												<source srcset="{item.img}.avif" type="image/avif" />
												<source srcset="{item.img}.webp" type="image/webp" />
												<img
													loading="lazy"
													class="h-[320px] w-full max-w-[380px] object-cover"
													src="{item.img}.webp"
													alt={item.name}
												/>
											</picture>
											<figcaption class="text-center">
												<strong class="text-lg font-bold text-theme-secondary">
													{item.name.toUpperCase()}
													{#if item.type}({item.type.toUpperCase()}){/if}
													{#if item.quantity}({item.quantity.toUpperCase()}){/if}
												</strong>
											</figcaption>
										</figure>
									{:else}
										<!-- if menu item does not contain an image -->
										<strong class="text-lg font-bold text-theme-secondary">
											{item.name.toUpperCase()}
											{#if item.type}({item.type.toUpperCase()}){/if}
											{#if item.quantity}({item.quantity.toUpperCase()}){/if}
										</strong>
									{/if}

									<p>
										{#if item.size}({item.size}){/if}
										{#if item.description}{item.description}{/if}
									</p>

									<!-- regular item price -->
									{#if item.price}
										<strong>${item.price}</strong>
									{/if}

									{#each item.variants as variant}
										<p>
											{#if variant.name}
												{variant.name}
											{/if}
											{#if variant.size}
												{variant.size}
											{/if}
											{#if variant.name == 'chrysanthemum' || variant.name == 'green tea, earl grey, jasmine'}
												<br />
											{/if}
											{#if variant.price}<strong>${variant.price}</strong>{/if}
										</p>
									{/each}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			{/if}
		</div>
	{/key}
</section>

<style>
</style>
