import img1 from "../assets/images/works-images/F.jpg"
// import c1 from "../assets/images/clearwage/1.jpg"
import c2 from "../assets/images/clearwage/2.svg"
// import c3 from "../assets/images/clearwage/3.png";
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
        singleDetails: {
            role: "Designer",
            credit: "Clearwage Limited",
            location: "United Kingdom",
            images: [
                c2
            ],
            overview: "Clear Wage aims to revolutionize HR management in the UK by providing an all-in-one platform for time tracking, time management, tax management, employee payment, and growth-related services.",
            objectives: [
                "Streamline HR processes for UK businesses",
                "Enhance employee experience through intuitive interfaces",
                "Improve accuracy and efficiency in time tracking, tax management, and payment processing",
                "Provide actionable insights for business growth",
                "Ensure compliance with UK labor laws and regulations."
            ]
        }
    },
    {
        client: "Minato",
        location: "United States",
        services: "Website design",
        component: img2,
        color: "#131927",
        singleDetails: {
            role: "Designer",
            credit: "Minato Limited",
            location: "United Kingdom",
            overview: "The Minato Foundation project aimed to enhance academic, career, and professional opportunities for individuals from underserved backgrounds. As the designer, I created an illustrative logo that embodies the foundation's mission and designed an intuitive website to facilitate access to resources and information. The website serves as a user-friendly platform, ensuring that users can easily navigate and find the support they need.",
            objectives: [
                "Brand Identity Development",
                "User Experience (UX) Design",
                "User Interface (UI) Design",
                "Responsive Design",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Content Collaboration",
                "Accessibility Considerations",
                "Feedback Incorporation",
            ]
        }
    },
    {
        client: "Cocacola",
        location: "Practice",
        services: "Web re-design",
        component: img3,
        color: "red",
        singleDetails: {
            role: "Designer",
            credit: "Cocacola company",
            location: "Practice Project",
            overview: "The Coca-Cola website redesign aims to enhance user experience through modern navigation, interactive elements, and mobile responsiveness while maintaining the iconic brand identity. Focused on accessibility, the project will engage diverse audiences and promote brand storytelling effectively.",
        }
    },
    {
        client: "SEEG Daily",
        location: "United States",
        services: "Web design",
        component: img3,
        color: "#131927",
        singleDetails: {
            role: "Designer",
            credit: "SEEEG Daily",
            location: "United States",
    
            overview: "SEEEG Daily is a ministry whose name stands for Search, Enlighten, Empower, Encourage, Grow Daily—reflecting the transformative experience of anyone who engages with God’s Word daily. As the UI/UX Designer for this project, my role was to create an intuitive, user-friendly interface that enhances the user experience while effectively conveying the website's mission.",
            objectives: [
                "Facilitate Daily Engagement",
                "Create an Intuitive Interface",
                "Promote Spiritual Growth",
                "Enhance Community Connection",
                "Deliver Educational Content",
                "Empower Users",
                "Encourage User Feedback",
                "Ensure Mobile Compatibility",
                "Visual Consistency",
                "Support Resource Discovery",
            ]
        }
    },
    {
        client: "Coursemigo",
        location: "Nigeria",
        services: "Website and app design",
        component: img4,
        color: "#407BFF",
        singleDetails: {
            role: "Design Facilitator",
            credit: "Coursemigo",
            location: "United Kingdom",
            

            overview: "Coursemigo offers affordable, unlimited access to diverse courses through a subscription model, enabling users to explore various subjects, share resources with family, and enjoy flexible, high-quality online education.",
            objectives: [
                "Brand Identity Development",
                "User Experience (UX) Design",
                "User Interface (UI) Design",
                "Responsive Design",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Content Collaboration",
                "Accessibility Considerations",
                "Feedback Incorporation",
            ]
        }
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
