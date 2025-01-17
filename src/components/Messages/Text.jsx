/* eslint-disable no-unused-vars */

import extractLinks from "../../utils/extractLinks";
import Microlink from "@microlink/react";

/* eslint-disable react/prop-types */
const TextMessage = ({
  incoming,
  author,
  timestamp,
  read_receipt,
  content,
}) => {
  const { links, originalString } = extractLinks(content);

  return incoming ? (
    <div className="max-w-125 mb-4">
      <p className="mb-2.5 text-sm font-medium">{author}</p>
      <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2">
        <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
        {links.length > 0 && (
          <Microlink style={{ width: "100%" }} url={links[0]} />
        )}
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 mb-4 ml-auto">
      <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 space-y-2">
        <p
          className="text-white"
          dangerouslySetInnerHTML={{ __html: originalString }}
        ></p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  );
};

export default TextMessage;
