import css from "./TransactionHistory.module.css"

function Transaction({ type, amount, currency }) {
    return (
        <>
            <td className={css.capitalize}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <Transaction
                                type={item.type}
                                amount={item.amount}
                                currency={item.currency}
                            />
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}