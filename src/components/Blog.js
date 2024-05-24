import { Container, Carousel } from "react-bootstrap";
import 'animate.css';
import img1 from "../assets/img/Horror-Book-Banner-removebg-preview.png";
import TrackVisibility from 'react-on-screen';
import { Row, Col } from 'react-bootstrap';

export const Blog = () => {
  // Array of blog titles and URLs
  const blogPosts = [
    {title: 'Integrating Machine Learning Models into React Hooks Applications', url: 'https://www.geeksforgeeks.org/integrating-machine-learning-models-into-react-hooks-applications/', description:"Machine learning models learn from data to recognize patterns and make predictions. TensorFlow.js enables ML in JavaScript. React Hooks helps integrate ML models into React apps. Custom Hooks handle model loading and usage. useEffect loads the model on the component mount. useState manages input data and predictions." },
    { title: 'Podcast Platform with MERN Stack', url: 'https://www.geeksforgeeks.org/podcast-platform-with-mern-stack/',description:"In this article, we’ll be utilizing the MERN Stack (MongoDB, Express.js, React, Node.js) to develop a comprehensive podcast platform. This project aims to provide a thorough understanding of full-stack development by focusing on backend infrastructure with Express.js and MongoDB for data storage." },
    { title: 'Social Fitness App using MERN Stack', url: 'https://www.geeksforgeeks.org/social-fitness-app-using-mern-stack/', description:"Creating a Social Fitness App is a great opportunity for anyone who wants to understand full-stack development. In this article, we’ll make a Social Fitness App from scratch using the MERN(MongoDB, Express.js, React, Node.js) stack. "},
    { title: 'Property Listing Platform using Node and ExpressJS', url: 'https://www.geeksforgeeks.org/property-listing-platform-using-node-and-expressjs/', description:"This tutorial can help you build a foundational understanding of the backend development. NodeJS and ExpressJS are used to build the backend infrastructure of the website and ReactJS is used for the front end of the project."},
    { title: 'Community Marketplace App using MERN Stack', url: 'https://www.geeksforgeeks.org/community-marketplace-app-using-mern-stack/', description:"Building a community Marketplace App will help you understand the foundational concepts of full-stack development using the MERN(MongoDB, ExpressJS, React, NodeJS) stack. This tutorial will guide you to set up the backend server for the project and demonstrate the integration of frontend functionality with backend setup." },
    { title: 'How to create an npm library from React Components ?', url: 'https://www.geeksforgeeks.org/how-to-create-an-npm-library-from-react-components/', description:"Creating an npm library containing React Components is very simple. In this tutorial, we’ll create a library containing a button component that changes color when clicked. Then we’ll demonstrate how to consume this library in a separate React application." },
    { title: 'What is StaticHandler in React Router', url: 'https://www.geeksforgeeks.org/what-is-statichandler-in-react-router/', description:"React Router is a popular library in the React ecosystem that enables routing in single-page applications (SPAs). It allows developers to define navigation and rendering rules based on the URL of the application. One of the essential components of React Router is the StaticHandler, which plays a crucial role in handling static routes within your application."  },
    { title: 'How to Replicate Postman POST API Request using AJAX ?', url: 'https://www.geeksforgeeks.org/how-to-replicate-postman-post-api-request-using-ajax/', description:"In this project we’ll mimic the action of submitting data using POST to a server from a web page. We replicate this process using AJAX (Asynchronous JavaScript and XML) directly in a web page, we’re embedding similar functionality within our own interface."  },
    { title: 'Explain StaticRouter in React Router', url: 'https://www.geeksforgeeks.org/explain-staticrouter-in-react-router/' , description:"While the BrowserRouter is commonly used for client-side routing in web applications, there are scenarios where server-side rendering (SSR) or static site generation (SSG) is preferred. This is where the StaticRouter comes into play. In this article, we’ll explore what the StaticRouter is, how it works, and when you might want to use it in your React applications." },
    { title: 'Explain MemoryRouter in concept of React Router', url: 'https://www.geeksforgeeks.org/explain-memoryrouter-in-concept-of-react-router/', description:"In React applications, routing is a crucial aspect that enables navigation between different components based on the URL. React Router is a popular library used for managing routing in React applications. One of the components provided by React Router is `MemoryRouter`, which offers a unique way to handle routing without manipulating the browser’s URL."  },
    { title: 'How to Generate CSS Selector Automatically ?', url: 'https://www.geeksforgeeks.org/how-to-generate-css-selector-automatically/' , description:"Accurately selecting elements on a webpage with CSS is important in web design. Manually creating these selectors can be slow and prone to mistakes, especially for complex layouts. Modern web browsers like Google Chrome provide built-in developer tools that allow you to inspect and manipulate the HTML and CSS of a webpage." }
  ];

  return (
    <Container className="blog" id="blog">
      <h2>Blog</h2>
      <Carousel controls={true} indicators={false} className="animate__animated animate__fadeIn">
        {blogPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
            <div className="blog-post-item">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button>Go to the article</button>
            </div>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

