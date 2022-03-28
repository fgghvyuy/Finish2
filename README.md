# Foodly App - Part 1

## Step 1: Create `<FoodCard />` components using the `data` object

Right now, the `<FoodCard />` instance shows an image and description for tacos.

In the main `<App />` component, `map` over `data.foodItems` to create `<FoodCard />` instances for each of the three foods. You'll need to pass that foodItem data into the `<FoodCard />` component somehow.

## Step 2: Add functionality to the Show City button

**GOAL:** Update the Show City button so that clicking on it updates a state variable.

Create a state variable, `cityIsShown` in the body of `<App />`. That variable is either `true` or `false`.

Once you've create a state variable, you'll want to also create an updating function in `<App /> that toggles the value of your state varible.

Once you've created a toggle function, you'll want to pass that function down to the `<CityButton />` component.

You can test if the button is working by using `console.log()`

## Step 3: Actually display the city under the Show City button

Once you've gotten the Show City button to toggle the value of `cityIsShown`, use conditional rendering to display the value of `data.city` directly in the <App /> component, between <City Button /> and your food card JSX.
