/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRef } from "react";

import Dropzone from "dropzone";
import { UploadSimple } from "@phosphor-icons/react";

const FileDropZone = ({
  acceptedFiles = "images/*,videos/*",
  maxFileSize = 16 * 1024 * 1024,
  url = "/fil/post",
}) => {
  const dropzonRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;

    if (!dropzonRef.current && formRef.current) {
      dropzonRef.current = new Dropzone(formRef.current, {
        url,
        acceptedFiles,
        maxFileSize: maxFileSize / (1024 * 1024), //Drpzone expects the max file size in MB
      });
    }

    return () => {
      if (dropzonRef.current) {
        dropzonRef.current.destroy();
        dropzonRef.current = null;
      }
    };
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-6.5">
        <form
          action={url}
          ref={formRef}
          id="upload"
          className="dropzone rounded-md !border-dashed !border-bodydark1 bg-gray hover:!border-primary dark:!border-strokedark dark:!bg-graydark dark:hover:!border-primary"
        >
          <div className="dz-message">
            <div className="mb-2.5 flex justify-center  flex-col items-center">
              <div className="shadow-10 flex h-13 w-13  items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white">
                <UploadSimple size={24} />
              </div>
              <span className="font-medium text-black dark:text-white">
                Drop files here to upload
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileDropZone;
