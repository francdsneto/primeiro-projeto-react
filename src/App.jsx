import React, { useEffect, useState } from "react";

import "./styles/app.css";
import { Navbar } from "./components/navbar/Navbar";
import { Article } from "./components/article/Article";
import axios from "axios";
import { Bars } from "react-loader-spinner";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const url = "https://api.spaceflightnewsapi.net/v4/articles";

        const response = await axios.get(url);

        // const response = await fetch(
        //   "https://api.spaceflightnewsapi.net/v4/articles",
        //   { method: "GET" }
        // );
        // const data = await response.json();

        setNews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Counter /> */}
      <section id="articles">
        {news.length !== 0 ? (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                thumbnail={article.image_url}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
              />
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 180px)",
            }}
          >
            <Bars
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        )}
        {/* <Article
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
        /> */}
      </section>
    </>
  );
}

export default App;
