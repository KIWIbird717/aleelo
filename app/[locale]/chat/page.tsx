"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Chat } from "@/widgets/Chat";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { useRouter } from "next/navigation";

interface IChatPageProps {
}

const ChatPage: NextPage<IChatPageProps> = () => {
  const { width, height, svgGRef, svgRef, svgHeight } = useSizes();
  const {back} = useRouter()

  return (
    <View className={"flex flex-col"}
          backgroundEffect={"gradient"}
    >
      <Chat svgHeight={svgHeight!} height={height}/>
      <Navbar width={width} svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default ChatPage;