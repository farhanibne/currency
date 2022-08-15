import React from "react";
import { firebase } from "../../lib/firebase";
import { useRouter } from "next/router";
import { BsCoin } from "react-icons/bs";


const NavBar = () => {

    const router = useRouter();

    const logout = async () => {
        await firebase.auth().signOut();
        router.push("/");
    };

  return (
    <div className="w-full h-16 bg-slate-100">
    
    <div style={{display:'flex'}} className="justify-between">
        <div className="ml-5 mt-4 mb-4 mr-3">
            <h3><BsCoin style={{fontSize:'35px'}}/></h3>
        </div>
        
        <div className="mr-5 mt-3 mb-3 ml-3">
        <button
                id="logout"
                type="submit"
                onClick={logout}
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  color: "azure",
                  background: "#000",
                  border: "none",
                }}
            >
                Log Out
              </button> 
        </div>
    </div>

    </div>
  );
};

export default NavBar;
