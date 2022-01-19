import React, { createContext, useState } from "react";
export const VerseContext = createContext();
import dummyData from "../components/JSON/list";
import dummyChannelList from "../components/JSON/channels-list";

const initialState = {
  verse: "",
  playList: [],
  channel: "",
  channelName: "",
  search: false,
};
const VerseContextData = ({ children }) => {
  const [storeData, setStore] = useState(initialState);
  const [channel, setChannel] = useState("");
  const [found, setFound] = useState(false);

  const setSearchDetail = (channel, verse) => {
    let channelData;
    let listItem = [];
    setStore({ ...storeData, search: true });
    let filterList = dummyData.responseItems.filter((item) => {
      return item.data.verse === verse && item.data.channel_id === channel;
    });
    if (filterList.length) {
      channelData = dummyChannelList.channels.find((item) => {
        return item.id === channel;
      });
      setChannel(channelData.name);
      listItem = filterList.map((item, index) => {
        let date = new Date(item.timestamp).toDateString();
        let time = new Date(item.timestamp).toLocaleTimeString().split(" ")[0];

        return {
          title: item.data.title,
          date_published: item.data.date_published,
          channel: channelData?.name,
          date,
          time,
        };
      });
      setFound(true);
      setStore({
        ...storeData,
        playList: [...listItem],
        verse,
        channel,
        search: true,
      });
    } else {
      setStore({ ...storeData, search: true });
      setFound(false);
    }
  };

  return (
    <VerseContext.Provider
      value={{
        storeData,
        setSearchDetail,
        setStore,
        channel,
        found,
      }}
    >
      {children}
    </VerseContext.Provider>
  );
};

export default VerseContextData;
