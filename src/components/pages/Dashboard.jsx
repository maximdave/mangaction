import React from "react";


const Dashboard = () => {
  return (
    <>
      <main className="w-2/3 ml-72">
        <section className="grid grid-cols-4 gap-6">
          <div className="h-32 rounded-md border border-gray-300 hover:border-gold flex flex-col justify-center items-center cursor-pointer hover:bg-ogold group">
            <h3 className="text-lgray font-bold text-lg group-hover:font-bold group-hover:text-gold">
              Total Request
            </h3>
            <h1 className="font-bold text-3xl group-hover:text-gold">350</h1>
          </div>
          <div className="h-32 rounded-md border border-gray-300 hover:border-gold flex flex-col justify-center items-center cursor-pointer hover:bg-ogold group">
            <h3 className="text-lgray font-bold text-lg group-hover:font-bold group-hover:text-gold">
              Total Card Printed
            </h3>
            <h1 className="font-bold text-3xl group-hover:text-gold">12,203</h1>
          </div>
          <div className="h-32 rounded-md border border-gray-300 hover:border-gold flex flex-col justify-center items-center cursor-pointer hover:bg-ogold group">
            <h3 className="text-lgray font-bold text-lg group-hover:font-bold group-hover:text-gold">
              Current Blank Card
            </h3>
            <h1 className="font-bold text-3xl group-hover:text-gold">20,000</h1>
          </div>
          <div className="h-32 rounded-md border border-gray-300 hover:border-gold flex flex-col justify-center items-center cursor-pointer hover:bg-ogold group">
            <h3 className="text-lgray font-bold text-lg group-hover:font-bold group-hover:text-gold">
              Bank Branches
            </h3>
            <h1 className="font-bold text-3xl group-hover:text-gold">23</h1>
          </div>
        </section>

        <section>
          <table className="table-auto mt-5 w-full overflow-scroll border border-gray-300">
            <thead className="h-10 bg-bImage">
              <tr>
                <th className="font-bold text-xs text-textc">BRANCH</th>
                <th className="font-bold text-xs text-textc">BRANCH MANAGER</th>
                <th className="font-bold text-xs text-textc">EMAIL</th>
                <th className="font-bold text-xs text-textc">BRANCH ID</th>
                <th className="font-bold text-xs text-textc">CARD PRINTED</th>
                <th className="font-bold text-xs text-textc">
                  TOTAL CARD REQUESTED
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="">
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
              <tr>
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
              <tr>
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
              <tr>
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
              <tr>
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
              <tr>
                <td className="text-sm font-black leading-loose">
                  Ikeja GRA Lagos
                </td>
                <td className="text-sm font-black leading-loose">
                  Modupe Femi Akulasah
                </td>
                <td className="text-sm font-black leading-loose">
                  modepef.a@providus.cgi
                </td>
                <td className="text-sm font-black leading-loose">
                  #33BB3445AC
                </td>
                <td className="text-sm font-black leading-loose">405</td>
                <td className="text-sm font-black leading-loose">200</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="grid grid-cols-2 gap-6 mt-5">
          <div className="h-48 rounded-md border border-gray-300 flex flex-col justify-between pt-5 pl-7 pr-7">
            <span className="pb-1">
              <h2 className="font-bold text-base">Unresolved Issues</h2>
              <h6 className="font-normal text-xs text-lgray leading-loose">
                User: National Admin
              </h6>
            </span>
            {/* <h6 className="font-semibold text-sm text-tblue">View details</h6> */}
            <div class="divide-y">
              <div>
                <h5 className="font-semibold text-sm text-lblack leading-10">
                  Bank awaiting on Card Approval
                </h5>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-lblack leading-10">
                  Awaiting Customer Response
                </h5>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-lblack leading-10">
                  Awaiting Developer Fix
                </h5>
              </div>
            </div>
          </div>
          <div className="h-48 rounded-md border border-gray-300 "></div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
