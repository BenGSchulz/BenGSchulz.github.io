import React, { useEffect, useCallback, useState } from "react"
// import ReactDOM from "react-dom"

import styles from "./content.module.css"

import AutoResponsive from "autoresponsive-react"

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const itemSizeDefault = 200;
let itemStyles = {};
let getItemStyle = function() {
  return {
    style:{
      width: itemSizeDefault,
      height: itemSizeDefault
    }
  };
};

items.forEach(i => {
  itemStyles[i] = getItemStyle();
});

const Content = (props) => {
  let containerRef = React.useRef(null);
  let ARRef = React.useRef(null);

  const [containerW, setContainerW] = useState(0);
  const [itemStylesState, setItemStylesState] = useState(itemStyles);

  useEffect(() => {
    console.log(containerRef);
    console.log(ARRef);
    setContainerW(containerRef.current.offsetWidth);
    console.log(containerW);

  }, []);

  const getAutoResponsiveProps = () => {
    // console.log(containerW);
    return {
      itemMargin: 10,
      containerWidth: containerW,
      itemClassName: 'item',
      transitionDuration: '.5',
      transitionTimingFunction: 'easeIn'
    };
  };

  const handleItemClick = useCallback((i) => {
    console.log('Item' + i + 'clicked');
    console.log(itemStyles[i]);
    console.log(itemStylesState[i]);
    if (itemStyles[i].style.width === itemSizeDefault) {
      itemStyles[i].style.width = itemSizeDefault * 2 + 10;
      itemStyles[i].style.height = itemSizeDefault * 2 + 10;
    } else {
      itemStyles[i].style.width = itemSizeDefault;
      itemStyles[i].style.height = itemSizeDefault;
    }

    setItemStylesState(itemStyles);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <AutoResponsive ref={ARRef} {...getAutoResponsiveProps()}>
        { items.map(i => {
          return <div key={i} className={styles.item} {...itemStylesState[i]} onClick={() => handleItemClick(i)}>Item {i}</div>;
          })
        }
      </AutoResponsive>
    </div>
  );
};

export default Content