import React from "react";
import PropTypes from 'prop-types'
import SlugButton from './SlugButton'
import styles from "./ArticleListItem.module.css";

const ArticleListItem = props => {
  return (
    <div className={styles.container}>
    <h1>{props.value.title}</h1>
    <p>{props.value.shortText}</p>
    <h4><time dateTime ={props.value.pubYear}>{props.value.pubDate}</time>
      <SlugButton buttonText={props.value.author} slug={props.value.slug}></SlugButton>
    </h4>
    </div>
  );
};
export default ArticleListItem;