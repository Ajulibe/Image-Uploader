import React from "react";
import { Container } from "./style";
import { ImageUploader } from "components/uploader";

/**
 * users can use the hook below to get fike upload fileDetails
 * both from the server and the local system
 * @usage const { fileDetailsFromServer, localFileInfo } = useImageUploader();
 * @returns {fileDetailsFromServer} @type UploadcareFile
 * @returns {localFileInfo} @type File
 */

const Main: React.FC = () => {
 return (
  <Container>
   <ImageUploader
    uploaderText={"Click to browse or drag and drop your files"}
    acceptedFormat={[".jpg", ".jpeg", ".png"]}
   />
  </Container>
 );
};

export default Main;
