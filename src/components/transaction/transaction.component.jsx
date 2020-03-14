import React from "react";
import Nav from "../Nav/nav.component";

export const Transactions = props => {
  let transaction = {};
  console.log(props.user)
  //const user = JSON.parse(props.user);
  if (props.user) {
    const { transactions } = props.user.attributes;
    transaction = transactions;
    console.log(transactions);
  }
  return (
    <div>
      <Nav />
      <table className="table table-hover">
        <tbody>
          {transaction.map(item => {
            return (
              <tr key={item.id}>
                <td style={{ border: "none" }}>{item.ticker}</td>
                <td style={{ border: "none" }}> - {item.qty} Shares</td>
                <td style={{ border: "none" }}>${item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
