import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import { useAppSelector } from "@/Redux/hooks";

import { useEffect } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";

function Messages() {
  useEffect(() => {
    document.title = "Messages";
  }, [window.location.pathname]);

  const theme = useAppSelector((store) => store.themes.default);
  const isOpen = useAppSelector(store => store.sidebar.isOpen)

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
                      40
                    </div>
                  </div>
                  <ul className="messages-list mt-8 gap-y-6 h-[650px] overflow-y-auto [&::-webkit-scrollbar]:w-0">
                    {/* ussuall message style */}
                    <li className="message-list__item p-6 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="user-profile__wrapper flex items-center gap-x-2">
                          <img src="/images/profiles/man.png" />
                          <div className="user-infos">
                            <h4 className="user-title font-title text-title text-[12px]">
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
                    {/* selected message style */}
                    <li
                      className={`message-list__item 
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
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
                    <li className="message-list__item p-6 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="user-profile__wrapper flex items-center gap-x-2">
                          <img src="/images/profiles/man.png" />
                          <div className="user-infos">
                            <h4 className="user-title font-title text-title text-[12px]">
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
                    <li className="message-list__item p-6 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="user-profile__wrapper flex items-center gap-x-2">
                          <img src="/images/profiles/man.png" />
                          <div className="user-infos">
                            <h4 className="user-title font-title text-title text-[12px]">
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
                    <li className="message-list__item p-6 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="user-profile__wrapper flex items-center gap-x-2">
                          <img src="/images/profiles/man.png" />
                          <div className="user-infos">
                            <h4 className="user-title font-title text-title text-[12px]">
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
                    <li className="message-list__item p-6 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="user-profile__wrapper flex items-center gap-x-2">
                          <img src="/images/profiles/man.png" />
                          <div className="user-infos">
                            <h4 className="user-title font-title text-title text-[12px]">
                              Patrick Meyer
                            </h4>
                            <span className="user-subtitle font-text text-subtitle text-[12px] block">
                              @patrickmeyer
                            </span>
                          </div>
                        </div>
                        <h5 className="message-time text-subtitle font-text text-[12px]">
                          5 min ago
                        </h5>
                      </div>
                      <p className="message-description mt-6 text-subtitle text-[12px]">
                        Lorem ipsum dolor sit amet consectetur non arcu non
                        mauris quis diam lectus commodo.
                      </p>
                    </li>
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
                        <img src="/images/profiles/woman.png" />
                        <div className="user-infos">
                          <h4 className="user-title font-title text-title text-[16px]">
                            Sophie Moore
                          </h4>
                          <span className="user-subtitle font-text text-subtitle text-[12px] block">
                            @sophiemoore
                          </span>
                        </div>
                      </div>
                      <h5 className="message-time text-subtitle font-text text-[12px]">
                        5 min ago
                      </h5>
                    </div>
                  </div>
                  <div className="chat-body overflow-y-auto ">
                    <div className="user-chat__section w-full">
                      <div className="messages-wrapper flex items-center gap-x-3 ">
                        <div className="messages flex flex-col gap-y-6 mt-8">
                          <div
                            className="p-4 flex flex-col  gap-x-4 gap-y-10 message h-[650px] pb-[6rem] xl:pb-4 overflow-y-auto
                    [&::-webkit-scrollbar]:w-0
                    "
                          >
                            {/* message */}
                            <div className="flex flex-col gap-y-6 ">
                              <div className="flex items-center gap-x-4 ">
                                <img
                                  src="/images/profiles/woman.png"
                                  className="self-end"
                                />
                                <div className="message-paragraph rounded-lg bg-primary p-4 text-title lg:max-w-[250px]">
                                  <p>
                                    Hello John! Hope you’re doing well. I need
                                    your help with some reports, are you
                                    available for a call later today?
                                  </p>
                                </div>
                              </div>

                              <div className="message rounded-lg  sm:ml-[6rem] lg:ml-[40rem] xl:ml-[34rem] bg-[#9A91FB] p-4 text-title lg:max-w-[250px] ">
                                <p>
                                  Hello John! Hope you’re doing well. I need
                                  your help with some reports, are you available
                                  for a call later today?
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-y-6 ">
                              <div className="flex items-center gap-x-4 ">
                                <img
                                  src="/images/profiles/woman.png"
                                  className="self-end"
                                />
                                <div className="message-paragraph rounded-lg bg-primary p-4 text-title lg:max-w-[250px]">
                                  <p>
                                    Hello John! Hope you’re doing well. I need
                                    your help with some reports, are you
                                    available for a call later today?
                                  </p>
                                </div>
                              </div>

                              <div className="message rounded-lg  sm:ml-[6rem] lg:ml-[40rem] xl:ml-[34rem] bg-[#9A91FB] p-4 text-title lg:max-w-[250px] ">
                                <p>
                                  Hello John! Hope you’re doing well. I need
                                  your help with some reports, are you available
                                  for a call later today?
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-y-6 ">
                              <div className="flex items-center gap-x-4 ">
                                <img
                                  src="/images/profiles/woman.png"
                                  className="self-end"
                                />
                                <div className="message-paragraph rounded-lg bg-primary p-4 text-title lg:max-w-[250px]">
                                  <p>
                                    Hello John! Hope you’re doing well. I need
                                    your help with some reports, are you
                                    available for a call later today?
                                  </p>
                                </div>
                              </div>

                              <div className="message rounded-lg  sm:ml-[6rem] lg:ml-[40rem] xl:ml-[34rem] bg-[#9A91FB] p-4 text-title lg:max-w-[250px] ">
                                <p>
                                  Hello John! Hope you’re doing well. I need
                                  your help with some reports, are you available
                                  for a call later today?
                                </p>
                              </div>
                            </div>
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
