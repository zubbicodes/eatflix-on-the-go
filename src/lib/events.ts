import grease from "@/assets/grease.jpg";
import simpsons from "@/assets/simpsons.jpg";
import bttf from "@/assets/bttf.jpg";
import monsters from "@/assets/monsters.jpg";
import ratatouille from "@/assets/ratatouille.jpg";

export type Experience = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: string; // tailwind gradient class
  date: string;
  time: string;
  duration: string;
  ageRating: string;
  vibe: string;
  highlights: string[];
  menu: { course: string; dish: string; note: string }[];
  drinks: string[];
  dates: string[];
  badge?: string;
};

export const experiences: Experience[] = [
  {
    slug: "grease",
    title: "Grease",
    tagline: "Greased Lightnin' Diner Night",
    description:
      "Step into Rydell High. A rockin' 50s diner takeover with milkshakes, jukebox classics and an audience sing-along to every number.",
    image: grease,
    accent: "from-rose-500 via-red-500 to-pink-600",
    date: "Fri 14 Feb 2026",
    time: "7:30 PM",
    duration: "3h 20m",
    ageRating: "PG",
    vibe: "1950s American diner",
    highlights: [
      "Live doo-wop pre-show",
      "Pink Ladies welcome drink",
      "Sing-along subtitles enabled",
      "Polaroid photo booth",
    ],
    menu: [
      { course: "Starter", dish: "Frenchy's Loaded Fries", note: "Cheese, bacon, pickled jalapeño" },
      { course: "Main", dish: "Greased Lightnin' Smashburger", note: "Double patty, American cheese, secret sauce" },
      { course: "Dessert", dish: "Cherry Vanilla Milkshake", note: "Served in a chilled soda glass" },
    ],
    drinks: ["Pink Lady cocktail", "Root beer float", "Cherry cola"],
    dates: ["Fri 14 Feb", "Sat 22 Feb", "Fri 13 Mar"],
    badge: "FEATURED",
  },
  {
    slug: "simpsons",
    title: "The Simpsons Movie",
    tagline: "A Night in Springfield",
    description:
      "Donuts, Duff beer and an audience full of Homers. A neon-yellow takeover that proves every meal is better with sprinkles.",
    image: simpsons,
    accent: "from-amber-400 via-yellow-500 to-pink-400",
    date: "Sat 7 Mar 2026",
    time: "7:00 PM",
    duration: "3h 00m",
    ageRating: "PG-13",
    vibe: "Springfield neon",
    highlights: [
      "Pink-frosted donut on arrival",
      "Duff beer flight",
      "Krusty Burger main",
      "Bart-themed photo wall",
    ],
    menu: [
      { course: "Welcome", dish: "Lard Lad Pink Donut", note: "House-glazed, rainbow sprinkles" },
      { course: "Main", dish: "Krusty Double Burger", note: "Smashed beef, secret Krusty sauce" },
      { course: "Dessert", dish: "Squishee Slushie", note: "Blue raspberry, served in a souvenir cup" },
    ],
    drinks: ["Duff IPA", "Flaming Moe (alcoholic)", "Buzz Cola"],
    dates: ["Sat 7 Mar", "Sat 28 Mar"],
  },
  {
    slug: "back-to-the-future",
    title: "Back To The Future",
    tagline: "88mph Dinner Cinema",
    description:
      "Hill Valley reborn. Retro 80s diner classics, a flux-capacitor cocktail and a soundtrack of synth and chrome.",
    image: bttf,
    accent: "from-blue-500 via-cyan-400 to-orange-500",
    date: "Sat 21 Mar 2026",
    time: "7:45 PM",
    duration: "3h 30m",
    ageRating: "PG",
    vibe: "80s diner futurism",
    highlights: [
      "Flux capacitor welcome cocktail",
      "Lou's Cafe burger & fries",
      "Live DeLorean light show",
      "Vinyl gift on the way out",
    ],
    menu: [
      { course: "Starter", dish: "Lou's Diner Chilli Cheese Fries", note: "Slow-cooked beef chilli" },
      { course: "Main", dish: "Hill Valley Cheeseburger", note: "Aged cheddar, smoked onion jam" },
      { course: "Dessert", dish: "1.21 Gigawatt Sundae", note: "Popping candy, sparklers" },
    ],
    drinks: ["Flux Capacitor (blue gin fizz)", "Pepsi Perfect", "Doc's Iced Coffee"],
    dates: ["Sat 21 Mar", "Fri 10 Apr", "Sat 25 Apr"],
  },
  {
    slug: "monsters-inc",
    title: "Monsters Inc",
    tagline: "Family Scare-fest Brunch",
    description:
      "A magical brunch for little monsters. Door portals, cotton candy clouds and Sulley-blue pancakes.",
    image: monsters,
    accent: "from-cyan-400 via-teal-300 to-purple-400",
    date: "Sun 5 Apr 2026",
    time: "11:30 AM",
    duration: "2h 45m",
    ageRating: "U · Family",
    vibe: "Pixar candy-bright",
    highlights: [
      "Kids-go-free Sunday brunch",
      "Sulley pancake stack",
      "Mike Wazowski cupcake decorating",
      "Door-portal photo moment",
    ],
    menu: [
      { course: "Brunch", dish: "Sulley Blueberry Pancakes", note: "Maple syrup, whipped cream cloud" },
      { course: "Main", dish: "Boo's Mac & Cheese", note: "Three-cheese, sourdough crumb" },
      { course: "Dessert", dish: "Mike's Eyeball Cupcake", note: "Decorate-your-own kit" },
    ],
    drinks: ["Scream Energy Mocktail", "Hot chocolate clouds", "Fresh OJ"],
    dates: ["Sun 5 Apr", "Sun 19 Apr"],
  },
  {
    slug: "ratatouille",
    title: "Ratatouille",
    tagline: "Gusteau's Bistro Evening",
    description:
      "A candle-lit Parisian dinner cinema. Five small plates, a glass of Bordeaux and the most beautiful animated film ever made.",
    image: ratatouille,
    accent: "from-amber-500 via-red-400 to-rose-500",
    date: "Sat 2 May 2026",
    time: "7:00 PM",
    duration: "3h 15m",
    ageRating: "U · Adults preferred",
    vibe: "Parisian bistro",
    highlights: [
      "Five themed small plates",
      "Sommelier wine pairing",
      "Candle-lit table service",
      "Anyone can cook tasting kit",
    ],
    menu: [
      { course: "Plate 1", dish: "Soupe à l'oignon", note: "Gruyère crouton" },
      { course: "Plate 2", dish: "Confit de canard", note: "Pommes Anna" },
      { course: "Signature", dish: "Gusteau's Ratatouille", note: "Heirloom courgette, basil oil" },
      { course: "Dessert", dish: "Tarte au citron", note: "Crème fraîche" },
    ],
    drinks: ["Bordeaux pairing", "Kir royale", "French press coffee"],
    dates: ["Sat 2 May", "Sat 16 May", "Sat 6 Jun"],
  },
];

