import React from "react";
import useChangeTitle from "../../customHooks/useChangeTitle";
import AlertProps from "./AlertProps";
import AlertSimpleExample from "./AlertSimpleExample/AlertSimpleExample";
import AlertVariantsExample from "./AlertVariantsExample.js/AlertVariantsExample";
const AlertPage = () => {
  useChangeTitle("Alert Component");
  return (
    <div className="px sm:px-2 lg:px-4 w-full">
      <h1 className="text-3xl font-bold">Alert</h1>
      <p className="mt-4 text-xl font-normal">
        It displays short important message in such a way that it does not
        disturbs user's current task.
      </p>

      {/* Alert Simple Example */}
      <AlertSimpleExample />
      {/* Alert Variants Example */}
      <AlertVariantsExample />
      {/* Alert Props */}
      <AlertProps />
    </div>
  );
};

export default AlertPage;
