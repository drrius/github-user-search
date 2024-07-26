import React from "react";
import { GitHubUser } from "../page";
import Image from "next/image";
import UserStats from "./UserStats";
import LocationIcon from "../../public/icon-location.svg";
import LinkIcon from "../../public/icon-link.svg";
import TwitterIcon from "../../public/icon-twitter.svg";
import CompanyIcon from "../../public/icon-company.svg";

interface UserCardProps {
  user: GitHubUser;
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = user.createdAt?.toLocaleDateString("en-US", options);

  return (
    <div className="mt-5 rounded-2xl bg-white px-6 py-8 shadow-lg dark:bg-[#1E2A47]">
      <section className="header flex flex-row gap-5">
        <Image
          className="rounded-full"
          src={user.avatarUrl}
          width={70}
          height={70}
          alt="user avatar"
        />
        <div>
          <h3 className="font-mono text-base font-bold text-[#2B3442] dark:text-[#FFFFFF]">
            {user.name}
          </h3>
          <p className="font-mono text-[13px] text-[#0079FF]">{`@${user.login}`}</p>
          <p className="mt-[8px] font-mono text-[13px] text-[#697C9A] dark:text-[#FFFFFF]">{`Joined ${formattedDate}`}</p>
        </div>
      </section>
      <section className="bio mt-8 font-mono leading-6 text-[#4B6A9B] dark:text-white">
        {user.bio}
      </section>
      <UserStats
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
      <section className="links mt-8 flex flex-col gap-4">
        <div className="flex w-full flex-row items-center justify-start gap-8 font-mono text-[13px] text-[#4B6A9B] dark:text-white">
          <div className="flex w-5 items-center justify-center">
            <LocationIcon />
          </div>
          <p className="flex-1 text-left">{user.location || "Not available"}</p>
        </div>
        <div
          className={`flex w-full flex-row items-center justify-start gap-8 font-mono text-[13px] text-[#4B6A9B] dark:text-white ${
            user.blog ? "opacity-100" : "opacity-50"
          }`}
        >
          <div className="flex w-5 items-center justify-center">
            <LinkIcon />
          </div>
          <p className={`flex-1 text-left ${user.blog && "hover:underline"}`}>
            {user.blog || "Not available"}
          </p>
        </div>
        <div
          className={`flex w-full flex-row items-center justify-start gap-8 font-mono text-[13px] text-[#4B6A9B] dark:text-white ${
            user.twitter_username ? "opacity-100" : "opacity-50"
          }`}
        >
          <div className="flex w-5 items-center justify-center">
            <TwitterIcon />
          </div>
          <p className="flex-1 text-left">
            {user.twitter_username || "Not available"}
          </p>
        </div>
        <div
          className={`flex w-full flex-row items-center justify-start gap-8 font-mono text-[13px] text-[#4B6A9B] dark:text-white ${
            user.company ? "opacity-100" : "opacity-50"
          }`}
        >
          <CompanyIcon />
          <p className="flex-1 text-left">{user.company || "Not available"}</p>
        </div>
      </section>
    </div>
  );
};

export default UserCard;
