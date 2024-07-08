import { QiitaUser } from "@/type";
import Link from "next/link";
import React from "react";

const ItemUserInfo = ({ userData }: { userData?: QiitaUser }) => {
  return (
    <div className="flex flex-col gap-1">
      {userData && (
        <Link href={`/user/${userData.id}`}>
          <div className="flex flex-raw gap-2">
            <img
              src={userData.profile_image_url}
              alt="profile image"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <div className="hover:underline">@{userData.id}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ItemUserInfo;
