import Head from "next/head";
import Layout from "../../layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

export default function SignIn() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Layout>
      <Head>
        <title>SignIn</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className="flex border rounded-xl relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
              autoComplete="email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className="flex border rounded-xl relative">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
              autoComplete="current-password"
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className="myButton">
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className="myButton_custom">
              Sign In with Google{" "}
              <Image
                src={"/assets/google.svg"}
                width="20"
                height={20}
                alt="sample img"
              ></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" className="myButton_custom">
              Sign In with Github{" "}
              <Image
                src={"/assets/github.svg"}
                width={25}
                height={25}
                alt="sample img"
              ></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Don&apos;t have an account yet?{" "}
          <Link href={"/auth/register"} legacyBehavior>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
