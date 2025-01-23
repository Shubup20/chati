import {
  Gif,
  Microphone,
  PaperPlaneTilt,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import user01 from "../../images/user/user-01.png";
import Dropdown from "../../components/Dropdown";
import EmojiPicker from "../../components/EmojiPicker";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Giphy from "../../components/Giphy";
import { useDispatch } from "react-redux";
import { ToggleAudioModal } from "../../redux/slices/app";
import Attachment from "../../components/Attachment";
import MsgSeparator from "../../components/MsgSeparator";
import TypingIndicator from "../../components/TypingIndicator";
import TextMessage from "../../components/Messages/Text";
import Document from "../../components/Messages/Document";
import Voice from "../../components/Messages/Voice";
import Media from "../../components/Messages/Media";
import VideoRoom from "../../components/VideoRoom";
import AudioRoom from "../../components/AudioRoom";

const Inbox = () => {
  const dispatch = useDispatch();

  const [userInfoOpen, setUserInfoOpen] = useState(false);

  const [videoCall, setVideoCall] = useState(false);
  const [audioCall, setAudioCall] = useState(false);

  const handleToggleVideo = () => {
    setVideoCall((prev) => !prev);
  };
  const handleToggleAudio = () => {
    setAudioCall((prev) => !prev);
  };

  const [gifOpen, setGifOpen] = useState(false);

  const handleToggleGif = (e) => {
    e.preventDefault();
    setGifOpen((prev) => !prev);
  };

  const handleToggleUserInfo = () => {
    setUserInfoOpen((prev) => !prev);
  };

  // audio toogle
  const handleMicClick = (e) => {
    e.preventDefault();

    dispatch(ToggleAudioModal(true));
  };

  return (
    <>
      <div
        className={`flex  h-full flex-col border-l border-stroke dark:border-strokedark ${
          userInfoOpen ? "xl:w-1/2" : "xl:w-3/4"
        } `}
      >
        {/* Chat header */}
        <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-3">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleToggleUserInfo}
          >
            <div className="mr-4.5 h-11 w-full max-w-11 overflow-hidden rounded-full">
              <img
                src={user01}
                alt="profile"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <h5 className="font-medium text-black dark:text-white">
                Henry Dholi
              </h5>
              <p className="text-xs">Reply to message</p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-5">
            <button
              className="text-[#98A6AD] hover:text-body"
              onClick={handleToggleVideo}
            >
              <VideoCamera size={22} />
            </button>
            <button
              className="text-[#98A6AD] hover:text-body"
              onClick={handleToggleAudio}
            >
              <Phone size={22} />
            </button>
            <Dropdown />
          </div>
        </div>

        {/* list of messages */}

        <div className="max-h-full spac-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
          <TextMessage
            author="Shubham"
            content="Hi,How are u ? https://www.npmjs.com/"
            read_receipt="sent"
            incoming={false}
            timestamp="2.44pm"
          />
          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <MsgSeparator />

          {/* Document msg send and recive */}
          <Document
            author="Janu"
            read_receipt="read"
            incoming={false}
            timestamp="2.44pm"
          />

          {/* Voice msg send and recive */}
          <Voice read_receipt="delivered" incoming={false} timestamp="4.44pm" />

          <Media
            assets={[]}
            author="shubham"
            caption="This is a beautiful car"
            incoming={true}
            timestamp={"5:32pm"}
            read_receipt="read"
          />

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>

          <div className="max-w-125">
            <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
            <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
              <p>
                I want to make an appointment tomorrow from 2.00 pm to 5.00?
              </p>
            </div>
            <p className="text-xs">1.55pm</p>
          </div>

          <div className="max-w-125 ml-auto">
            <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
              <p className="text-white">
                Hello, I will check the schedule and inform
              </p>
            </div>
            <p className="text-xs">2.00pm</p>
          </div>
          <TypingIndicator />
        </div>

        {/* Input field */}
        <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
          <form className="flex items-center justify-between space-x-4.5 ">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type somthing here"
                className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
              />

              <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center  justify-end space-x-4">
                <button
                  className="hover:text-primary "
                  onClick={handleMicClick}
                >
                  <Microphone size={20} weight="bold" />
                </button>

                <button
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
                >
                  <Attachment />
                </button>

                <button
                  className="hover:text-primary "
                  onClick={handleToggleGif}
                >
                  <Gif size={20} weight="bold" />
                </button>

                <button>
                  <EmojiPicker />
                </button>
              </div>
            </div>

            <button className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
              <PaperPlaneTilt size={24} />
            </button>
          </form>

          {gifOpen && <Giphy />}
        </div>
      </div>

      {videoCall && (
        <VideoRoom open={videoCall} handleClose={handleToggleVideo} />
      )}

      {audioCall && (
        <AudioRoom open={audioCall} handleClose={handleToggleAudio} />
      )}

      {/* profile toggle section */}
      {userInfoOpen && (
        <div className="w-1/4">
          <UserInfo handleToggleUserInfo={handleToggleUserInfo} />
        </div>
      )}
    </>
  );
};

export default Inbox;
