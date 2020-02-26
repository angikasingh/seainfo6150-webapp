import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <div className={styles.container}>
      <div className={styles.gridrow}>
      {props.articles.map(article => (
        <div className={styles.griditem}> 
          <ArticleListItem article={article} />
        </div>
      ))}
      </div>
      </div>

  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