export const getExperience = (slug: string) =>
  experiences.find((e) => e.slug === slug);

export const tickets = [
  {
    id: "EFC-2026-0142",
    expSlug: "grease",
    seats: "Row F · 4 & 5",
    party: 2,
  },
  {
    id: "EFC-2026-0188",
    expSlug: "ratatouille",
    seats: "Row C · 8 & 9",
    party: 2,
  },
];

export const notifications = [
  {
    id: 1,
    title: "Your event starts tomorrow",
    body: "Grease · Greased Lightnin' Diner Night — doors 7:00 PM. Tap to view ticket.",
    time: "2h ago",
    type: "reminder",
    unread: true,
  },
  {
    id: 2,
    title: "New Ratatouille experience announced",
    body: "Three new dates added for May & June. Early access opens for members.",
    time: "Yesterday",
    type: "new",
    unread: true,
  },
  {
    id: 3,
    title: "Grease returns next Friday",
    body: "By popular demand. Two showings added.",
    time: "2 days ago",
    type: "news",
    unread: false,
  },
  {
    id: 4,
    title: "Early access tickets available now",
    body: "Members can book Back To The Future before public release.",
    time: "5 days ago",
    type: "perk",
    unread: false,
  },
  {
    id: 5,
    title: "Your themed menu is ready",
    body: "We've revealed the full Grease menu — see what you'll be eating.",
    time: "1 week ago",
    type: "menu",
    unread: false,
  },
];
