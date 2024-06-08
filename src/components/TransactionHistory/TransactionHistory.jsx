import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((trn) => {
          const { id, type, amount, currency } = trn;

          const capType = type.charAt(0).toUpperCase() + type.slice(1);
          return (
            <tr
              className={clsx(css.tr, items.indexOf(trn) % 2 !== 0 && css.grey)}
              key={id}
            >
              <td className={clsx(css.tr, css.type)}>{capType}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;