"use client";
import { useCallback, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Octokit } from "@octokit/core";

export type GitHubUser = {
  avatarUrl: string;
  url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
  email?: string;
  twitter_username?: string;
  public_repos?: number;
  followers: number;
  following: number;
  login: string;
  createdAt?: Date;
};

export default function Home() {
  const [searchedUser, setSearchedUser] = useState<GitHubUser | null>(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleUserSearch = useCallback(async (username: string) => {
    setShowNoResults(false);
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    });

    try {
      const response = await octokit.request("GET /users/{username}", {
        username: username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      const userData = response.data;
      console.log(userData);
      setSearchedUser({
        avatarUrl: userData.avatar_url,
        url: userData.html_url,
        name: userData.name || undefined,
        company: userData.company || undefined,
        blog: userData.blog || undefined,
        location: userData.location || undefined,
        bio: userData.bio || undefined,
        email: userData.email || undefined,
        twitter_username: userData.twitter_username || undefined,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        login: userData.login,
        createdAt: new Date(userData.created_at),
      });
    } catch (error) {
      setShowNoResults(true);
    }
  }, []);

  return (
    <DarkModeProvider>
      <main className="min-h-screen bg-[#F6F8FF] px-6 py-7 dark:bg-[#141D2F] md:px-80 md:py-32">
        <Header />
        <SearchBar
          search={handleUserSearch}
          showNoResults={showNoResults}
          setShowNoResults={setShowNoResults}
        />
        {searchedUser && <UserCard user={searchedUser} />}
      </main>
    </DarkModeProvider>
  );
}
