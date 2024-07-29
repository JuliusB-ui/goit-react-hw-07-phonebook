import { ClipLoader } from "react-spinners/ClipLoader";

export const Loader = () => {
    return (
        <ClipLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"/>
    )
}