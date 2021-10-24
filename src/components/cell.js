import React, { useEffect, useState } from "react";

const Cell = ({text, visibleIndex, index, props, isPracticing}) => {
  const [isVisible, setIsVisible] = useState(visibleIndex === index);
  useEffect(() => {
    setIsVisible(visibleIndex === index)
  }, [visibleIndex, index])
  return (
    <td onClick={() => setIsVisible(true)} {...props}>
      {isVisible || !isPracticing ? text : ''}
    </td>
  );
}

export default Cell;
