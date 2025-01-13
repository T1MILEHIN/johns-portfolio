import img1 from "../assets/images/works-images/F.jpg"
import img2 from "../assets/images/works-images/minato.jpg"
import img3 from "../assets/images/works-images/cocacola.jpg"
import img4 from "../assets/images/works-images/coursemigo.jpg"
import img5 from "../assets/images/works-images/A.jpg"
import img6 from "../assets/images/works-images/hga.jpg"
import img7 from "../assets/images/works-images/givingli.jpg"

export const Works = [
    {
        client: "Clearwage",
        location: "United Kingdom",
        services: "Website and app design",
        component: img1,
        color: "#0000008f",
    },
    {
        client: "Minato",
        location: "United States",
        services: "Website design",
        component: img2,
        color: "#131927"
    },
    {
        client: "Cocacola",
        location: "Practice",
        services: "Web re-design",
        component: img3,
        color: "red"
    },
    {
        client: "SEEG Daily",
        location: "United States",
        services: "Web design",
        component: img3,
        color: "#131927"
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "Website and app design",
        component: img4,
        color: "#407BFF"
    },
    {
        client: "Abbi's Place",
        location: "Nigeria",
        services: "Website re-design",
        component: img5,
        color: "#FFF"
    },
    {
        client: "HGA",
        location: "United States",
        services: "Website Design",
        component: img6,
        color: "#e2e2e2"
    },
    {
        client: "Givingly",
        location: "Practice",
        services: "Website re-design",
        component: img7,
        color: "#005d93"
    },
].map((n, idx) => ({ ...n, id: idx, next: idx + 1 }));
