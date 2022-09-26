import React from "react";

function Transaction({ date, description, category, amount }) {
  //   const [transaction, setTransaction] = useState([]);
  //   useEffect(() => {
  //     const fetchTransaction = async () => {
  //       const result = await fetch("http://localhost:8001/transactions");
  //       const jsonResult = result.json();
  //       setTransaction(jsonResult);
  //     };
  //     fetchTransaction();
  //   }, []);

  return (
    <tr>
      {/* <td>{}</td>
      <td>{""}</td>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td> */}
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
