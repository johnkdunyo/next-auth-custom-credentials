import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextApiRequest } from "next";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="">
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/auth/signin"} legacyBehavior>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User(session: { session?: Session; user?: any }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session?.user.name}</h5>
        <h5>{session?.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-md bg-indigo-500 text-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link href={"/profile"} legacyBehavior>
          <a className="mt-5 px-10 py-1 rounded-md bg-indigo-500 text-gray-50">
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps(req: NextApiRequest) {
  const session = await getSession({ req });
  console.log(req);
  console.log("session here =>", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { ...session },
  };
}
