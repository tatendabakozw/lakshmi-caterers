import food from "@assets/wedding_caterers.jpg";
import softdrinks from '@assets/menu/softdrinks.jpg'
import fruitjuice from '@assets/menu/fruitjuice.jpg'
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
import veg_65 from '@assets/menu/veg_65.jpeg'
import bhendi_fry from '@assets/menu/bhendi_fry.jpeg'
import aloo_fry from '@assets/menu/aloo_fry.jpeg'
import carot_beans_fry from '@assets/menu/carrot_beans_fry.jpeg'
import vankaya from '@assets/menu/vankaya.jpeg'
import pakoda from '@assets/menu/pakoda.jpg'
import gobi_pakoda from '@assets/menu/gobi_pakoda.jpg'
import kanda_fry from '@assets/menu/kanda_fry.jpg'
import palak_dal from '@assets/menu/palak_dal.jpeg'
import dal_tadka from '@assets/menu/dal_tadka.jpeg'
import mango_dal from '@assets/menu/mango_dal.jpeg'
import dal_makhani from '@assets/menu/dal_makhani.jpeg'
import samar from '@assets/menu/samar.jpg'
import gongura_dal from '@assets/menu/gongura_dal.jpeg'
import aloo65 from '@assets/menu/aloo65.jpeg'
import veg_bullets from '@assets/menu/veg_bullets.jpeg'
import chrisy_veg from '@assets/menu/chrisy_veg.jpeg'
import spring_rolls from '@assets/menu/spring_rolls.jpeg'
import shangani_rolls from '@assets/menu/shangani_rolls.jpeg'
import baby_corns from '@assets/menu/baby_corns.jpeg'

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
      { name: "Bhendi Fry", image: bhendi_fry },
      { name: "Veg 65", image: veg_65 },
      { name: "Aloo Fry", image: aloo_fry },
      { name: "Carrot Beans Fry", image: carot_beans_fry },
      { name: "Vankaya", image: vankaya },
      { name: "Pakoda", image: pakoda },
      { name: "Gobi pakoda", image: gobi_pakoda },
      { name: "Kanda Fry", image: kanda_fry },
    ],
  },
  {
    name: "Dal",
    items: [
      { name: "Tomato Dal", image: tomato_dal },
      { name: "Palak Dal", image: palak_dal },
      { name: "Dal Tadka", image: dal_tadka },
      { name: "Mango Dal", image: mango_dal },
      { name: "Dal Makhani", image: dal_makhani },
      { name: "Sambar", image: samar },
      { name: "Gongura Dal", image: gongura_dal },
    ],
  },
  {
    name: "Starters",
    items: [
      { name: "Gobi Manchurian", image: manchurian },
      { name: "Aloo 65", image: aloo65 },
      { name: "Veg bullets", image: veg_bullets },
      { name: "Chrisy Veg", image: chrisy_veg },
      { name: "Spring rolls", image: spring_rolls },
      { name: "Shanghai rolls", image: shangani_rolls },
      { name: "Baby corns", image: baby_corns },
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
