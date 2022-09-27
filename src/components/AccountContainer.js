import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";

function AccountContainer() {
  //settin up states

  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  // initializing form data object

  const [transactionForm, setTransactionForm] = useState({
    id: 0,
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  //fetch data using useEffect and fetch
  const fetchData = () => {
    return fetch("http://localhost:8001/transactions?q=" + query)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => console.log(err + " " + "Run server first"));
  };

  useEffect(fetchData, [query]);

  //handling form Data changes

  function handleChange(e) {
    const { name, value } = e.target;
    setTransactionForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  // post data to db.json when the form is submitted

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionForm),
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err + " " + "Run server first"));
  }

  // handling search form
  function handleSearch(e) {
    setQuery((query) => e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        transactionForm={transactionForm}
      />
      <TransactionsList transactionsObj={transactions} />
    </div>
  );
}

export default AccountContainer;
