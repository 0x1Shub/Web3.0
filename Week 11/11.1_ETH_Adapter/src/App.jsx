import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
// import { getBalance } from "viem/_types/actions/public/getBalance";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const queryClient = new QueryClient();

async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

function App() {
  async function getBalance() {
    const balance = await client.getBalance({
      address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD",
    });
    console.log(balance);
  }

  return (
    // <QueryClientProvider client={queryClient}>
    //   <Posts />
    // </QueryClientProvider>

    // -- Viem
    <div>
      <button onClick={getBalance}>Get Balance</button>
    </div>
  );
}

// function Posts() {
//   // Access the client
//   const queryClient = useQueryClient();

//   // Queries
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["posts"],
//     queryFn: getter,
//   });

//   if (isLoading) {
//     return "Loading...";
//   }
//   if (error) {
//     return <div>Error while fetching</div>;
//   }

//   return (
//     <div>
//       {JSON.stringify(data)}
//     </div>
//   );
// }

export default App;
