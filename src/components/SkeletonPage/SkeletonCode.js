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