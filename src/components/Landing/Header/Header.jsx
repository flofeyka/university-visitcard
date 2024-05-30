import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="text-[27.5px] flex justify-center items-center border-b-1 border-solid border-black bg-white h-[6.5vh] w-screen sticky">
      <Link to="#news">
        <Button className="mx-2" variant="light" size="lg">
          Новости
        </Button>
      </Link>
      <Link to="#about">
        <Button className="mx-2" variant="light" size="lg">
          О проекте
        </Button>
      </Link>
      <Link to="#contacts">
        <Button className="mx-2" variant="light" size="lg">
          Контакты
        </Button>
      </Link>
    </div>
  );
}
