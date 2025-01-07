import ChatList from "../section/chat/ChatList";
import Sidebar from "../section/chat/Sidebar";

const Messages = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* ChatList */}
        <ChatList />

        {/* Inbox */}
      </div>
    </div>
  );
};

export default Messages;
