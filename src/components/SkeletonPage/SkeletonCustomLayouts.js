import React from "react";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
const SkeletonCustomLayouts = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mt-5">Custom Layouts</h2>
      <div className="p-4">
        <Layout1 />
        {/* <Layout2 /> */}
      </div>
    </div>
  );
};

export default SkeletonCustomLayouts;
