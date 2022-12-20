import { LoadingSpinner, Wrapper } from "./style";

export const SpinnerWrapper = () => {
 return (
  <Wrapper>
   <LoadingSpinner>
    <div className="spinner">
     <div></div>
     <div></div>
     <div></div>
     <div></div>
    </div>
   </LoadingSpinner>
  </Wrapper>
 );
};
