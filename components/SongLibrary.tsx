"use client"

import React from "react";

import { TbPlaylist } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useLibraryModal from "@/hooks/useLibraryModal";

const SongLibrary = () => {
  const userContext=useUser()
  const authModal = useAuthModal()
  const libraryModal=useLibraryModal()
  const onClick = () => {
    if(userContext?.user===null){
      return authModal.onOpen()
    }
    libraryModal.onOpen()
    // TODO : check for subscription
    // TODO : create uplaod modal
  };

  return (
    <div className="flex flex-col mt-3 pl-5">
      <div className="flex flex-row justify-between pr-5 hover:text-white duration-300">
        <div className="flex flex-row gap-x-2 cursor-pointer ">
          <TbPlaylist size={20} />
          <p>Your library</p>
        </div>
        <div onClick={onClick} className="cursor-pointer ">
          <IoIosAdd size={20} />
        </div>
      </div>
        <div>
            <p className="text-white font-bold mt-4">List of songs!</p>
        </div>
    </div>
  );
};

export default SongLibrary;