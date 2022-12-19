import { chakra } from "@chakra-ui/react";

interface IProps {
 acceptedFormat: string[];
 onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput = ({ acceptedFormat, onChange, ...props }: IProps) => {
 return (
  <chakra.input
   position="absolute"
   width="100%"
   top="0"
   bottom="0"
   left="0"
   right="0"
   opacity="0"
   id="file-upload"
   name="file-upload"
   type="file"
   cursor="pointer"
   accept={`${acceptedFormat.join(",")}`} // ".jpg,.jpeg,.png,"
   onChange={onChange}
   {...props}
  />
 );
};
