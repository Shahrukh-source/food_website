import images from "./images";

const wines = [
  {
    title: "Butter Chicken",
    price: "$56",
    tags: "AU | Plate",
  },
  {
    title: "Teekha Murg",
    price: "$59",
    tags: "AU | Plate",
  },
  {
    title: "Murg Malaiwala",
    price: "$44",
    tags: "food",
  },
  {
    title: "Chicken Chettinad",
    price: "$31",
    tags: "food",
  },
  {
    title: "Spicy Tangy Kadhai Chicken",
    price: "$26",
    tags: "food",
  },
];

const cocktails = [
  {
    title: " Masaledar Chicken Lollipop",
    price: "$20",
    tags: "food",
  },
  {
    title: "Chicken Dum Biryani",
    price: "$16",
    tags: "food",
  },
  {
    title: "Chicken Shami Kebab",
    price: "$10",
    tags: "food",
  },
  {
    title: "Roasted Chicken Masala",
    price: "$31",
    tags: "food",
  },
  {
    title: "Chicken Badaam Roll",
    price: "$26",
    tags: "food",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
   
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    
  },
];

export default { wines, cocktails, awards };
