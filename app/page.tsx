"use client";
import React, { useContext } from "react";
import UiForm from "@uicomponents/uisd-react-form/src/UiForm";
import UiCardList from "@uicomponents/uisd-react-list/src/uisd-react-card-list";
import type { ReactElement } from "react";
import UiHeader from "@packages/uisd-react-header/src/UiHeader";
import styles from "./page.module.css";
import UiButton from "@packages/uisd-react-buttons/src/uisd-react-button";
import {
  UIsdButtonSize,
  UIsdButtonTheme,
} from "../packages/uisd-react-buttons/typings/declaration";
import { CryptoProvider, CryptosContext } from "@providers/crypto-api-provider";

function Home(): ReactElement {
  const { handlePagination } = useContext(CryptosContext);

  return (
    <CryptoProvider>
      <div className={styles.maincontainer}>
        <UiHeader>{"Crypto View"}</UiHeader>
        <UiForm />
        <UiCardList />
        <UiButton
          theme={UIsdButtonTheme.SUCCESS}
          size={UIsdButtonSize.LARGE}
          onClick={handlePagination}
        >
          {"More Cryptos"}
        </UiButton>
      </div>
    </CryptoProvider>
  );
}

export default Home;
