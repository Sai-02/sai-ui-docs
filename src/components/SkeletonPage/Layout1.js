import React from "react";
import { Skeleton } from "sai-ui";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { skeletonLayout1 } from "./SkeletonCode";
const Layout1 = () => {
  return (
    <div className={`grid lg:grid-cols-2 gap-4 `}>
      <div className="flex flex-col gap-3 w-full justify-center ">
        <div className="flex flex-col gap-3 m-auto">
          <Skeleton
            variant={"rectangle"}
            customStyles={{
              // width: "20rem",
              height: "17rem",
            }}
            customClasses={"w-full lg:w-[20rem]"}
          />
          <Skeleton
            variant={"text"}
            customStyles={{
              width: "20rem",
            }}
          />
          <Skeleton
            variant={"text"}
            customStyles={{
              width: "20rem",
            }}
          />{" "}
          <Skeleton
            variant={"text"}
            customStyles={{
              width: "20rem",
            }}
          />
          <Skeleton
            variant={"text"}
            customStyles={{
              width: "11rem",
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <CopyBlock
          text={skeletonLayout1}
          language={"jsx"}
          theme={tomorrowNightBlue}
          customStyle={{
            height: "24rem",
            overflow: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Layout1;
