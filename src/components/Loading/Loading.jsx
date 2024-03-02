import loading from "../../assets/loading.svg";
import { LoaderContainer, LoaderImg } from "./LoadingStyles";

export function Loading() {
  return <LoaderContainer>
    <LoaderImg src={loading} alt="Loading" />
  </LoaderContainer>
}

