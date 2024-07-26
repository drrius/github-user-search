import React from "react";
import { GitHubUser } from "../page";

interface UserStatsProps {
  repos?: number;
  followers: number;
  following: number;
}

const UserStats: React.FC<UserStatsProps> = ({
  repos,
  followers,
  following,
}) => {
  return (
    <section className="mt-8 py-4 px-4 flex flex-row w-full rounded-[10px] justify-between user-stats dark:bg-[#141D2F] bg-[#F6F8FF]">
      <div className="flex flex-1 flex-col gap-2 items-center justify-center ">
        <p className="text-[#4B6A9B] dark:text-white font-mono text-[11px] text-center">
          Repos
        </p>
        <h4 className="text-[#2B3442] dark:text-white font-mono font-bold text-base text-center">
          {repos}
        </h4>
      </div>
      <div className="flex flex-1 flex-col gap-2 items-center justify-center">
        <p className="text-[#4B6A9B] dark:text-white font-mono text-[11px] text-center">
          Followers
        </p>
        <h4 className="text-[#2B3442] dark:text-white font-mono font-bold text-base text-center">
          {followers}
        </h4>
      </div>
      <div className="flex flex-1 flex-col gap-2 items-center justify-center">
        <p className="text-[#4B6A9B] dark:text-white font-mono text-[11px] text-center">
          Following
        </p>
        <h4 className="text-[#2B3442] dark:text-white font-mono font-bold text-base text-center">
          {following}
        </h4>
      </div>
    </section>
  );
};

export default UserStats;
