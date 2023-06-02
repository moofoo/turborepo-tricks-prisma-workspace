import React from "react";
import {ofetch} from "ofetch";
import type {User} from "prisma-client";

export default function useData() {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await ofetch("http://localhost:3333/users");
      setData(data);
    })();
  }, []);

  return data;
}
