import food from "@assets/wedding_caterers.jpg";
import softdrinks from '@assets/menu/softdrinks.jpg'
import fruitjuice from '@assets/menu/fruitjuice.jpg'
import pickles from '@assets/menu/pickles.jpg'
import drycurries from '@assets/menu/drycurries.jpg'
import tomato_dal from '@assets/menu/tomato_dal.jpg'
import manchurian from '@assets/menu/manchurian.jpg'
import starters from '@assets/menu/starters.jpg'
import chili_mashrooms from '@assets/menu/chili_mashrooms.jpg'
import green_salad from '@assets/menu/green_salad.jpg'
import yogurt from '@assets/menu/yogurt.jpg'
import dosakaya from '@assets/menu/dosakaya.jpeg'
import tomato_pachadi from '@assets/menu/tomato_pachadi.jpeg'
import mango_pachadi from '@assets/menu/mango_pachadi.jpeg'
import red_chili_pachadi from '@assets/menu/red_chilli_pachadi.jpeg'

export const veg_menu = [
  {
    name: "Welcome Drinks",
    items: [
      { name: "Soft Drinks", image: softdrinks },
      { name: "Fruit Juices", image: fruitjuice },
    ],
  },
  {
    name: "Pickles/Pachadi",
    items: [
      { name: "Dosakaya", image: dosakaya },
      { name: "Tomato", image: tomato_pachadi },
      { name: "Mango", image: mango_pachadi },
      { name: "Red Chilli", image: red_chili_pachadi },
    ],
  },
  {
    name: "Dry Curries",
    items: [
      { name: "Bhendi Fry", image: drycurries },
      { name: "Veg 65", image: drycurries },
      { name: "Aloo Fry", image: drycurries },
      { name: "Carrot Beans Fry", image: drycurries },
      { name: "Vankaya", image: drycurries },
      { name: "Pakoda", image: drycurries },
      { name: "Gobi pakoda", image: drycurries },
      { name: "Kanda Fry", image: drycurries },
    ],
  },
  {
    name: "Dal",
    items: [
      { name: "Tomato Dal", image: tomato_dal },
      { name: "Palak Dal", image: tomato_dal },
      { name: "Dal Tadka", image: tomato_dal },
      { name: "Mango Dal", image: tomato_dal },
      { name: "Dal Makhani", image: tomato_dal },
      { name: "Sambar", image: tomato_dal },
      { name: "Gongura Dal", image: tomato_dal },
    ],
  },
  {
    name: "Starters",
    items: [
      { name: "Gobi Manchurian", image: manchurian },
      { name: "Aloo 65", image: starters },
      { name: "Veg bullets", image: starters },
      { name: "Chrisy Veg", image: starters },
      { name: "Spring rolls", image: starters },
      { name: "Shanghai rolls", image: starters },
      { name: "Baby corns", image: starters },
      { name: "Majestic", image: starters },
      { name: "Chili Mushrooms", image: chili_mashrooms },
    ],
  },
  {
    name: "Snacks",
    items: [
      { name: "Green Salad", image: green_salad },
      { name: "Aloo Chat", image: food },
      { name: "Aloo Channa", image: food },
      { name: "Chat", image: food },
      { name: "Peanut Chat", image: food },
      { name: "Cucumber", image: food },
      { name: "Yoghurt", image: yogurt },
    ],
  },
  {
    name: "Gravy Curries",
    items: [
      { name: "Bagara Baingan", image: food },
      { name: "Gutti Vankaya", image: food },
      { name: "Mixed Veg Curry", image: food },
      { name: "Tomato Munakad", image: food },
      { name: "Tomato Mirchi", image: food },
      { name: "Masala", image: food },
      { name: "Capsicum Masala", image: food },
      { name: "Chana Masala", image: food },
      { name: "Veg Kadai", image: food },
      { name: "Baby Corn Masal", image: food },
      { name: "Aloo Tomato Kur", image: food },
      { name: "Gobi Manchurian", image: food },
      { name: "Gravy", image: food },
      { name: "Mirchi ka Salan", image: food },
      { name: "Paneer Masala", image: food },
      { name: "Kaju Paneer", image: food },
      { name: "Aloo Gobi", image: food },
      { name: "Palak Paneer", image: food },
    ],
  },
  {
    name: "Curd/Raitha",
    items: [
      { name: "Plain Curd", image: food },
      { name: "Cucumber Raitha", image: food },
      { name: "Mixed Raitha", image: food },
      { name: "Boondi Raitha", image: food },
      { name: "Tomato Raitha", image: food },
      { name: "Onion Raitha", image: food },
    ],
  },
  {
    name: "Desert",
    items: [
      { name: "Ras Malai", image: food },
      { name: "Khadu Kheer", image: food },
      { name: "Trifle Pudding", image: food },
      { name: "Basundi", image: food },
    ],
  },
  {
    name: "Sweets",
    items: [
      { name: "Kala Jamun", image: food },
      { name: "Qurbani Ka", image: food },
      { name: "Meetha", image: food },
      { name: "Carrot Halwa", image: food },
      { name: "Semiya Payasam", image: food },
      { name: "Double Ka", image: food },
      { name: "Meetha Gulab", image: food },
      { name: "Jamun", image: food },
      { name: "Fruit Salad", image: food },
      { name: "Custard", image: food },
    ],
  },
];
