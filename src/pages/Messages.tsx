import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { fetchMessages } from "@/Redux/messageSlice";
import { messageType } from "@/Redux/types/messageSlice.types";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";


function Messages() {
  const theme = useAppSelector((store) => store.themes.default);
  const isOpen = useAppSelector((store) => store.sidebar.isOpen);
  const messages = useAppSelector((store) => store.messages.messages);
  const [selectedMessage, setSelectedMessage] = useState<messageType | null>(
    null
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    document.title = "Messages";
  }, [window.location.pathname]);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div className="flex ">
      <MainSidebar />
      <div
        className={`content w-full p-6 container sm:min-w-[350px] ${
          isOpen ? "max-w-[1200px]" : " max-w-[1350px]"
        }`}
      >
        <Header />
        <div className="main-content">
          <section className="messages-section mt-16">
            <div className="wrapper flex gap-y-16 xl:gap-y-0 xl:gap-x-16 flex-col-reverse xl:flex-row">
              {/* left section */}
              <div className="wrapper-left__section w-full xl:w-[25%]">
                <div className="active-users">
                  <h4 className="font-text text-title">Active</h4>
                  <div className="users-profiles__wrapper flex items-center gap-x-2 mt-2">
                    <img src="/images/profiles/man.png" />
                    <img src="/images/profiles/woman.png" />
                    <img src="/images/profiles/man.png" />
                    <img src="/images/profiles/woman.png" />
                    <img src="/images/profiles/man.png" />
                    <img src="/images/profiles/woman.png" />
                  </div>
                </div>
                <div className="messages mt-20">
                  <div className="messages__title flex items-center gap-x-4">
                    <h3 className="font-title text-title">Messages</h3>
                    <div
                      className="messages-count text-subtitle font-text px-2 py-1 
                bg-[rgba(87,93,255,.2)] rounded-sm border border-[rgba(87,93,255,.5)]"
                    >
                      {messages.length}
                    </div>
                  </div>
                  <ul className="messages-list mt-8 gap-y-6 h-[650px] overflow-y-auto [&::-webkit-scrollbar]:w-0">
                    {messages.map((message) =>
                      message.id !== selectedMessage?.id ? (
                        <li key={message.id}
                          className="message-list__item p-6 rounded-md cursor-pointer"
                          onClick={() => setSelectedMessage(message)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="user-profile__wrapper flex items-center gap-x-2">
                              <img src={message.img} />
                              <div className="user-infos">
                                <h4 className="user-title font-title text-title text-[12px]">
                                  {message.author}
                                </h4>
                                <span className="user-subtitle font-text text-subtitle text-[12px] block">
                                  {message.socialID}
                                </span>
                              </div>
                            </div>
                            <h5 className="message-time text-subtitle font-text text-[12px]">
                              {message.date}
                            </h5>
                          </div>
                          <p className="message-description mt-6 text-subtitle text-[12px]">
                            {message.description}
                          </p>
                        </li>
                      ) : (
                        <li key={message.id}
                          className={`message-list__item cursor-pointer
                                ${theme === "#687478" && "bg-[#574c559c]"}
                                ${theme === "#ff6666" && "bg-[#3614e2c9]"}
                                ${theme === "#00264c" && "bg-box"}
                                ${theme === "#081028" && "bg-box"}
                              p-6 rounded-md`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="user-profile__wrapper flex items-center gap-x-2">
                              <img src="/images/profiles/man.png" />
                              <div className="user-infos">
                                <h4 className="user-title font-title text-title text-[12px]">
                                  {message.author}
                                </h4>
                                <span className="user-subtitle font-text text-subtitle text-[12px] block">
                                  {message.socialID}
                                </span>
                              </div>
                            </div>
                            <h5 className="message-time text-subtitle font-text text-[12px]">
                              {message.date}
                            </h5>
                          </div>
                          <p className="message-description mt-6 text-subtitle text-[12px]">
                            {message.description}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              {/* right section */}
              <div
                className={`wrapper-right__section w-full xl:w-[75%] border
           border-primary rounded-lg relative
            ${theme === "#687478" && "bg-[#574c559c] border-[#90939a]"}
            ${theme === "#ff6666" && "bg-[#3614e2c9]"}
             ${theme === "#00264c" && "bg-box"}
                 ${theme === "#081028" && "bg-box"}
                 
           `}
              >
                <div className={`chat-section `}>
                  <div className="chat-header ">
                    <div className="flex items-center justify-between p-4">
                      <div className="user-profile__wrapper flex items-center gap-x-2">
                        {selectedMessage ? (
                          <img src={selectedMessage.img} />
                        ) : (
                          <FaCircleUser className="text-[28px] text-icon" />
                        )}
                        <div className="user-infos">
                          <h4 className="user-title font-title text-title text-[16px]">
                            {selectedMessage?.author
                              ? selectedMessage?.author
                              : "user"}
                          </h4>
                          <span className="user-subtitle font-text text-subtitle text-[12px] block">
                            @
                            {selectedMessage?.socialID
                              ? selectedMessage?.author
                              : "userId"}
                          </span>
                        </div>
                      </div>
                      <h5 className="message-time text-subtitle font-text text-[12px]">
                        {selectedMessage ? selectedMessage.date : ""}
                      </h5>
                    </div>
                  </div>
                  <div className="chat-body overflow-y-auto ">
                    <div className={`user-chat__section w-full ${selectedMessage === null ? 'flex items-center justify-center mt-[5rem] xl:mt-[10rem] mb-[10rem] xl:mb-0' : ''}`}>
                      <div className="messages-wrapper flex items-center gap-x-3 ">
                        <div className="messages flex flex-col gap-y-6 mt-8">
                          <div
                            className={`p-4 flex flex-col ${!selectedMessage ? 'justify-center w-full items-center min-h-full' : 'pb-[6rem] xl:pb-4 h-[650px]'} gap-x-4 gap-y-10 message  overflow-y-auto
                               [&::-webkit-scrollbar]:w-0`}
                          >
                            {
                              selectedMessage ? (
                                <div className="flex flex-col gap-y-6 ">
                              {/* question message */}
                              {selectedMessage?.message.question && (
                                <div className="flex items-center gap-x-4 ">
                                  <img
                                    src={selectedMessage.img}
                                    className="self-end"
                                  />
                                  <div className="message-paragraph rounded-lg bg-primary p-4 text-title lg:max-w-[250px]">
                                    <p>{selectedMessage.message.question}</p>
                                  </div>
                                </div>
                              )}
                              {/* question messages */}
                              {selectedMessage?.message.questionArray
                                ?.length ? (
                                <div className="flex items-center gap-x-4 mb-8">
                                  <img
                                    src={selectedMessage.img}
                                    className="self-end"
                                  />
                                  <div className="questions-wrapper flex flex-col gap-y-4">
                                    {selectedMessage.message.questionArray.map(
                                      (message) => (
                                        <div className="message-paragraph rounded-lg bg-primary p-4 text-title lg:max-w-[250px]">
                                          <p>{message}</p>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              ) : null}

                              {/* answer message */}
                              {selectedMessage?.message.answer && (
                                <div className="message rounded-lg ml-[6rem] sm:ml-[8rem] md:ml-[20rem]  lg:ml-[33rem] lt:ml-[40rem] xl:ml-[34rem] bg-[#9A91FB] p-4 text-title lg:max-w-[250px] ">
                                  <p>{selectedMessage.message.answer}</p>
                                </div>
                              )}

                              {/* answer messages */}
                              {selectedMessage?.message.answerArray?.length
                                ? selectedMessage?.message.answerArray.map(
                                    (message) => (
                                      <div className="message rounded-lg ml-[6rem] sm:ml-[8rem] md:ml-[20rem] lg:ml-[33rem] lt:ml-[40rem] xl:ml-[34rem] bg-[#9A91FB] p-4 text-title lg:max-w-[250px] ">
                                        <p>{message}</p>
                                      </div>
                                    )
                                  )
                                : null}
                            </div>
                              ) : <div className="flex items-center justify-center flex-col gap-y-4">
                                <BiSolidConversation className="text-[120px] text-title"/>
                                 <p className="font-text text-subtitle text-[24px]">start conversation with someone...</p>
                              </div>
                            }
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute rounded-br-lg rounded-bl-lg
           p-4 bottom-0 bg-primary rounded-tl-xl rounded-tr-xl w-full flex items-center justify-between"
                >
                  <input
                    type="text"
                    className="font-title w-[75%] text-title placeholder:text-title outline-none border-none bg-inherit"
                    placeholder="Type a message"
                  />
                  <div className="flex items-center justify-center gap-x-3 text-[15px] text-title">
                    <BsEmojiSmileFill className="cursor-pointer" />
                    <FaPaperclip className="cursor-pointer" />
                    <button
                      className="bg-selected cursor-pointer border-none outline-none text-title p-2 rounded-md"
                      type="button"
                    >
                      Send Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Messages;
