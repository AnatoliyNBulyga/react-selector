import React, {FC} from "react";

import UploaderListItem from "../uploader_list_item/uploader_list_item";
import {IItem, ContextType} from "../../types/types";
import "./uploader_list.scss";

interface UploaderListProps {
    fileList: Array<IItem>
}

const UploaderList:FC<UploaderListProps> = ({fileList}) => {
    return (
        <ul className="uploader__list">
            {fileList.map( item => <UploaderListItem key={item.id} item={item}/> )}
        </ul>
    )
}

export default UploaderList;