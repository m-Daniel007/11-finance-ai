import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany();

  return (
    <div className="space-y-6 p-6">
      {/*TEXTO E BOTAO*/}
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bol text-2xl">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable data={transactions} columns={transactionColumns} />
    </div>
  );
};

export default TransactionPage;
