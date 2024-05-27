import { PropsWithChildren } from "react";

export default function Period(props: PropsWithChildren) {
  return (
    <span className="font-normal text-gray-500 text-sm">{props.children}</span>
  );
}
