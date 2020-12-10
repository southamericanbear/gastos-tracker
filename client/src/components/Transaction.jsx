import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import numbersWithCommas from "../utils/format";

export default function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${numbersWithCommas(Math.abs(transaction.amount))}{" "}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
