import React, {FC} from "react";

import "./uploader_list_item.scss";
import {removeIcon} from "../../utils/icons.js";

interface UploaderListItemProps {
    item: {},
    removeItem: (id: number) => void;
}

const UploaderListItem:FC<UploaderListItemProps> = ({item, removeItem}) => {
    return <li 
                className="uploader__list-item item">
                    <button onClick={() => removeItem(item.id)} className="button item__remove">{removeIcon}</button>
                    <span className="item__text">{item.text}</span></li>
}

export default UploaderListItem;