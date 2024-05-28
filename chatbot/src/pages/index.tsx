import { Inter } from "next/font/google";
import ChatBot from "./chatbot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ChatBot />;
}
