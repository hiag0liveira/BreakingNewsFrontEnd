import loading from "../../../public/loading.svg";
import { LoaderContainer, LoaderImg } from "./LoadingStyles";

export function Loading() {
  return <LoaderContainer>
    <LoaderImg src={loading} alt="Loading" />
  </LoaderContainer>
}

