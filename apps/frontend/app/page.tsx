import Prisma from '@repo/prisma/client'

export default async function Home() {
  
      const response = await Prisma.user.findFirst();
   
 return response ? ( <div className="min-h-screen flex items-center justify-center bg-black"> <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-purple-900 via-black to-purple-950 p-8 shadow-xl border border-purple-700"> <h2 className="mb-6 text-center text-2xl font-bold text-purple-400"> User Details </h2> <div className="space-y-4 text-white"> <div className="flex justify-between border-b border-purple-700 pb-2"> <span className="text-purple-300">Email</span> <span className="font-medium">{response.email}</span> </div> <div className="flex justify-between border-b border-purple-700 pb-2"> <span className="text-purple-300">Name</span> <span className="font-medium">{response.name}</span> </div> <div className="flex justify-between"> <span className="text-purple-300">User ID</span> <span className="font-medium">{response.id}</span> </div> </div> </div> </div> ) : ( <div className="min-h-screen flex items-center justify-center bg-black"> <div className="rounded-xl border border-purple-700 bg-purple-950 px-8 py-6 shadow-lg"> <h3 className="text-lg font-semibold text-purple-400"> No Data has been found </h3> </div> </div> )
}
