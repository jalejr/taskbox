import Carousel from './Carousel.jsx';
import img1 from "../assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";
import img3 from "../assets/img/img-3.jpg";
import img4 from "../assets/img/img-4.jpg";

export default {
    component: Carousel,
    title: 'Carousel',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        slides: [img1, img2, img3, img4],
    },
};