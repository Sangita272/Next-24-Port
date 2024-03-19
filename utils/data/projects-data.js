import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Faithly',
        description: "The project is a Bible study platform featuring a detailed exploration of books, chapters, verses, and topics. Users can earn coins by completing quizzes at various levels tied to Bible content. With support for multiple user accounts, including child-friendly profiles, it encourages collaborative learning through groups and chats. The platform also integrates Stripe for subscription-based access, enhancing the overall Bible study experience.",
        tools: ['Express', 'MongoDB', 'React Native', 'Socket', 'AWS S3', 'Node Mailer', 'Node Js', 'EC2', 'PM2', 'Nginx', 'Passport JWT'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        url: 'https://faithly.info/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Inloop',
        description: 'The InLoop Project is a comprehensive solution designed to streamline issue resolution and task management within an organization. Catering to users, technicians, and administrators, the platform offers a user-friendly login system that provides tailored access based on predefined permissions. Users can effortlessly log technical issues and assign them to designated technicians, creating a seamless workflow for problem resolution. The dynamic form generation feature allows users to articulate issues effectively, ensuring clarity for technicians in their work. Crucially, the project incorporates a robust permission system, delineating access levels for different roles—users, technicians, and administrators—ensuring the right individuals have access to pertinent modules.',
        tools: ['ReactJS', 'React ANTD', "MongoDB", "Socket", "Express", "Node Js", "AWS S3", "Node Mailer", 'Passport JWT'],
        role: 'Full Stack Developer',
        url: "https://inloopapp.iosx.in/auth/login",
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Invenstory',
        description: 'It help businesses of every size save money, time and stress with intuitive inventory management software. We help businesses of every size save money, time and stress with intuitive inventory management software.',
        tools: ['NextJs', 'Node Mailer', 'Stripe', 'Express', 'Node Js', 'MongoDB', 'Passport JWT'],
        code: '',
        role: 'Backend Developer',
        url: "https://invenstory.com/",
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'BusinessIntelligence',
        description: "The Business Intelligence project is a comprehensive platform designed to deliver timely news updates, an extensive glossary of industry terms, and interactive forums for insightful discussions. This multifaceted platform caters to users seeking a centralized hub for staying informed about business-related developments, understanding complex terminologies, and engaging in meaningful conversations within a community of professionals. By seamlessly integrating these components, the Business Intelligence project provides a valuable resource for individuals and businesses aiming to enhance their knowledge, stay current with industry trends, and participate in collaborative learning and discussions.",
        tools: ['NextJs', 'Node Mailer', 'Express', 'Node Js', 'MongoDB', 'Passport JWT'],
        code: '',
        demo: '',
        image: ayla,
        url: "https://businessintelligencetools.com/",
        role: 'Backend Developer',
    },
    {
        id: 4,
        name: 'CEO',
        description: "The CEO Project is a visionary initiative that brings together a select group of elite users, specifically CEOs of companies, fostering a unique space for them to exchange invaluable insights. This exclusive platform serves as a confidential and collaborative environment where CEOs can share their wealth of knowledge, experiences, and strategic perspectives. By facilitating meaningful interactions among top executives, the CEO Project aims to cultivate a community that transcends traditional boundaries, enabling its members to stay ahead of industry trends, tackle challenges collectively, and contribute to each other's professional growth.",
        tools: ['ReactJS', 'Node Mailer', 'Node Js', 'MongoDB', 'Passport JWT', 'Redux'],
        code: '',
        demo: '',
        image: ayla,
        url: "https://ceofront.iosx.in/",
        role: 'Front end Developer',
    },
    {
        id: 4,
        name: 'Dabbawala',
        description: "In my recent project titled Dabbawala, I delved into the realm of efficient food delivery services, offering a comprehensive suite of solutions to meet diverse culinary needs. This multifaceted project comprised three distinct services: meal delivery, delivery order, and catering. The meal delivery service aimed at providing individuals with a seamless and convenient solution for receiving wholesome and delicious meals at their doorstep. The delivery order service facilitated a streamlined process for customers to place and receive food orders with utmost efficiency. Additionally, the catering service catered to larger gatherings and events, ensuring a delightful culinary experience for groups.",
        tools: ['ReactJS', "WebSocket", 'Node Mailer', 'Node Js', 'MongoDB', 'JWT', 'Redux'],
        code: '',
        demo: '',
        image: ayla,
        url: "https://dabbawala.iosx.in/",
        role: 'Front end Developer',
    },
    {
        id: 4,
        name: 'LearningGt',
        description: "LearninGT, a project by Grant Thornton in India, is a premier upskilling service offering a diverse range of training programs. Tailored to the dynamic demands of the professional landscape, the academy is dedicated to empowering both seasoned professionals and students. With a commitment to excellence, LearninGT provides comprehensive education to enhance skills, foster growth, and unlock the full potential of individuals in their respective fields.",
        tools: ['Typescript', 'Redux'],
        code: '',
        demo: '',
        image: ayla,
        url: "https://www.learningt.com/",
        role: 'Front end Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },