import React from "react";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import SkeletonVariants from "./SkeletonVariants";
import SkeletonCustomLayouts from "./SkeletonCustomLayouts";
import { usageCode } from "./SkeletonCode";
import SkeletonProps from "./SkeletonProps";
const SkeletonPage = () => {
  return (
    <div className="px sm:px-2 lg:px-4 w-full">
      <h1 className="text-3xl font-bold">Skeleton</h1>
      <p className="mt-4 text-xl font-normal">
        It is a kind of placeholder for your data when your data is loading.
        Skeleton layout are used widely as they are much better than old
        orthodox spinners or loaders.
      </p>
      <h2 className="text-2xl font-bold mt-5">Usage</h2>
      <p className="mt-4 text-xl">
        It can be directly used in your component. Example :
      </p>
      <div className="lg:w-2/3 mt-4">
        <CopyBlock
          language={"jsx"}
          text={usageCode}
          theme={tomorrowNightBlue}
        />
      </div>
      {/* Variants */}
      <SkeletonVariants />
      {/* Custom Layouts */}
      <SkeletonCustomLayouts />
      {/* Skeleton Props */}
      <SkeletonProps />
    </div>
  );
};

export default SkeletonPage;
