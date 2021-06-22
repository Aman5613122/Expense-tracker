import React from "react";
import { Header } from "./component/header";
import { Balance } from "./component/balance";
import { IncomeExpenses } from "./component/income_expenses";
import { TransactionList } from "./component/transaction_list";
import { AddTransaction } from "./component/add_transaction";
import './App.css';

import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
