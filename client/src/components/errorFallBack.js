import { useDispatch } from "react-redux";
import { clearError } from "../slices/appSlice";

const ErrorFallback = ({ error }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.toString()}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default ErrorFallback;
