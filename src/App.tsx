import React, {FC, useState, useRef} from 'react';
import "./App.scss";
import UploaderList from './components/uploader_list/uploader_list';
import {uploadIcon, addIcon} from "./utils/icons.js";
import {IItem, IFile} from "./types/types";
import UploaderForm from './components/uploader_form/uploader_form';

const App: FC = () => {
  const [fileList, setFileList] = useState<Array<IItem>>([]);
  const [isValue, setIsValue] = useState<Boolean>(false);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const addHandler = () => {
    const newItem: IItem = {
      text: inputTextRef.current.value,
      id: Date.now()
    }
    setFileList( prev => [...prev, newItem]);
    setIsValue(false); /* disable add button after submit */
    inputTextRef.current.value = '';
  }
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addHandler();
    }
  }
  const removeItem = (id: number) => {
    const shouldRemove = window.confirm('Are you shure to remove this item ?');
    if (shouldRemove) {
      setFileList(prev => prev.filter( item => id !== item.id));
    }
  }
  const changeInputHandler = () => {
    if (inputTextRef.current.value) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
  }
  const changeFileHandler = () => {
    const arrayFileList:Array<IFile> = Array.from(inputFileRef.current.files);
    const newFileList = arrayFileList.map(file => ({
      text: file.name,
      id: file.lastModified
    })); 
    setFileList( prev => [...prev, ...newFileList]);
  }
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="uploader mt-5">
              <div className="uploader__label"><span className="bold">Attach activity logs</span><span>.log files or ZIP archive, 5mb limit</span></div>
              <div className="uploader__group">
                <UploaderForm  
                  changeFileHandler={changeFileHandler}
                  changeInputHandler={changeInputHandler}
                  keyPressHandler={keyPressHandler}
                  addHandler={addHandler}
                  inputFileRef={inputFileRef}
                  inputTextRef={inputTextRef}
                  isValue={isValue} /> 

                { fileList.length > 0 && <UploaderList removeItem={removeItem} fileList={fileList} /> }
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
