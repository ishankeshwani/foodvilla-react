export const mockRestaurantData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "327498",
              name: "La Pino'z Pizza",
              city: "Bhavnagar",
              locality: "Aaron Ghogha Circle",
              areaName: "Jawahar Ground",
              costForTwo: 40000,
              costForTwoMessage: "₹400 for two",
              cuisines: ["Pizzas", "Pastas", "Beverages"],
              avgRating: 4.5,
              avgRatingString: "4.5",
              totalRatingsString: "4.8K+ ratings",
              totalRatings: 4800,
              veg: true,
              sla: {
                deliveryTime: 20,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                slaString: "20-25 MINS",
                lastMileTravelString: "4.5 km",
              },
              availability: {
                opened: true,
                nextCloseTime: "2026-05-13 01:00:00",
              },
              labels: [
                { title: "Address", message: "Shop No 3 Earth Aaron Ghogha Circle Road Bhavnagar" },
                { title: "Cuisines", message: "Pizzas, Pastas, Beverages" },
              ],
              aggregatedDiscountInfoV2: {
                header: "Flat ₹166 Off",
                shortDescriptionList: [
                  { meta: "Flat ₹166 Off | Use SWIGGY66", discountType: "Flat" },
                  { meta: "99 store", discountType: "FinalPrice" },
                ],
              },
            },
          },
        },
      },

      // ─── MENU CATEGORIES ───────────────────────────────────────────────────────

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Bestsellers",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "101",
                    name: "Margherita Pizza",
                    category: "Pizzas",
                    description: "Classic pizza topped with fresh tomato sauce, mozzarella cheese and basil.",
                    imageId: "margherita_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 19900,
                    finalPrice: 19900,
                    defaultPrice: 19900,
                    ratings: { aggregatedRating: { rating: "4.3", ratingCount: "320 ratings" } },
                    isBestseller: true,
                    variants: {},
                    addons: [
                      {
                        groupId: "1",
                        groupName: "Extra Toppings",
                        choices: [
                          { id: "t1", name: "Extra Cheese", price: 4000, isVeg: 1, inStock: 1 },
                          { id: "t2", name: "Jalapeños", price: 2000, isVeg: 1, inStock: 1 },
                          { id: "t3", name: "Olives", price: 2000, isVeg: 1, inStock: 1 },
                        ],
                        minSelection: 0,
                        maxSelection: 3,
                      },
                    ],
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "102",
                    name: "Farmhouse Pizza",
                    category: "Pizzas",
                    description: "Loaded with capsicum, mushroom, onion and tomato on a rich tomato base.",
                    imageId: "farmhouse_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 24900,
                    finalPrice: 24900,
                    defaultPrice: 24900,
                    ratings: { aggregatedRating: { rating: "4.5", ratingCount: "510 ratings" } },
                    isBestseller: true,
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "103",
                    name: "Paneer Tikka Pizza",
                    category: "Pizzas",
                    description: "Spicy marinated paneer with onion, capsicum and tikka sauce.",
                    imageId: "paneer_tikka_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 27900,
                    finalPrice: 27900,
                    defaultPrice: 27900,
                    ratings: { aggregatedRating: { rating: "4.6", ratingCount: "670 ratings" } },
                    isBestseller: true,
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "104",
                    name: "Cheese Burst Pizza",
                    category: "Pizzas",
                    description: "Extra cheesy pizza with a gooey cheese-filled crust. A cheese lover's dream.",
                    imageId: "cheese_burst_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 32900,
                    finalPrice: 32900,
                    defaultPrice: 32900,
                    ratings: { aggregatedRating: { rating: "4.7", ratingCount: "890 ratings" } },
                    isBestseller: true,
                  },
                },
              },
            ],
          },
        },
      },

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Veg Pizzas",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "201",
                    name: "Margherita Pizza",
                    category: "Veg Pizzas",
                    description: "Classic pizza topped with fresh tomato sauce, mozzarella and basil.",
                    imageId: "margherita_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 19900,
                    finalPrice: 19900,
                    defaultPrice: 19900,
                    ratings: { aggregatedRating: { rating: "4.3", ratingCount: "320 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "202",
                    name: "Farmhouse Pizza",
                    category: "Veg Pizzas",
                    description: "Loaded with capsicum, mushroom, onion and tomato on a rich tomato base.",
                    imageId: "farmhouse_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 24900,
                    finalPrice: 24900,
                    defaultPrice: 24900,
                    ratings: { aggregatedRating: { rating: "4.5", ratingCount: "510 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "203",
                    name: "Paneer Tikka Pizza",
                    category: "Veg Pizzas",
                    description: "Spicy marinated paneer with onion, capsicum and tikka sauce.",
                    imageId: "paneer_tikka_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 27900,
                    finalPrice: 27900,
                    defaultPrice: 27900,
                    ratings: { aggregatedRating: { rating: "4.6", ratingCount: "670 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "204",
                    name: "Mexican Green Wave Pizza",
                    category: "Veg Pizzas",
                    description: "Capsicum, onion, jalapeno, red paprika and herbs with Mexican salsa sauce.",
                    imageId: "mexican_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 26900,
                    finalPrice: 26900,
                    defaultPrice: 26900,
                    ratings: { aggregatedRating: { rating: "4.4", ratingCount: "410 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "205",
                    name: "Cheese Burst Pizza",
                    category: "Veg Pizzas",
                    description: "Extra cheesy pizza with a gooey cheese-filled crust.",
                    imageId: "cheese_burst_pizza",
                    inStock: 1,
                    isVeg: 1,
                    price: 32900,
                    finalPrice: 32900,
                    defaultPrice: 32900,
                    ratings: { aggregatedRating: { rating: "4.7", ratingCount: "890 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "206",
                    name: "Double Cheese Margherita",
                    category: "Veg Pizzas",
                    description: "Double the cheese, double the love — classic margherita with extra mozzarella.",
                    imageId: "double_cheese_margherita",
                    inStock: 1,
                    isVeg: 1,
                    price: 22900,
                    finalPrice: 22900,
                    defaultPrice: 22900,
                    ratings: { aggregatedRating: { rating: "4.5", ratingCount: "540 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "207",
                    name: "Peri Peri Veg Pizza",
                    category: "Veg Pizzas",
                    description: "Tangy peri peri sauce with grilled veggies and mozzarella cheese.",
                    imageId: "peri_peri_pizza",
                    inStock: 0,
                    isVeg: 1,
                    price: 28900,
                    finalPrice: 28900,
                    defaultPrice: 28900,
                    ratings: { aggregatedRating: { rating: "4.2", ratingCount: "290 ratings" } },
                  },
                },
              },
            ],
          },
        },
      },

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Pastas",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "301",
                    name: "Arrabbiata Pasta",
                    category: "Pastas",
                    description: "Penne pasta tossed in a spicy tomato sauce with garlic and red chillies.",
                    imageId: "arrabbiata_pasta",
                    inStock: 1,
                    isVeg: 1,
                    price: 17900,
                    finalPrice: 17900,
                    defaultPrice: 17900,
                    ratings: { aggregatedRating: { rating: "4.1", ratingCount: "210 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "302",
                    name: "Pesto Pasta",
                    category: "Pastas",
                    description: "Fusilli pasta in a rich basil pesto sauce with sun-dried tomatoes.",
                    imageId: "pesto_pasta",
                    inStock: 1,
                    isVeg: 1,
                    price: 19900,
                    finalPrice: 19900,
                    defaultPrice: 19900,
                    ratings: { aggregatedRating: { rating: "4.4", ratingCount: "350 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "303",
                    name: "White Sauce Pasta",
                    category: "Pastas",
                    description: "Creamy béchamel sauce pasta loaded with veggies and Italian seasoning.",
                    imageId: "white_sauce_pasta",
                    inStock: 1,
                    isVeg: 1,
                    price: 18900,
                    finalPrice: 18900,
                    defaultPrice: 18900,
                    ratings: { aggregatedRating: { rating: "4.3", ratingCount: "280 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "304",
                    name: "Pink Sauce Pasta",
                    category: "Pastas",
                    description: "A perfect blend of tomato and cream sauce with penne and fresh herbs.",
                    imageId: "pink_sauce_pasta",
                    inStock: 1,
                    isVeg: 1,
                    price: 20900,
                    finalPrice: 20900,
                    defaultPrice: 20900,
                    ratings: { aggregatedRating: { rating: "4.5", ratingCount: "420 ratings" } },
                    isBestseller: true,
                  },
                },
              },
            ],
          },
        },
      },

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Garlic Breads & Sides",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "401",
                    name: "Garlic Bread",
                    category: "Garlic Breads & Sides",
                    description: "Crispy garlic bread with herb butter and a golden crust.",
                    imageId: "garlic_bread",
                    inStock: 1,
                    isVeg: 1,
                    price: 9900,
                    finalPrice: 9900,
                    defaultPrice: 9900,
                    ratings: { aggregatedRating: { rating: "4.4", ratingCount: "600 ratings" } },
                    isBestseller: true,
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "402",
                    name: "Cheese Garlic Bread",
                    category: "Garlic Breads & Sides",
                    description: "Garlic bread loaded with melted mozzarella cheese.",
                    imageId: "cheese_garlic_bread",
                    inStock: 1,
                    isVeg: 1,
                    price: 13900,
                    finalPrice: 13900,
                    defaultPrice: 13900,
                    ratings: { aggregatedRating: { rating: "4.6", ratingCount: "750 ratings" } },
                    isBestseller: true,
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "403",
                    name: "Stuffed Garlic Bread",
                    category: "Garlic Breads & Sides",
                    description: "Garlic bread stuffed with cheese, capsicum and onion filling.",
                    imageId: "stuffed_garlic_bread",
                    inStock: 1,
                    isVeg: 1,
                    price: 16900,
                    finalPrice: 16900,
                    defaultPrice: 16900,
                    ratings: { aggregatedRating: { rating: "4.5", ratingCount: "480 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "404",
                    name: "Peri Peri Fries",
                    category: "Garlic Breads & Sides",
                    description: "Crispy golden fries tossed in tangy peri peri seasoning.",
                    imageId: "peri_peri_fries",
                    inStock: 1,
                    isVeg: 1,
                    price: 11900,
                    finalPrice: 11900,
                    defaultPrice: 11900,
                    ratings: { aggregatedRating: { rating: "4.2", ratingCount: "320 ratings" } },
                  },
                },
              },
            ],
          },
        },
      },

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Beverages",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "501",
                    name: "Pepsi",
                    category: "Beverages",
                    description: "Chilled Pepsi 250ml.",
                    imageId: "pepsi",
                    inStock: 1,
                    isVeg: 1,
                    price: 5500,
                    finalPrice: 5500,
                    defaultPrice: 5500,
                    ratings: { aggregatedRating: { rating: "4.0", ratingCount: "150 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "502",
                    name: "7UP",
                    category: "Beverages",
                    description: "Refreshing lemon-lime flavoured drink 250ml.",
                    imageId: "7up",
                    inStock: 1,
                    isVeg: 1,
                    price: 5500,
                    finalPrice: 5500,
                    defaultPrice: 5500,
                    ratings: { aggregatedRating: { rating: "4.0", ratingCount: "130 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "503",
                    name: "Sting Energy Drink",
                    category: "Beverages",
                    description: "Power-packed energy drink with a burst of mixed fruit flavour.",
                    imageId: "sting",
                    inStock: 1,
                    isVeg: 1,
                    price: 7500,
                    finalPrice: 7500,
                    defaultPrice: 7500,
                    ratings: { aggregatedRating: { rating: "4.1", ratingCount: "180 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "504",
                    name: "Mineral Water",
                    category: "Beverages",
                    description: "Bisleri mineral water 500ml.",
                    imageId: "water",
                    inStock: 1,
                    isVeg: 1,
                    price: 2000,
                    finalPrice: 2000,
                    defaultPrice: 2000,
                    ratings: { aggregatedRating: { rating: "4.0", ratingCount: "90 ratings" } },
                  },
                },
              },
            ],
          },
        },
      },

      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
            title: "Desserts",
            itemCards: [
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "601",
                    name: "Choco Lava Cake",
                    category: "Desserts",
                    description: "Warm chocolate cake with a gooey molten chocolate centre.",
                    imageId: "choco_lava_cake",
                    inStock: 1,
                    isVeg: 1,
                    price: 14900,
                    finalPrice: 14900,
                    defaultPrice: 14900,
                    ratings: { aggregatedRating: { rating: "4.8", ratingCount: "520 ratings" } },
                    isBestseller: true,
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "602",
                    name: "New York Cheesecake",
                    category: "Desserts",
                    description: "Rich and creamy classic New York style cheesecake slice.",
                    imageId: "cheesecake",
                    inStock: 1,
                    isVeg: 1,
                    price: 16900,
                    finalPrice: 16900,
                    defaultPrice: 16900,
                    ratings: { aggregatedRating: { rating: "4.6", ratingCount: "310 ratings" } },
                  },
                },
              },
              {
                card: {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                  info: {
                    id: "603",
                    name: "Tiramisu",
                    category: "Desserts",
                    description: "Classic Italian dessert with mascarpone, espresso and cocoa dusting.",
                    imageId: "tiramisu",
                    inStock: 0,
                    isVeg: 1,
                    price: 18900,
                    finalPrice: 18900,
                    defaultPrice: 18900,
                    ratings: { aggregatedRating: { rating: "4.7", ratingCount: "240 ratings" } },
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
};