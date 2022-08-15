import React from "react";
import { useState, useEffect } from "react";
import { firebase } from "../../lib/firebase";
import Modal from "react-modal";
import { FcCancel } from "react-icons/fc";
import SubTab from "./SubTab";

Modal.setAppElement("#__next");

const Table = () => {
 

  return (
    <div>
      <center>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide ">No.</th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Country
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Currency
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
                <SubTab/>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Table;
