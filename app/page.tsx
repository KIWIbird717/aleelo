import InstagramIcon from "@/app/images/svg/instagram.svg";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import { Button } from "@/shared/ui/Button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonIcon variant={"snow"}
                  disabled={true}
                  icon={<InstagramIcon />}
      />
      <Button size={"large"}
              variant={"snow"}
              icon={<InstagramIcon />}
      >
        Button
      </Button>
    </main>
  );
}
