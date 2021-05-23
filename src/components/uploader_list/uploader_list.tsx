import React, {FC} from "react";

import UploaderListItem from "../uploader_list_item/uploader_list_item";
import {IItem} from "../../types/types";
import "./uploader_list.scss";

interface UploaderListProps {
    fileList: Array<IItem>,
    removeItem: (id: number) => void
}

const UploaderList:FC<UploaderListProps> = ({fileList, removeItem}) => {
    return (
        <ul className="uploader__list">
            {fileList.map( item => <UploaderListItem key={item.id} item={item} removeItem={removeItem}/> )}
        </ul>
    )
}

export default UploaderList;