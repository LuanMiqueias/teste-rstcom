import React from "react";
import { useRouter } from "next/router";

interface IProps {
  redirectTo?: string;
  redirectIfFound?: string;
}
export default function UserAuth({ redirectTo, redirectIfFound }: IProps) {
  const router = useRouter();
  const [data, setData] = React.useState(null);

  const loadData = React.useCallback(() => {
    if (localStorage.user_test) {
      setData(JSON.parse(localStorage.user_test));
      if (redirectIfFound && data) {
        router.push(redirectIfFound);
      }
    } else {
      setData(null);
      router.push(redirectTo);
    }
    return data;
  }, [redirectIfFound, redirectTo]);

  React.useEffect(() => {
    loadData();
  }, []);

  return { user: data, loadData };
}
