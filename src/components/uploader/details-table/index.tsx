import React from "react";
import { ImageDetails } from "../style";
import {
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 TableContainer,
} from "@chakra-ui/react";
import { UploadcareFile } from "@uploadcare/upload-client";

interface IProps {
 fileDetailsFromServer: UploadcareFile | undefined;
}

export const ImageDetailsTable: React.FC<IProps> = ({
 fileDetailsFromServer,
}) => {
 console.log(fileDetailsFromServer);

 const megapixel =
  (fileDetailsFromServer?.imageInfo?.width! *
   fileDetailsFromServer?.imageInfo?.height!) /
  1000000;

 return (
  <>
   {fileDetailsFromServer?.mimeType ? (
    <ImageDetails>
     <TableContainer>
      <Table variant="striped">
       <Thead>
        <Tr>
         <Th>Name</Th>
         <Th>Type</Th>
         <Th>Size</Th>
         <Th>Dimensions</Th>
         <Th>Megapixels</Th>
        </Tr>
       </Thead>
       <Tbody>
        <Tr>
         <Td>{fileDetailsFromServer?.name}</Td>
         <Td>{fileDetailsFromServer?.mimeType}</Td>
         <Td>{fileDetailsFromServer?.size}</Td>
         <Td>{`${fileDetailsFromServer?.imageInfo?.width}px x ${fileDetailsFromServer?.imageInfo?.height}px `}</Td>
         <Td>{Math.round(megapixel) ?? ""}</Td>
        </Tr>
       </Tbody>
      </Table>
     </TableContainer>
    </ImageDetails>
   ) : null}
  </>
 );
};
