import React from "react";
import numbers from "../../assets/number.png"
import number from "../../assets/group.png"

const Request = () => {
  return (
    <>
      <main className="w-2/3 ml-72">
        <section className="flex gap-1">
          <h1 className="text-gold font-bold text-lg">Providus</h1>
          <h1 className="font-bold text-lg">Banking Card Request</h1>
        </section>
        
        <section>
            <table className="table-auto mt-5 w-full overflow-scroll border border-gray-300">
                <thead className="h-10 bg-bImage">
                    <tr>
                        <th className="font-bold text-xs text-textc">BRANCH</th>
                        <th className="font-bold text-xs text-textc">BRANCH MANAGER</th>
                        <th className="font-bold text-xs text-textc">BRANCH EMAIL</th>
                        <th className="font-bold text-xs text-textc">DATE REQUESTED</th>
                        <th className="font-bold text-xs text-textc">CARD REQUESTED</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Requested</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end pt-2"><img src={numbers} alt="" className=""/></div>
        </section>

        <section className="flex gap-1">
          <h1 className="text-gold font-bold text-lg">Providus</h1>
          <h1 className="font-bold text-lg">Banking Card Approved</h1>
        </section>

        <section>
        <table className="table-auto mt-5 w-full overflow-scroll border border-gray-300">
                <thead className="h-10 bg-bImage">
                    <tr>
                        <th className="font-bold text-xs text-textc">BRANCH</th>
                        <th className="font-bold text-xs text-textc">BRANCH MANAGER</th>
                        <th className="font-bold text-xs text-textc">BRANCH EMAIL</th>
                        <th className="font-bold text-xs text-textc">DATE REQUESTED</th>
                        <th className="font-bold text-xs text-textc">CARD REQUESTED</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                    <tr>
                        <td className="text-sm font-black leading-loose">IKEJA GRA LAGOS</td>
                        <td className="text-sm font-black leading-loose">Modupe femi Akulasah</td>
                        <td className="text-sm font-black leading-loose">modepef.a@providus.cgi</td>
                        <td className="text-sm font-black leading-loose">22/03/2022</td>
                        <td className="text-sm font-black leading-loose">164 - Approved</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end pt-2"><img src={number} alt="" className=""/></div>
        </section>
      </main>
    </>
  );
};

export default Request;
