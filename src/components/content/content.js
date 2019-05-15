import React, {useCallback} from "react"

import styles from "./content.module.css"

import ContentItem from '../contentItem/contentItem';

// import AutoResponsive from "autoresponsive-react"

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Content = (props) => {

  const handleItemClick = useCallback((i) => {

  }, []);

  return (
    <div className={styles.container}>
        { items.map(i => {
          return <ContentItem key={i} content={'Item' + i} handleClick={() => handleItemClick(i)} />;
          })
        }
    </div>
  );
};

export default Content