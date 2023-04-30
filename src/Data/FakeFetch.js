export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/menu") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            menu: [
              {
                id: 1,
                name: "Margherita Pizza",
                description: "Fresh mozzarella, tomato sauce, and basil.",
                price: 12.99,
                image:
                  "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 30,
              },
              {
                id: 2,
                name: "Pepperoni Pizza",
                description: "Pepperoni, mozzarella, and tomato sauce.",
                price: 14.99,
                image:
                  "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg",
                is_vegetarian: false,
                is_spicy: true,
                delivery_time: 35,
              },
              {
                id: 3,
                name: "Pesto Pasta",
                description: "Penne pasta with homemade pesto sauce.",
                price: 10.99,
                image:
                  "https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 25,
              },
              {
                id: 4,
                name: "Chicken Alfredo",
                description:
                  "Fettuccine pasta with creamy Alfredo sauce and grilled chicken.",
                price: 13.99,
                image:
                  "https://assets.kraftfoods.com/recipe_images/opendeploy/120201_640x428.jpg",
                is_vegetarian: false,
                is_spicy: false,
                delivery_time: 40,
              },
              {
                id: 5,
                name: "Tiramisu",
                description:
                  "Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.",
                price: 6.99,
                image:
                  "https://www.countdown.co.nz/Content/Recipes/224513%20Tiramisu%20810x570.jpg",
                is_vegetarian: true,
                is_spicy: false,
                delivery_time: 15,
              },
              {
                id: 6,
                name: "Veggie Curry",
                description: "Mixed vegetables in a spicy curry sauce.",
                price: 11.99,
                image:
                  "https://food-images.files.bbci.co.uk/food/recipes/vegetablecurry_80763_16x9.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 30,
              },
              {
                id: 7,
                name: "Spicy Tofu Stir-Fry",
                description:
                  "Stir-fried tofu with vegetables and a spicy sauce.",
                price: 12.99,
                image:
                  "https://www.simplyrecipes.com/thmb/eSjn6vsdKpQIdrD4msJcO41Wm84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spicy-Tofu-Stirfry-LEAD-3-3da17681605c41688be8742e045f71f5.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 35,
              },
              {
                id: 8,
                name: "Butter Chicken",
                description:
                  "Tender chicken cooked in a creamy tomato-based sauce with butter and spices.",
                price: 15.99,
                image:
                  "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
                is_vegetarian: false,
                is_spicy: true,
                delivery_time: 40,
              },
              {
                id: 9,
                name: "Palak Paneer",
                description:
                  "Paneer (cottage cheese) cooked in a creamy spinach gravy with aromatic spices.",
                price: 12.99,
                image:
                  "https://food-images.files.bbci.co.uk/food/recipes/palak_paneer_85769_16x9.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 35,
              },
              {
                id: 10,
                name: "Chana Masala",
                description:
                  "Chickpeas cooked in a spicy tomato-based gravy with onion, ginger, and garlic.",
                price: 10.99,
                image:
                  "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 30,
              },
              {
                id: 11,
                name: "Aloo Gobi",
                description:
                  "Cauliflower and potatoes cooked with turmeric, cumin, and other spices.",
                price: 9.99,
                image:
                  "https://www.cookwithmanali.com/wp-content/uploads/2014/09/Indian-Aloo-Gobi-480x270.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 25,
              },
              {
                id: 12,
                name: "Samosas",
                description:
                  "Deep-fried pastry filled with spiced potatoes, peas, and sometimes meat.",
                price: 6.99,
                image:
                  "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/11/samosa-recipe.jpg",
                is_vegetarian: true,
                is_spicy: true,
                delivery_time: 20,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Food list not found.",
        });
      }
    }, 2000);
  });
};
