import React from "react";
import { useState, useEffect } from "react";
import { firebase } from "../../lib/firebase";

const SubTab = () => {
    const [no, setNo] = useState("");
    const [country, setCountry] = useState("");
    const [currenc, setCurrenc] = useState("");
    const [status, setStatus] = useState("");
  
    const [currency, setCurrency] = useState([]);
  
    const update = () => {
      console.log("update");
    };
  
    useEffect(() => {
      firebase
        .firestore()
        .collection("currency")
        .onSnapshot((snapshot) => {
          setCurrency(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

  return (
    <>
    {currency.map((cash, pos) => (
    <tr className="bg-white border-b-2">
    
      <td className="p-3 text-sm font-semibold text-center" key={pos}>
        {cash.no}
      </td>
      <td className="p-3 text-sm font-semibold text-center" key={pos}>
        {cash.country}
      </td>
        <td className="p-3 text-sm font-semibold text-center" key={pos}>
        {cash.currency}
      </td>
      <td className="p-3 text-sm font-semibold text-center" key={pos}>
        {cash.status}
      </td>
   
  </tr>
   ))}
   </>
  )
}

export default SubTab