import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="my-7">
      <h2 className="text-center text-primary text-2xl my-10 ">
        ___Projects___
      </h2>
      <div>
        <div class=" flex items-center justify-center">
          <div class="grid lg:grid-cols-3 gap-8 px-12">
            {projects.map((project) => (
              <Project project={project} key={project.id}></Project>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
