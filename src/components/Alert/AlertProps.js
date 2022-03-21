import React from "react";

const AlertProps = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mt-5">Props</h2>
      <p className="mt-4 text-lg font-normal">
        Props for Alert components are:
      </p>
      <div className="overflow-auto w-full mt-4">
        <table className=" grid gap-4 border pb-3 min-w-[500px] max-w-[700px]">
          <thead>
            <tr className="grid gap-6 border-b grid grid-cols-7 p-2">
              <th className="text-left col-span-2">Name</th>
              <th className="text-left col-span-1">Type</th>
              <th className="text-left col-span-4">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">open</td>
              <td className="col-span-1">Boolean</td>
              <td className="col-span-4">To control visibility of the Alert</td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">closeAlert</td>
              <td className="col-span-1">function</td>
              <td className="col-span-4">
                A function which closes the alert component. It is madatory to
                be passed.
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">type</td>
              <td className="col-span-1">String</td>
              <td className="col-span-4">
                It specifies the typpe of the alert to be rendered. It has four
                options: "success", "error", "info", "warning"
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">duration</td>
              <td className="col-span-1">number</td>
              <td className="col-span-4">
                It specifies the duration of time after which alert will
                disappear. By default its value is taken as 2000ms i.e, 2
                seconds
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">customStyles</td>
              <td className="col-span-1">Object</td>
              <td className="col-span-4">
                They are used for styling the component they will override the
                current styles
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">iconStyles</td>
              <td className="col-span-1">Object</td>
              <td className="col-span-4">
                It is used for styling the icon of the alert.
              </td>
            </tr>
            <tr className="grid grid-cols-7 gap-6 px-2">
              <td className="col-span-2">customIcon</td>
              <td className="col-span-1">Element</td>
              <td className="col-span-4">
                It is used for passing your custom icon in the alert. It will
                replace the default icon.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertProps;
