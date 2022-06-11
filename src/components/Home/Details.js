import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setLoding(false);
        setDetails(data);
      });
  }, []);

  const singleProject = details?.find((detail) => detail.id === parseInt(id));

  if (loading) {
    return <p>please wait</p>;
  }

  return (
    <div className="px-2 lg:px-0">
      {singleProject && (
        <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div class="lg:flex items-center justify-between">
            <div class="lg:w-1/3">
              <h1 class="text-4xl font-semibold leading-9 text-primary">
                <a href={singleProject.live}>{singleProject.name}</a>
              </h1>
              <p class="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
                {singleProject.description}
              </p>
              <div>
                <h2 className="text-2xl my-4 text-primary">Technology used</h2>
                <p className="text-orange-100">{singleProject.technology}</p>
              </div>
            </div>
            <div class="lg:w-7/12 lg:mt-0 mt-8">
              <div class="w-full h-full bg-red-200">
                <img
                  src={singleProject.image1}
                  alt="apartment design"
                  class="w-full sm:block hidden"
                />
                <img
                  src={singleProject.image1}
                  alt="apartment design"
                  class="sm:hidden block w-full"
                />
              </div>
              <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                <img src={singleProject.image2} class="w-full" alt="kitchen" />
                <img
                  src={singleProject.image3}
                  class="w-full"
                  alt="sitting room"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
