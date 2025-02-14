"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Fragment, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
} from "react-share";
import { Link2Icon } from "lucide-react";
import { motion } from "framer-motion";
const links: { title: string; url: string }[] = [
  {
    title: "Github",
    url: "https://github.com/Duypham14063003",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/ho.pham.3726613/",
  },
  {
    title: "Email",
    url: "mailto:ngocduy14062003@gmail.com",
  },
];

export default function Home() {
  // Khởi tạo curHref với giá trị rỗng
  const [curHref, setCurHref] = useState("");
  useEffect(() => {
    // Cập nhật URL sau khi component mount (chỉ chạy trên client)
    setCurHref(window.location.href);
  }, []);

  const [modal, setModal] = useState({
    open: false,
    link: {
      title: "",
      url: "",
    },
  });
  const [coppyLink, setCopyLink] = useState(false);
  return (
    <main
      className={
        " py-8 px-4 min-h-screen bg-gradient-to-b from-stone-300 via-purple-200 to-stone-50" +
        "dark:bg-gradient-to-b dark:from-background dark:to-muted"
      }
    >
      <div className=" max-w-2xl mx-auto my-8 relative">
        <div className=" absolute md:left-full md:right-auto right-0 bottom-full ">
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full"
            onClick={() =>
              setModal({
                open: true,
                link: { title: "Phạm Ngọc Duy", url: curHref },
              })
            }
          >
            <DotsHorizontalIcon />
          </Button>
        </div>

        <Avatar className="h-24 w-24 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ND</AvatarFallback>
        </Avatar>

        <section className="text-center mt-3">
          <h1 className="text-xl font-semibold mb-1">Phạm Ngọc Duy</h1>
          <p className="">I am a student information technology</p>
        </section>

        <section className="flex flex-col gap-4 mt-8 w-full mx-auto">
          {links.map((link: { title: string; url: string }, index: number) => (
            <Fragment key={index}>
              <motion.div
                className={
                  "group rounded-full overflow-hidden shadow-md hover:shadow-lg  relative" +
                  "dark:bg-cyan-950 dark:text-black"
                }
                whileHover={{ scale: 1.015 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <a
                  href={link.url}
                  className={
                    " py-5 px-15 text-center bg-white text-neutral-590 block dark:bg-cyan-950 dark:text-white dark:font-semibold"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" leading-snug">{link.title}</span>
                </a>
                <div className=" lg:hidden group-hover:flex z-10 absolute right-0 top-0 h-full aspect-square flex items-center justify-center">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="rounded-full"
                    onClick={() => {
                      setModal({ open: true, link: link });
                    }}
                  >
                    <DotsHorizontalIcon />
                  </Button>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </section>
      </div>

      <Dialog
        open={modal.open}
        onOpenChange={() => setModal({ ...modal, open: false })}
      >
        <DialogContent className="sm:max-w-sm md:max-w-lg rounded-t-2xl md:rounded-3xl top-full -translate-y-full sm:top-1/2 sm:-translate-y-1/2">
          <DialogHeader>
            <DialogTitle className=" text-center  text-base">
              Chia sẻ link
            </DialogTitle>
            <DialogDescription>
              <div className=" grid gap-4">
                <motion.a
                  href={modal.link.url}
                  target="_blank"
                  className=" flex flex-col gap-1 items-center py-6 px-5 w-full sm:max-w-80 mx-auto bg-stone-200 rounded-3xl dark:bg-indigo-400 dark:text-white"
                  whileHover={{ scale: 1.015 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <h3 className=" text-xl leading-snug font-bold">
                    {modal.link.title}
                  </h3>
                  <p className="text-[13px] text-center whitespace-normal w-20 text-ellipsis overflow-hidden">
                    {modal.link.url}
                  </p>
                </motion.a>
              </div>
              {/* {"socal share"} */}

              <div className="flex items-start justify-center gap-4 my-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(modal.link.url);
                    setCopyLink(true);
                    setTimeout(() => {
                      setCopyLink(false);
                    }, 1000);
                  }}
                  className=" bg-neutral-100 flex items-center justify-center w-12 h-12 rounded-full overflow-hidden"
                >
                  <div>
                    {coppyLink ? (
                      <CheckIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <Link2Icon className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <EmailShareButton
                  url={modal.link.url}
                  className=" flex w-12 h-12 rounded-full overflow-hidden mx-2"
                >
                  <EmailIcon className=" w-12 h-12" />
                </EmailShareButton>
                <FacebookShareButton
                  url={modal.link.url}
                  className=" flex w-12 h-12 rounded-full overflow-hidden mx-2"
                >
                  <FacebookIcon className="w-12 h-12" />
                </FacebookShareButton>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
