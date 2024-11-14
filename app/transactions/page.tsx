import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany();

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/*TEXTO E BOTAO*/}
        <div className="flex w-full items-center justify-between">
          <h1 className="font-bol text-2xl">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable data={transactions} columns={transactionColumns} />
      </div>
    </>
  );
};

export default TransactionPage;
