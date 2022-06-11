import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const navigate = useNavigate();
  const { id, name, image1, category, client, server, live } = project;
  return (
    <div class="flex flex-col gap-1">
      <a href="/" class="bg-primary">
        <img
          alt=""
          src={image1}
          class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        />
      </a>

      <a href={live} class="hover:text-primary text-gray-200 font-semibold">
        {name}
      </a>

      <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
        {category}
      </span>

      <div class="flex flex-row flex-wrap gap-2">
        <a
          href={client}
          class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
        >
          <FaGithub /> Client
        </a>
        <a
          href={server}
          class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
        >
          <FaGithub /> Server
        </a>
        <span
          onClick={() => navigate(`/details/${id}`)}
          class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer"
        >
          Details
        </span>
      </div>
    </div>
  );
};

export default Project;
