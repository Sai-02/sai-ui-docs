import React from "react";
import { Skeleton } from "sai-ui";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { skeletonVariableCode } from "./SkeletonCode";
const SkeletonVariants = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Variants</h2>
      <div className="flex flex-col gap-5 p-6">
        <Skeleton variant={"text"} />
        <Skeleton variant={"circle"} width={"10"} height={"10"} />
        <Skeleton variant={"rectangle"} width={"10"} height={"8"} />
      </div>
      <div className="lg:w-2/3">
        <CopyBlock
          theme={tomorrowNightBlue}
          text={skeletonVariableCode}
          language={"jsx"}
        />
      </div>
    </div>
  );
};

export default SkeletonVariants;
