import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";

const SubscriptionPage = () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <h1>Subscription page</h1>
    </div>
  );
};

export default SubscriptionPage;
