import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({ where: { userId } });

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
