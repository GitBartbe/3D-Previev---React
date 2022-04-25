import { useState, useRef } from "react";
import Sidebar from "../side-bar/side-bar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import {
  MainBody,
  MainContainer,
  PhotoDisplayContainer,
  PreviewContainer,
  Title,
} from "./main.styles";

import Box from "../box/box";
import CustomButton from "../custom-button/custom-button";

type Main = {
  picture: string;
  fileHandler: void;
  fileName: string;
};

const defaultPicture = "images/Abstract-Picture-1.jpg";

const Main = () => {
  const [pictures, setPictures] = useState<any[]>([defaultPicture]);
  const [selectedFile, setSelectedFile] = useState<string>(defaultPicture);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  //--------------------------------- Add file name to array ----------------------------

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      let myPicture = "images/" + fileName;

      setPictures((prev) => {
        if (prev.length > 4) {
          return [...prev.slice(1).slice(-5), myPicture];
        } else return [...prev, myPicture];
      });
    }
  };

  //------------------------ Reference to hidden input ------------------------------------

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };
  //--------------------------- set picture state to preview ------------------------------
  const selectPicture = (picture: string) => {
    setSelectedFile(picture);
    return picture;
  };
  //------------------------------------------------------------------------------------------

  return (
    <MainBody>
    
      <Title>3D Picture preview</Title>
    <MainContainer>  
      <input
        ref={hiddenFileInput}
        onChange={fileHandler}
        type="file"
        accept="image/*"
        name="file"
        style={{ display: "none" }}
      ></input>

      <PreviewContainer>
      <CustomButton onSelectPicture={handleClick} />
        {pictures &&
          pictures.map((picture, idx) => (
            <Sidebar
              key={idx}
              picture={picture}
              selectPicture={selectPicture}
            />
          ))}
        
      </PreviewContainer>

      <PhotoDisplayContainer>
        {selectedFile && (
          <Canvas>
            <ambientLight />
            <pointLight position={[20, 1, 1]} />
            <Suspense fallback={null}>
              <Box picture={selectedFile} position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        )}
      </PhotoDisplayContainer>
    </MainContainer>
    </MainBody>
   
  );
};

export default Main;
