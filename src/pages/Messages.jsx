import DocumentPicker from "../components/DocumentPicker";
import GifModal from "../components/GifModal";
import MediaPicker from "../components/MediaPicker";
import VoiceRecorder from "../components/VoiceRecorder";

import ChatList from "../section/chat/ChatList";
import Inbox from "../section/chat/Inbox";
import Sidebar from "../section/chat/Sidebar";

const Messages = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* ChatList */}
        <ChatList />

        {/* Inbox */}
        <Inbox />
      </div>

      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </div>
  );
};

export default Messages;
