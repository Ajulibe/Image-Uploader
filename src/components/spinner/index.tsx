import { LoadingSpinner } from "./style";

const Spinner = () => {
 return (
  <LoadingSpinner>
   <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div>
  </LoadingSpinner>
 );
};

export const SpinnerWrapper = () => {
 return (
  <div
   style={{
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 100,
   }}
  >
   <Spinner />
  </div>
 );
};
