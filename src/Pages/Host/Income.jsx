import IncomeGraph from "/income.png"

export default function Income() {

    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    return (
        <div className="p-6">
            <section className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold mt-4">Income</h1>
                <p className="text-[#4D4D4D] font-[500]"> Last <span className="underline font-bold">30 days</span></p>
                <p className="text-5xl font-extrabold">$2,260</p>
            </section>
            <img src={IncomeGraph} alt="Income_Graph" className="w-full mt-10 mb-6"/>
            <section className="flex mt-16 flex-col">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Your transactions ({transactionsData.length})</h2>
                    <p className="text-[#4D4D4D] font-[500]"> Last <span className="underline font-bold">30 days</span></p>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    {transactionsData.map(transaction => (
                        <div className="bg-white p-6 flex justify-between">
                            <strong className="text-3xl font-bold">${transaction.amount}</strong>
                            <p className="text-[#4D4D4D] font-[500]">{transaction.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}