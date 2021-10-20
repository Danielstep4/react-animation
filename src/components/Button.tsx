import withBounceAnimation from "../high-order-components/withBounceAnimation";

const Button: React.FC<Test> = ({ myName }) => {
  return (
    <button className="bg-red-500 rounded px-5 py-2 text-white">
      Push Me {myName}
    </button>
  );
};

export default withBounceAnimation(Button);

interface Test {
  myName: string;
}
