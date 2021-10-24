import _ from "lodash";
import React, { useState } from "react";

const Cell = ({text, defaultVisibleIndex, index, props}) => {
  const [isVisible, setIsVisible] = useState(defaultVisibleIndex === index);
  return (
    <td onClick={() => setIsVisible(true)} {...props}>
      {isVisible ? text : ''}
    </td>
  );
}

export default Cell;
