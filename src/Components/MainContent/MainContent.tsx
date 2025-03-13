import { useState } from "react";
import styles from "./maincontent.module.css";

// import { Button } from "@mui/material";


const data = [
  {
  
    title: 'Handshake with Modern Technologies',
    text: 'Embracing emerging technologies and integrating them seamlessly into solutions, future-proofing businesses and enabling you to stay ahead of the curve.',
    image: 'https://www.servosys.com/wp-content/uploads/2021/11/Image-59.png'
  },
  {
    title: 'Low Code Platform',
    text: 'Low code BPM platform keeps you one step ahead in achieving high-speed implementation and digital transformation. Our solutions help you adapt to changing business needs while keeping your on-premise investment minimal.',
    image: 'https://www.servosys.com/wp-content/uploads/2021/11/Low-Code-2048x1779.jpg'
  },
  {
    title: 'AI Led products & solutions',
    text: 'Harnessing the power of AI to deliver predictive insights, automate tasks, and optimize processes, driving efficiency and improved decision-making..',
    image: 'https://www.servosys.com/wp-content/uploads/2021/11/AI-Led-Solutions-2048x1365.jpg'
  },
]

function MainContent() {

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        BOOST <span className={styles.highlight}>PRODUCTIVITY <span className={styles.red}>4X</span></span>
      </h2>
      <p className={styles.description}>
        With our suites, you can foster digital banking transformation and scale business operations to excellence while addressing challenges with high TAT, organizational productivity, service quality, and regulatory compliance.
      </p>


      <div id="tabs">
        <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => setActiveIndex(0)}
          >
           Handshake with Modern Technologies
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => setActiveIndex(1)}
          >
            Low Code Platform
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => setActiveIndex(2)}
          >
            AI Led products & solutions
          </button>
          
        </menu>
        <div id="tab-content">
          <ul>
            {data.map((item, index) => activeIndex === index && (
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <img src={item.image} alt={item.image} width={'50%'} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
