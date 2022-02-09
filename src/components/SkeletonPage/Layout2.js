import React from "react";
import { Skeleton } from "sai-ui";
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";
import { skeletonLayout2 } from "./SkeletonCode";
const Layout2 = () => {
  return (
    <div className={`grid lg:grid-cols-2 gap-4 mt-10 pt-4`}>
      <div className="flex flex-col gap-3 w-full justify-center ">
        <div className="flex flex-col gap-3 m-auto">
          <div className="flex gap-2 ">
            <div className="">
              <Skeleton variant={"circle"} width={"6"} height={"6"} />
            </div>
            <div className=" flex flex-col h-full gap-2 mt-2">
              <Skeleton
                variant={"text"}
                customStyles={{
                  width: "15rem",
                }}
              />
              <Skeleton
                variant={"text"}
                customStyles={{
                  width: "15rem",
                }}
              />
              <Skeleton
                variant={"text"}
                customStyles={{
                  width: "7rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <CopyBlock
          text={skeletonLayout2}
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

export default Layout2;
