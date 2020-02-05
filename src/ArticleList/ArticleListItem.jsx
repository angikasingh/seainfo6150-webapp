import React from "react";
import PropTypes from 'prop-types'

const ArticleListItem = props => {
  return (
    <div>
    <h1>{props.value.title}</h1>
    <p>{props.value.shortText}</p>
    <p>{props.value.pubDate}
      <button onClick={() => alert(props.value.slug)}>
        show article slug
      </button>
    </p>
    </div>
  );
};
export default ArticleListItem;