/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { getCVs } from "../service/apiCV";
import CVRow from "./CVRow";
function GetCV() {
  const {
    isLoading,
    data: cvs,
    error,
  } = useQuery({
    queryKey: ["cvs"],
    queryFn: getCVs,
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      {cvs.map((cv) => (
        <CVRow cv={cv} key={cv.id} />
      ))}
    </>
  );
}

export default GetCV;
