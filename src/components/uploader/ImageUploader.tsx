import React, { Suspense } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Section, ContainerSection, Container } from "./style";
import { FileInput } from "./file-input";
import { useImageUploader } from "./hook/use-image-uploader";
import { ImageDetailsTable } from "./details-table";
import { SpinnerWrapper } from "components/spinner";
import { COLORS } from "styles/colors";

interface IProps {
 acceptedFormat: string[];
 uploaderText: string;
}

export const ImageUploader: React.FC<IProps> = ({
 uploaderText,
 acceptedFormat,
}: IProps) => {
 const { downloadImage, onChange, url, fileDetailsFromServer, isUploading } =
  useImageUploader();

 return (
  <Suspense fallback={<SpinnerWrapper />}>
   <Container>
    {isUploading ? <SpinnerWrapper /> : null}
    <ImageDetailsTable fileDetailsFromServer={fileDetailsFromServer} />
    <ContainerSection style={{ position: "relative" }} url={url}>
     {url !== "" ? (
      <div className="image__wrapper">
       <img src={url} alt="upload" style={{ height: "auto", width: "auto" }} />
      </div>
     ) : null}

     {url ? (
      <div className="button__container">
       <button className="new__button">
        Upload another file
        <FileInput onChange={onChange} acceptedFormat={acceptedFormat} />
       </button>
       <button className="download__button" onClick={downloadImage}>
        Download file
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
        <AiOutlineCloudUpload size={50} color={COLORS.primary} />
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
