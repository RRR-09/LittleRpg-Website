import React from "react";
import { DescriptorBody } from "./styles-grid";

const Descriptor = ({ data }) => {
  return (
    <DescriptorBody>
      {data.map((group, groupIndex) => (
        <>
          <div>
            <h3>
              <b>{group.name}</b>
            </h3>
          </div>
          <div align="center">
            {group.points.map((point, pointIndex) => (
              <>
                <h5>{point.heading}</h5>
                <p>{point.subtext}</p>
              </>
            ))}
          </div>
        </>
      ))}
    </DescriptorBody>
  );
};
export default Descriptor;
