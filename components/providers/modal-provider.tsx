"use client";

import { useEffect, useState } from "react";
import { SettingModal } from "../models/setting.modal";
import CoverImageModal from "../models/cover-image-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (<>
  <SettingModal />
  <CoverImageModal/>
  </>);
};

export default ModalProvider;
