import React, {FC, useContext} from "react";

import {IItem, ContextType} from "../../types/types";
import {Context} from "../../App";

import "./uploader_list_item.scss";
import {removeIcon} from "../../utils/icons.js";

interface UploaderListItemProps {
    item: IItem
}

const UploaderListItem:FC<UploaderListItemProps> = ({item}) => {
    const {removeItem} = useContext(Context) as ContextType;
    return <li 
                className="uploader__list-item item">
                    <button onClick={() => removeItem(item.id)} className="button item__remove">{removeIcon}</button>
                    <span className="item__text">{item.text}</span></li>
}

export default UploaderListItem;