import symbol from "../assets/img/Тризуб.svg.png";
import anImg from "../assets/img/kellen-riggin-POL2Y2NKv-I-unsplash.jpg";
import img3 from "../assets/img/kyan-tijhuis-6RVMUY6PFEc-unsplash.jpg";
import img4 from "../assets/img/detait-O9I5xlBMAwQ-unsplash.jpg";

const arr_of_imgs = [
  {
    src: symbol,
    alt: "some img",
    id: "1",
  },
  {
    src: anImg,
    alt: "some img",
    id: "2",
  },
  {
    src: img3,
    alt: "some img 3",
    id: "3",
  },
  {
    src: img4,
    alt: "some img 4",
    id: "4"
  }
];

function add_img({ src, id, alt }) {
  document.getElementById(id).src = src;
  document.getElementById(id).alt = alt;
  document.getElementById(id).style =
    "width: 400px; display: flex; justify-self: center";
}


arr_of_imgs.forEach(
    el => add_img(el)
);

