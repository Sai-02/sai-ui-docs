import React from "react";
import { Skeleton } from "sai-ui";
const Layout2 = () => {
  return (
    <div className="flex gap-2 mt-6">
      <div className="mt-4">
        <div className="flex gap-2 ">
          <div className="">
            <Skeleton variant={"circle"} width={"6"} height={"6"} />
          </div>
          <div className=" flex flex-col h-full gap-2">
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
  );
};

export default Layout2;
