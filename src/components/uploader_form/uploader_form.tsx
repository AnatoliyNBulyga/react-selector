import React, {FC, useState, useRef} from "react";

import {uploadIcon, addIcon} from "../../utils/icons";
import "./uploader_form.scss";

interface UploaderFormProps {
    changeFileHandler: (files: {}) => void
    addHandler: (value: string) => void
}

const UploaderForm:FC<UploaderFormProps> = ({
    changeFileHandler,
    addHandler
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const inputTextRef = useRef<HTMLInputElement>(null);
    const onAddHandler = ():void => {
        addHandler(inputValue);
        setInputValue('');
    } 
    const onKeyPressHandler = (event: React.KeyboardEvent):void => {
        if (event.key === 'Enter') {
            addHandler(inputTextRef.current!.value);
            setInputValue('');
        }
    }
    const onChangeFileHandler = (event):void => {
        changeFileHandler(event.target.files);
    } 
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(event.target.value);
    }
    return (
        <div className="uploader__form">
            <label className="uploader__label-file" htmlFor="uploader__input-file">
            {uploadIcon}
            Browse files
            <input 
                onChange={onChangeFileHandler} 
                type="file" 
                multiple={true} 
                className="uploader__input-file" id="uploader__input-file" />
            </label>
            <input 
                ref={inputTextRef}
                onChange={onChangeInputHandler} 
                onKeyPress={onKeyPressHandler} 
                value={inputValue} 
                type="text" 
                className="uploader__input-text" placeholder="Or paste weblink here" />
            { 
                inputValue && <button 
                                onClick={onAddHandler} 
                                className="button uploader__button-add">{addIcon}</button> 
            }
            
        </div>
    )
}

export default UploaderForm;