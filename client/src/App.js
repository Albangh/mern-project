import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";

const App = (props) => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchToken() {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No token"));
    }

    fetchToken();

    if (uid) dispatch(getUser(uid))

  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
