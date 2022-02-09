export const usageCode = ` 
  <Skeleton variant="text" width={"6"} />

`;
export const skeletonVariableCode = `
  <Skeleton variant={"text"} />
  <Skeleton variant={"circle"} width={"10"} height={"10"} />
  <Skeleton variant={"rectangle"} width={"10"} height={"8"} />
        `;
export const skeletonLayout1=`
  <div className="flex flex-col gap-3">
    <Skeleton
      variant={"rectangle"}
      customStyles={{
        width: "12rem",
        height: "6rem",
      }}
    />
    <Skeleton
      variant={"text"}
      customStyles={{
        width: "12rem",
      }}
    />
    <Skeleton
      variant={"text"}
      customStyles={{
        width: "12rem",
      }}
    />
    <Skeleton
      variant={"text"}
      customStyles={{
        width: "6rem",
      }}
    />
  </div>
`
export const skeletonLayout2=`
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
`