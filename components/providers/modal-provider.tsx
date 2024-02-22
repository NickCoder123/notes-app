"use client";

import React, { useEffect, useState } from "react";

import { SettingsModal } from "@/components/modals/settings-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <React.Fragment>
      <SettingsModal />
    </React.Fragment>
  );
};
