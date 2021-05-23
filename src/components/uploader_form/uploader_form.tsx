import React, {FC} from "react";

import {uploadIcon, addIcon} from "../../utils/icons";

import "./uploader_form.scss";

interface UploaderFormProps {
    changeFileHandler: () => void
    changeInputHandler: () => void
    keyPressHandler: (event: React.KeyboardEvent) => void
    addHandler: () => void
    inputFileRef: HTMLInputElement
    inputTextRef: HTMLInputElement
    isValue: Boolean
}

const UploaderForm:FC<UploaderFormProps> = ({
    changeFileHandler,
    changeInputHandler,
    keyPressHandler,
    addHandler,
    inputFileRef,
    inputTextRef,
    isValue
}) => {
    return (
        <div className="uploader__form">
            <label className="uploader__label-file" htmlFor="uploader__input-file">
            {uploadIcon}
            Browse files
            <input type="file" multiple={true} onChange={changeFileHandler} ref={inputFileRef} className="uploader__input-file" id="uploader__input-file" />
            </label>
            <input ref={inputTextRef} onChange={changeInputHandler} onKeyPress={keyPressHandler} type="text" className="uploader__input-text" placeholder="Or paste weblink here" />
            {
            isValue && <button onClick={addHandler} className="button uploader__button-add">{addIcon}</button>
            }
            
        </div>
    )
}

export default UploaderForm;