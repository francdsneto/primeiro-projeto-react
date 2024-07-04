import React from "react";
// import articleImg1 from "../../assets/images/article1.png";
import "./styles.css";

/**
 * * As props na função a seguir estão sendo recebidas desestruturadas, e não um objeto props, que também pode ser passado por parâmetro.
 * * porém, ao passar o parametro props por parametro, ele virá como objeto e será necessário acessar as propriedades com o props. antes.
 * * ex: props.thumbnail, props.title...
 * @param {*} param0
 * @returns
 */
export function Article({ thumbnail, title, provider, description }) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
