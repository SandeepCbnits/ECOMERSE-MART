import fan1 from "./assests/fan1.png";
import fan2 from "./assests/fan2.jpg";
const data = {
  items: [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/photos/turquoise-arm-chair-isolated-on-white-background-front-view-of-picture-id1199428736?k=20&m=1199428736&s=612x612&w=0&h=vRS-zg2d6tF7jqQ8lI3oYFs_JC3fXdPCZhkvlEhHJkc=",
      title: "In Stock",
      description: "Give me a place for sitting ",
      price: "Rs 99.",
      rating: 3,
    },
    {
      id: 2,
      image: fan1,
      inStock: true,
      description: "7200mAh Battery Powered ",
      price: "Rs. 299",
      rating: 4,
    },
    {
      id: 3,
      image: fan2,
      inStock: true,
      description: "7200mAh Battery Powered ",
      price: "Rs. 299",
      rating: 3,
    }
  ],
};
export default data;
