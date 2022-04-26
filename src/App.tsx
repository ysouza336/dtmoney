import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewtransactionModalOpen, setisNewtransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setisNewtransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
      setisNewtransactionModalOpen(false);
  }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal isOpen={isNewtransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        <GlobalStyle />
    </>
  );
}


