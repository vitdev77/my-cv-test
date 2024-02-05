import { LuStar } from "react-icons/lu";

interface StarProps {
  inactive?: string;
}

export const Star = ({ inactive }: StarProps) => {
  return (
    <>
      {
        <LuStar
          className={`text-primary {${inactive === "1" && " opacity-25"}`}
        />
      }
    </>
  );
};

export default Star;
