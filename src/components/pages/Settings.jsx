import React from "react";
import sline from "../../assets/Line.png";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className="w-2/3 ml-72">
        <main>
          <section className="flex gap-1">
            <h1 className="text-gold font-bold text-lg">Providus</h1>
            <h1 className="font-bold text-lg">Banking Card Settings</h1>
          </section>

          <section className="flex">
            <div>
              <div className="flex gap-5 mt-9 items-center">
                <h5 className="font-normal text-sm">
                  Current Stock Of Blank Card In The Bank
                </h5>
                <input
                  type="number"
                  placeholder="300"
                  className="w-20 rounded-lg bg-sgray"
                />
                <Link>
                  <button className="bg-buyellow rounded-lg text-xs h-10 w-24 font-bold text-black">
                    Update
                  </button>
                </Link>
              </div>
              <div className="flex gap-5 mt-8 items-center">
                <h5 className="font-normal text-sm">
                  Bank Branch Blank Card Request Limit
                </h5>
                <input
                  type="number"
                  placeholder="300"
                  className="w-20 rounded-lg bg-sgray ml-3"
                />
                <Link>
                  <button className="bg-buyellow rounded-lg text-xs h-10 w-24 font-bold text-black">
                    Update
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center ">
              <img src={sline} alt="" className="ml-10" />
              <div className="h-32 w-52 ml-10 rounded-md border border-gray-300 hover:border-gold flex flex-col justify-center items-center cursor-pointer hover:bg-ogold group">
                <h3 className="text-lgray font-bold text-lg group-hover:font-bold group-hover:text-gold">
                  Bank Branches
                </h3>
                <h1 className="font-bold text-3xl group-hover:text-gold">19</h1>
              </div>
            </div>
          </section>
        </main>

        <main className="mt-16">
          <h4 className="font-bold text-base">User Profile Details</h4>
          <form action="" className="flex flex-col gap-y-5 mt-3">
            <input
              type="text"
              placeholder="Jones Ferdinard"
              className="w-6/12 rounded-md bg-sgray border border-sgry placeholder:opacity-50 placeholder:text-sm"
            />
            <input
              type="number"
              placeholder="+234 -814 - 000 - 000"
              className="w-6/12 rounded-md bg-sgray border border-sgry placeholder:opacity-50 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Main Branch, Main Building"
              className="w-6/12 rounded-md bg-sgray border border-sgry placeholder:opacity-50 placeholder:text-sm"
            />
            <input
              type="email"
              placeholder="jones.ferdinard@providus.coo"
              className="w-6/12 rounded-md bg-sgray border border-sgry placeholder:opacity-50 placeholder:text-sm"
            />
          </form>
        </main>
      </div>
    </>
  );
};

export default Settings;
