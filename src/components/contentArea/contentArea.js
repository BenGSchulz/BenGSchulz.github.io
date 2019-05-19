import React, {useCallback} from "react"

import styles from "./contentArea.module.css"

import ContentItem from '../contentItem/contentItem';

// import AutoResponsive from "autoresponsive-react"

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ContentArea = (props) => {

  const handleItemClick = useCallback((i) => {
    console.log('item ' + i + ' clicked');
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle} id='title'>PAGE TITLE</h1>
      { items.map(i => {
        return <ContentItem key={i} content={'Item' + i} handleClick={() => handleItemClick(i)} />;
        })
      }
      <a href='#title' className={styles.toTopBtn}>^</a>
    </div>
  );
};

export default ContentArea