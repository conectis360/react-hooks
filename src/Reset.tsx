type Props = {
  onClick: () => void;
};

export function Reset({ onClick }: Props) {
  console.log("render Reset");
  return <button onClick={onClick}>Reset</button>;
}
