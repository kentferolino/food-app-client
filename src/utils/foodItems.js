import soup from '../assets/soup.jpg';
import appetizer from '../assets/appetizer.jpg';
import sidedish from '../assets/side_dish.jpg';
import maincourse from '../assets/main_course.jpg';
import dessert from '../assets/dessert.jpg';

const foodItems = {
  soup: {
    clear: {
      label: 'Clear',
      imageUrl: soup,
      data: [
        { title: 'Veggies and Meatballs' },
        { title: 'Cauliflower and Carrots' },
        { title: 'Barley' },
        { title: 'Turmeric Fish' },
      ]
    },
    thick: {
      label: 'Thick',
      imageUrl: soup,
      data: [
        { title: 'Sweet potato' },
        { title: 'Cream of celery' },
        { title: 'Cream of broccoli' },
        { title: 'Easy egg drop soup' },
      ]
    },
    miscellaneous: {
      label: 'Miscellaneous',
      imageUrl: soup,
      data: [
        { title: 'Grilled Vegetable Gazpacho' },
        { title: 'Old Fashioned Split Pea Soup' },
        { title: 'Souper Bowl Beer Cheese Soup' },
      ]
    },
  },
  appetizer: {
    fruits_and_vegetables: {
      label: 'Fruits and Vegetables',
      imageUrl: appetizer,
      data: [
        { title: 'Orange Ginger fruit dip' },
        { title: 'Nutty Fruity n Cheese Tray' },
        { title: 'Strawberry Dip' },
      ]
    },
    meat_and_cheese: {
      label: 'Meat and Cheese',
      imageUrl: appetizer,
      data: [
        { title: 'Crumbly: Goat and Feta Cheese' },
        { title: 'Baked ham with cheese' },
        { title: 'Bake pizza taquitos' },
      ]
    },
    hot: {
      label: 'Hot',
      imageUrl: appetizer,
      data: [
        { title: 'Chili-Cheese Dog Crescent Ring.' },
        { title: 'Pepperoni Pizza Braid.' },
        { title: 'Buffalo Mini Crescent Dogs.' },
      ]
    },
  },
  sidedish: {
    bread: {
      label: 'Bread',
      imageUrl: sidedish,
      data: [
        { title: 'Mom\'s Traditional Bread Stuffing.' },
        { title: 'Zucchini Mozzarella Casserole.' },
        { title: 'Grilled Corn on the Cob.' },
      ]
    },
    pasta: {
      label: 'Pasta',
      imageUrl: sidedish,
      data: [
        { title: 'Broccoli Noodle' },
        { title: 'Parsley Pesto Spaghetti' },
        { title: 'Vegetable Cheese Tortellini' },
      ]
    },
    fruits_and_vegetables: {
      label: 'Fruits and Vegetables',
      imageUrl: sidedish,
      data: [
        { title: 'Easy Broccoli with Feta Cheese' },
        { title: 'Parmesan Garlic Herb Zoodles' },
        { title: 'Grilled Vegetable Salad' },
      ]
    },
  },
  maincourse: {
    beef: {
      label: 'Beef',
      imageUrl: maincourse,
      data: [
        { title: 'Beef Brisket' },
        { title: 'Beef Casserole' },
        { title: 'Beef stew' },
      ]
    },
    chicken: {
      label: 'Chicken',
      imageUrl: maincourse,
      data: [
        { title: 'Baked Orange Chicken' },
        { title: 'Cranberry Chicken Breast' },
        { title: 'Golden Baked Chicken' },
      ]
    },
    pork: {
      label: 'Pork',
      imageUrl: maincourse,
      data: [
        { title: 'Pork Loin with Strawberry-Rhubarb Chutney' },
        { title: 'Apple Butter Pork with White Beans.' },
        { title: 'Slow-Cooker Chipotle Pork Chops' },
      ]
    },
    vegetarian: {
      label: 'Vegetarian',
      imageUrl: maincourse,
      data: [
        { title: 'Indian Veggie Burgers' },
        { title: 'Spicy Roasted Cauliflower ' },
        { title: 'Roasted Moong Dal with Spinach' },
      ]
    },
    fish: {
      label: 'Fish',
      imageUrl: maincourse,
      data: [
        { title: 'Herb and Parmesan-crumbed Baked Fish' },
        { title: 'Honey Mustard Baked Salmon' },
        { title: 'Paprika Rubbed Salmon.' },
      ]
    },
  },
  dessert: {
    cakes: {
      label: 'Cakes',
      imageUrl: dessert,
      data: [
        { title: 'Red Velvet' },
        { title: 'Dark Forest' },
        { title: 'Cheesecake' },
      ]
    },
    chocolates_and_candies: {
      label: 'Chocolates and Candies',
      imageUrl: dessert,
      data: [
        { title: 'Chocolate-Covered Cherries' },
        { title: 'Chocolate Covered Caramels.' },
        { title: 'Buckeyes chocolate and peanut butter' },
      ]
    },
    deep_fried: {
      label: 'Deep Fried',
      imageUrl: dessert,
      data: [
        { title: 'Apple fritter rings' },
        { title: 'Deep fried Oreos' },
        { title: 'Chocolate stuffed wontons' },
      ]
    },
    frozen: {
      label: 'Frozen',
      imageUrl: dessert,
      data: [
        { title: 'Ice cream' },
        { title: 'Ice cream sandwich' },
        { title: 'Frozen peanut butter bites' },
      ]
    },
    pastries: {
      label: 'Pastries',
      imageUrl: dessert,
      data: [
        { title: 'Easy Homemade Toaster Pastries' },
        { title: 'Cream puffs' },
        { title: 'Cranberry Apple Danish' },
      ]
    },
  },
}

export default foodItems;
