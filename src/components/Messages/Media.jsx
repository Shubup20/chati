/* eslint-disable react/prop-types */
import { Check, Checks } from "@phosphor-icons/react";
import MediaMsgGrid from "../MediaMsgGrid";

const Media = ({
  incoming,
  author,
  timestamp,
  assets,
  read_receipt,
  caption,
}) => {
  return incoming ? (
    <div className="max-w-125">
      <p className="mb-2.5 text-sm font-medium">{author}</p>
      <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2">
        {/* Media Msg Grid */}
        <MediaMsgGrid incoming={incoming} />
        <p className="">{caption}</p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 ml-auto">
      <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 space-y-2">
        {/* Media Msg Grid */}
        <MediaMsgGrid incoming={incoming} />
        <p className="text-white">{caption}</p>
      </div>

      <div className="flex flex-row items-center justify-end space-x-2">
        <div
          className={`${
            read_receipt !== "read"
              ? "text-body dark:text-white"
              : "text-primary"
          }`}
        >
          {read_receipt !== "sent" ? (
            <Checks weight="bold" size={18} />
          ) : (
            <Check weight="bold" size={18} />
          )}
        </div>
        <p className="text-xs">{timestamp}</p>
      </div>
    </div>
  );
};

export default Media;
