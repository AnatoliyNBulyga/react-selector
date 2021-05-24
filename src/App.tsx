import React, {FC, useState, createContext} from 'react';
import "./App.scss";
import UploaderList from './components/uploader_list/uploader_list';
import {IItem, IFile, ContextType} from "./types/types";
import UploaderForm from './components/uploader_form/uploader_form';

export const Context = createContext<ContextType | null>(null);

const App: FC = () => {
  const [fileList, setFileList] = useState<Array<IItem>>([]);

  const addHandler = (value) => {
    const newItem: IItem = {
      text: value,
      id: Date.now()
    }
    setFileList( prev => [...prev, newItem]);
  }
  const removeItem = (id: number) => {
    const shouldRemove = window.confirm('Are you shure to remove this item ?');
    if (shouldRemove) {
      setFileList(prev => prev.filter( item => id !== item.id));
    }
  }

  const changeFileHandler = (files) => {
    const arrayFileList:Array<IFile> = Array.from(files);
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
              <Context.Provider value={{removeItem}}>
                <div className="uploader__group">
                  <UploaderForm  
                    changeFileHandler={changeFileHandler}
                    addHandler={addHandler} />

                  { fileList.length > 0 && <UploaderList fileList={fileList} /> }
                </div>   
              </Context.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;