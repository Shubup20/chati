import { Smiley } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";


const EmojiPicker = () => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

  const pickerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlerTrigger = (e) => {
    e.preventDefault();

    setPickerOpen((prev) => !prev);
  };
  return (
    <div className="relative flex">
      <div
        ref={buttonRef}
        className="text-[#98A6AD] hover:text-body"
        onClick={handlerTrigger}
      >
        <Smiley size={20} className="text-body" weight="bold" />
      </div>
      {pickerOpen && (
        <div ref={pickerRef} className="absolute z-40 -top-115 right-0">
          <Picker theme={colorMode} data={data} onEmojiSelect={console.log} />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
