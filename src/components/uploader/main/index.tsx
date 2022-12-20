import React, { Suspense, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Section, ContainerSection, Container } from "./style";
import { useImageUploader } from "../hook/use-image-uploader";
import { SpinnerWrapper } from "components/spinner";
import ImageDetailsTable from "../details-table";
import FileInput from "../file-input";
import { COLORS } from "styles/colors";
import { useCallback } from "react";
import { UploadcareFile } from "@uploadcare/upload-client";

interface IProps {
 acceptedFormat: string[];
 uploaderText: string;
 getFileDetails?: (r: UploadcareFile | undefined, f: File | undefined) => {};
}

export const ImageUploader: React.FC<IProps> = ({
 uploaderText,
 acceptedFormat,
 getFileDetails,
}: IProps) => {
 const {
  downloadImage,
  onChange,
  url,
  fileDetailsFromServer,
  localFileInfo,
  isUploading,
 } = useImageUploader();

 const setResult = useCallback(() => {
  getFileDetails && getFileDetails(fileDetailsFromServer, localFileInfo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [localFileInfo?.name, fileDetailsFromServer?.name]);

 useEffect(() => {
  setResult();
 }, [setResult]);

 return (
  <Suspense fallback={<SpinnerWrapper />}>
   <Container>
    {isUploading ? <SpinnerWrapper /> : null}
    <ImageDetailsTable fileDetailsFromServer={fileDetailsFromServer} />

    {url !== "" ? (
     <div className="image__wrapper" onClick={downloadImage}>
      <img src={url} alt="upload" style={{ height: "auto", width: "auto" }} />
     </div>
    ) : null}

    <ContainerSection style={{ position: "relative" }} url={url}>
     {url ? (
      <div className="button__container">
       <button className="new__button">
        Upload
        <FileInput onChange={onChange} acceptedFormat={acceptedFormat} />
       </button>
       <button className="download__button" onClick={downloadImage}>
        Download
       </button>
      </div>
     ) : (
      <Section>
       <Flex
        my="8px"
        align="center"
        borderWidth={2}
        display="flex"
        borderStyle="dashed"
        cursor="pointer"
        borderRadius={"24px"}
        sx={{ height: "50vh", padding: "40px" }}
        flexDir="column"
        justifyContent="center"
       >
        <AiOutlineCloudUpload size={40} color={COLORS.primary} />
        <Text width="100%" marginTop={10}>
         {uploaderText}
        </Text>
        <FileInput onChange={onChange} acceptedFormat={acceptedFormat} />
       </Flex>
      </Section>
     )}
    </ContainerSection>
   </Container>
  </Suspense>
 );
};
