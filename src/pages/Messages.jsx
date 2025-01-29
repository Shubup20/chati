import DocumentPicker from "../components/DocumentPicker";
import GifModal from "../components/GifModal";
import MediaPicker from "../components/MediaPicker";
import VoiceRecorder from "../components/VoiceRecorder";
import ChatList from "../section/chat/ChatList";
import Inbox from "../section/chat/Inbox";

const Messages = () => {
  return (
    <>
      <div className="flex w-full">
        {/* ChatList */}
        <ChatList />

        {/* Inbox */}
        <Inbox />
      </div>

      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </>
  );
};

export default Messages;
