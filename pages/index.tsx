import { signOut, getSession } from "next-auth/react"
import { NextPageContext } from 'next'
import useCurrentUser from "@/hooks/useCurrentUser"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session)
  {
    return {
      redirect: 
      {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
const { data: user } = useCurrentUser()

  return (
    <>
    <h1 className="text-4xl text-green-500">Netflix Clone</h1>
    <p className="">Logged In as {user?.name}</p>
    <button onClick={() => signOut()} className="w-full h-10 bg-white">Logout</button>
    
    </>
  )
}
