"use client";

import { fetchUser } from "@/actions/user.action";
import BackButton from "@/components/BackButton";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";
import { QiitaUser } from "@/type";
import React, { useLayoutEffect, useState } from "react";
import UserContainer from "./_components/UserContainer";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const apiKeyValue = useApiKeyContext();
  const [userData, setUserData] = useState<QiitaUser>();
  const [loading, setLoading] = useState<boolean>(false);
  useLayoutEffect(() => {
    setLoading(true);
    fetchUser(id, apiKeyValue.state).then((userData) => {
      setUserData(userData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      {loading ? <></> : <UserContainer userData={userData}></UserContainer>}
    </div>
  );
};

export default page;
