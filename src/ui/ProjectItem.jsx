/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../service/apiProjects";
import Spinner from "./Spinner";
import ProjectRow from "./ProjectRow";

function ProjectItem() {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["project"],
    queryFn: getProjects,
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      {projects.map((project) => (
        <ProjectRow project={project} key={project.id} />
      ))}
    </>
  );
}

export default ProjectItem;
