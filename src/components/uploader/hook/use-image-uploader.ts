import React, { useState } from "react";
import { doToast } from "components/alert";
import { UploadClient, UploadcareFile } from "@uploadcare/upload-client";
import { saveAs } from "file-saver";

export const useImageUploader = () => {
 const [url, setUrl] = useState("");
 const [imageUrl, setImageUrl] = useState<string | any>("");
 const [isUploading, setIsUploading] = useState<boolean>(false);

 /*=============================================
 =            added the state below for users/consumers             =
 =============================================*/
 const [fileDetailsFromServer, setFileDetailsFromServer] =
  useState<UploadcareFile>();
 const [localFileInfo, setLocalFileInfo] = useState<File>();

 const client = new UploadClient({
  publicKey: process.env.REACT_APP_UPLOAD_CARE_API_KEY!,
 });

 const onProgress = ({ isComputable, value }: any) => {
  console.log(isComputable, value, "at the in progress");
 };

 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setIsUploading(true);
  if (!e.target.files || e.target.files.length === 0) {
   doToast("No file selected!", "error");
  } else {
   const fileData = e.target.files[0];
   setLocalFileInfo(fileData);
   setUrl(URL.createObjectURL(fileData));
   //upload to upload Care
   client
    .uploadFile(fileData, { onProgress })
    .then((file) => {
     setFileDetailsFromServer(file);
     setImageUrl(file.cdnUrl);
    })
    .catch((error) => {
     doToast("Failed to Upload", "error");
    })
    .finally(() => {
     setIsUploading(false);
    });
  }
 };

 const downloadImage = () => {
  try {
   if (imageUrl !== "") {
    saveAs(imageUrl, "image.jpg");
   }
  } catch (error) {
   doToast("Unable to download file", "error");
  }
 };

 return {
  downloadImage,
  onChange,
  url,
  fileDetailsFromServer,
  localFileInfo,
  isUploading,
 };
};
