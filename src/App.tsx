import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')
 

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModal(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = { handleCloseNewTransactionModal }/>
      <TransactionTable />
    </>
  );
}
