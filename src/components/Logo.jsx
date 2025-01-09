import { ChatTeardropText } from "@phosphor-icons/react";

const Logo = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <ChatTeardropText size={32} weight="bold" />
      <div className="text-2xl font-medium text-body dark:text-white">
        Chati
      </div>
    </div>
  );
};

export default Logo;
