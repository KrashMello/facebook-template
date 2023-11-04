'use client'
import { Avatar, Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image"
import PostContent from "./components/perfil/PostContent";
import { users, posts } from './lib/data'
export default function Home() {
  const userData = users.filter(v => v.id === '410544b2-4001-4271-9855-fec4b6a6442a')[0]
  const postUser = posts.filter(v => v.user_id === userData.id).map(v => { return { user: userData.name, avatar: userData.avatar, ...v } })
  return (
    <main className="w-full pb-32">
      <header className="w-full">
        <Image src={userData.portadaPicture} width={1920} height={250} alt="Una imagen de portada cualquiera" />
        <div className=" w-3/4 h-fit mx-auto">
          <div className="relative flex justify-between px-16 pt-12  ">
            <Avatar isBordered className="absolute top-[-64px] left-14 w-32 h-32" src={userData.avatar} />
            <ul className="ml-40 flex flex-col gap-3">
              <li className="text-3xl font-bold">{userData.name}</li>
              <li className="text-gray-500">@{userData.username} . {userData.about.followers} followers </li>
            </ul>
            <Button className="bg-blue-500 w-72 mt-5 text-white">Contact Us</Button>
          </div>
          <hr className="border-b border-b-gray-300 mt-5 w-full" />
          <div className="flex justify-between">
          </div>
          <Tabs variant="underlined" color="primary" aria-label="Options">
            <Tab key="post" title="post">
              <PostContent about={userData.about} posts={postUser} />
            </Tab>
            <Tab key="photos" title="Photos">
              <Card className="flex w-3/4 gap-12 mx-auto pt-12">
                <CardBody>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </header>
    </main>
  )
}
