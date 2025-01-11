/* eslint-disable react/prop-types */
import {
  Chat,
  Clock,
  DotsThreeVertical,
  VideoCamera,
  X,
} from "@phosphor-icons/react";

const UserInfo = ({ handleToggleUserInfo }) => {
  return (
    //full div profile header
    <div className="border-l flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-5">
        <div className="text-black dark:text-white text-lg font-semibold">
          Profile
        </div>

        <button onClick={handleToggleUserInfo}>
          <X size={22} weight="bold" />
        </button>
      </div>

      {/* Profile */}
      <div className="mx-auto my-8">
        <img
          src="https://images.pexels.com/photos/18189288/pexels-photo-18189288.jpeg?cs=srgb&dl=pexels-toni-guy-pondicherry-404397363-18189288.jpg&fm=jpg&_gl=1*bosmnu*_ga*MTEzMzkzNTk3My4xNzM2NTQ1NzMw*_ga_8JE65Q40S6*MTczNjU0NTcyOS4xLjEuMTczNjU0NTgxNS4wLjAuMA.."
          alt="profile"
          className="w-40 h-40 rounded-lg object-cover object-center"
        />
      </div>

      {/* profilename */}
      <div className="px-6 space-y-1 ">
        <div className="text-black dark:text-white text-lg font-medium">
          Black Jonathan
        </div>

        <span className="text-body text-sm font-semibold">sales Manger</span>
      </div>

      {/* time local */}
      <div className="px-6 my-4 ">
        <div className="flex flex-row items-center space-x-2">
          <Clock size={18} weight="bold" />
          <div className="text-sm text-body font-semibold">
            6.50 Am local time
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-row space-x-1 ">
        <button className="w-full border border-stroke dark:border-strokedark  p-2 rounded-md flex flex-row items-center justify-center">
          <Chat size={20} className="mr-3" />
          Message
        </button>

        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <VideoCamera size={20} className="mr-3" />
          Huddle
        </button>

        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <DotsThreeVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
