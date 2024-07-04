import React from "react";

import "./styles/app.css";
import { Navbar } from "./components/navbar/Navbar";
import { Article } from "./components/article/Article";

import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";
import { Counter } from "./components/counter/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Counter />
        {/* <section id="articles">
          <Article
            thumbnail={article1Img}
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eius, nam quis, quisquam ipsam nesciunt incidunt cupiditate, veritatis libero facere possimus amet magni quo. Ipsum quasi architecto nobis? Sint, inventore."
          />
          <Article
            thumbnail={article2Img}
            title="Vibrand Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eius, nam quis, quisquam ipsam nesciunt incidunt cupiditate, veritatis libero facere possimus amet magni quo. Ipsum quasi architecto nobis? Sint, inventore."
          />
          <Article
            thumbnail={article3Img}
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eius, nam quis, quisquam ipsam nesciunt incidunt cupiditate, veritatis libero facere possimus amet magni quo. Ipsum quasi architecto nobis? Sint, inventore."
          />
          <Article
            thumbnail={article1Img}
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eius, nam quis, quisquam ipsam nesciunt incidunt cupiditate, veritatis libero facere possimus amet magni quo. Ipsum quasi architecto nobis? Sint, inventore."
          />
        </section> */}
      </>
    );
  }
}

export default App;
