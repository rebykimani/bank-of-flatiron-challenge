import React, { useState } from "react";
function AddTransactionForm() {
  const url = "http://localhost:8001/transactions";
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handle(e) {
    const newTransaction = { ...transaction };
    newTransaction[e.target.id] = e.target.value;
    setTransaction(newTransaction);
    console.log(newTransaction);
  }
  function submit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransaction([...transaction, data]);
      });
  }

  return (
    <div className="ui segment">
      <form onSubmit={(e) => submit(e)} className="ui form">
        <div className="inline fields">
          <input onChange={(e) => handle(e)} type="date" name="date" />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            onChange={(e) => handle(e)}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
