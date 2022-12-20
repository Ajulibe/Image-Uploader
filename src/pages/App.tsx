import React, { useState } from "react";
import { Container, Header } from "./style";
import { ImageUploader } from "components/uploader";
import { UploadcareFile } from "@uploadcare/upload-client";

const App: React.FC = () => {
 //Utility function used to get Image details after uploading to Server
 const [fileName, setFileName] = useState<string | null | undefined>();
 const getResultProps = (
  serverDetails: UploadcareFile | undefined,
  localDetails: File | undefined
 ) => {
  setFileName(localDetails?.name);
  return {
   ...serverDetails,
  };
 };

 return (
  <>
   {fileName ? null : <Header>Image Uploader</Header>}
   <Container>
    <ImageUploader
     getFileDetails={getResultProps}
     uploaderText={"Click to browse or drag and drop your files"}
     acceptedFormat={[".jpg", ".jpeg", ".png"]}
    />
   </Container>
  </>
 );
};

export default App;
