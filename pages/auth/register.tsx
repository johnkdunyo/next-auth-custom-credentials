import Head from "next/head";
import Layout from "../../layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { ChangeEvent, FormEventHandler, useState } from "react";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [show, setShow] = useState<boolean>(false);

  const [form, setForm] = useState<IRegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFormSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Head>
        <title>Register</title>
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
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
              autoComplete="name"
              value={form.name}
              onChange={inputChangeHandler}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          <div className="flex border rounded-xl relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
              autoComplete="email"
              value={form.email}
              onChange={inputChangeHandler}
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
              autoComplete="new-password"
              value={form.password}
              onChange={inputChangeHandler}
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
            <button
              type="submit"
              className="myButton"
              onSubmit={onFormSubmitHandler}
            >
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
          Have an account already?{" "}
          <Link href={"/auth/signin"} legacyBehavior>
            <a className="text-blue-700">Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
