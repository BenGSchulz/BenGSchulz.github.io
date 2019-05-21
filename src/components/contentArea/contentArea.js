import React, { useState, useCallback } from "react"

import styles from "./contentArea.module.css"

import ContentItem from '../contentItem/contentItem';
import ContentItemClicked from '../contentItemClicked/contentItemClicked';

// import AutoResponsive from "autoresponsive-react"

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const item = {
  title: 'Test Title',
  link1: 'https://github.com/BenGSchulz',
  link2: 'https://linkedin.com/in/BenGSchulz'
}

const ContentArea = (props) => {

  const [showDetailItem, setShowDetailItem] = useState(false);
  const [detailItem, setDetailItem] = useState(item);

  const handleItemClick = useCallback((i) => {
    // console.log('item ' + i + ' clicked');

    let newItem = {
      title: 'Clicked Item ' + i,
      link1: item.link1,
      link2: item.link2
    }

    setDetailItem(newItem);
    setShowDetailItem(true);
    
  }, []);

  const handleBackgroundClick = useCallback(() => {
    // console.log('Background Clicked');

    setShowDetailItem(false);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle} id='title'>My Projects</h1>
      { items.map(i => {
        return <ContentItem 
                  key={i} 
                  content={item} 
                  handleClick={() => handleItemClick(i)} 
                />;
        })
      }
      <a href='#title' className={styles.toTopBtn}>^</a>

      {
        (showDetailItem ? 
          <ContentItemClicked 
            content={detailItem} 
            handleBackgroundClick={handleBackgroundClick}
          /> 
          : null)
      }
     
    </div>
  );
};

export default ContentArea