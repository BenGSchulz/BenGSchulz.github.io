import React, { useEffect, useCallback } from "react"
// import ReactDOM from "react-dom"

import styles from "./content.module.css"

import AutoResponsive from "autoresponsive-react"

const Content = (props) => {
  let containerRef = React.createRef();
  let containerW = 0;

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let itemStyles = {};
  let getItemStyle = function() {
    return {
      style:{
        width: 100,
        height: 100,
        cursor: 'pointer',
        border: '1px solid #f2f2f2',
        borderRadius: 5,
        backgroundColor: '#424242',
        lineHeight: '100px',
        textAlign: 'center',
        textShadow: '1px 1px 0px #816abe',
        userSelect: 'none'
      }
    };
  };

  items.forEach(i => {
    itemStyles[i] = getItemStyle();
  });

  useEffect(() => {
    containerW = containerRef.current.offsetWidth;
  }, []);

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: containerW,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  };

  const handleItemClick = (i) => {
    console.log('Item' + i + 'clicked');

    if (itemStyles[i].width === '100px') {
      itemStyles[i].width = '200px';
      itemStyles[i].height = '200px';
    } else {
      itemStyles[i].width = '100px';
      itemStyles[i].height = '100px';
    }
  };

  return (
    <div className={styles.container}>
      <AutoResponsive ref={containerRef} {...getAutoResponsiveProps()}>

        { items.map(i => {
          return <div key={i} className={styles.item} {...itemStyles[i]} onClick={() => handleItemClick(i)}>Item {i}</div>;
          })
        }
      </AutoResponsive>
    </div>
  );
};

export default Content