import { PaperPlaneTilt, X } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMediaModal } from "../redux/slices/app";
import FileDropZone from "./FileDropZone";

const MediaPicker = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const { media } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!media || keyCode !== 27) return;
      dispatch(ToggleMediaModal(false));
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        media ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-14 w-full max-w-100 rounded-lg bg-white dark:bg-boxdark md:py-6 px-8 py-8"
      >
        <div className="flex flex-row items-center justify-between mb-6 space-x-2">
          <div className="text-md font-medium text-black dark:text-white">
            Choose Media Files to send
          </div>

          <button
            onClick={() => {
              dispatch(ToggleMediaModal(false));
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* FileDropzone */}
        <FileDropZone />

        <div className="flex flex-row items-center space-x-2 justify-center mt-4">
          <input
            type="text"
            className="border rounded-lg hover:border-primary outline-none w-full p-2 border-stroke dark:border-strokedark bg-transparent dark:bg-form-input "
            placeholder="Type your message...."
          />

          <button className="p-2.5 border border-primary bg-primary rounded-lg flex items-center justify-center hover:bg-opacity-90 text-white">
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPicker;
