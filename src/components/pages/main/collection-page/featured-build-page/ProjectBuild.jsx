import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./../../../../../assets/css/project-build.css"

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


import featuredBuild from "./../../../../../assets/json/featured-build.json"



function ProjectBuild() {

    const { unit_id } = useParams(); 

    // Find the unit with id "ex: ford-1"
    const projectUnit = featuredBuild.find(unit => unit.id === unit_id.toLowerCase());
    
    // Initialize Fancybox on mount
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {});
    }, []);

  return (
    <div className="container-fluid project_build_section">
        <h2>{projectUnit.title}</h2>
        <h4>{projectUnit.released}</h4>
        <div className="image-container">
            {projectUnit.images.map((image, index) => (
                <a
                    key={index}
                    href={`/assets/images/featured-build/${image.imgSrc}`}
                    data-fancybox="gallery"
                    data-caption={`Image ${index + 1}`}
                >
                    <img
                        src={`/assets/images/featured-build/${image.imgSrc}`}
                        alt={`Image ${index + 1}`}
                        
                    />
                </a>
            ))}
        </div>
    </div>
  )
}

export default ProjectBuild