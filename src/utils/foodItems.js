import soup from '../assets/soup.jpg';
import appetizer from '../assets/appetizer.jpg';
import sidedish from '../assets/side_dish.jpg';
import maincourse from '../assets/main_course.jpg';
import dessert from '../assets/dessert.jpg';

const foodItems = {
  soup: {
    clear: { label: 'Clear', imageUrl: soup, data: [] },
    thick: { label: 'Thick', imageUrl: soup, data: [] },
    miscellaneous: { label: 'Miscellaneous', imageUrl: soup, data: [] },
  },
  appetizer: {
    fruits_and_vegetables: { label: 'Fruits and Vegetables', imageUrl: appetizer, data: [] },
    meat_and_cheese: { label: 'Meat and Cheese', imageUrl: appetizer, data: [] },
    hot: { label: 'Hot', imageUrl: appetizer, data: [] },
  },
  side_dish: {
    bread: { label: 'Bread', imageUrl: sidedish, data: [] },
    pasta: { label: 'Meat and Cheese', imageUrl: sidedish, data: [] },
    fruits_and_vegetables: { label: 'Fruits and Vegetables', imageUrl: sidedish, data: [] },
    colds: { label: 'Meat and Cheese', imageUrl: sidedish, data: [] },
  },
  main_course: {
    beef: { label: 'Beef', imageUrl: maincourse, data: [] },
    chicken: { label: 'Chicken', imageUrl: maincourse, data: [] },
    pork: { label: 'Pork', imageUrl: maincourse, data: [] },
    vegetarian: { label: 'Vegetarian', imageUrl: maincourse, data: [] },
    fish: { label: 'Fish', imageUrl: maincourse, data: [] },
    pizza: { label: 'Pizza', imageUrl: maincourse, data: [] },
  },
  dessert: {
    biscuits: { label: 'Biscuits', imageUrl: dessert, data: [] },
    cakes: { label: 'Cakes', imageUrl: dessert, data: [] },
    chocolates_and_candies: { label: 'Chocolates and Candies', imageUrl: dessert, data: [] },
    deep_fried: { label: 'Deep Fried', imageUrl: dessert, data: [] },
    frozen: { label: 'Frozen', imageUrl: dessert, data: [] },
    pastries: { label: 'Pastries', imageUrl: dessert, data: [] },
  },
}

export default foodItems;
