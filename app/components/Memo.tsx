import React, { PropsWithChildren, ReactHTML } from "react";

export interface MemoProps extends PropsWithChildren {
  tagName?: keyof ReactHTML;
}

const Memo = (props: MemoProps) => {
  const { children, tagName } = props;

  const component = React.createElement(tagName ?? "div", {}, children);
  return <div>{component}</div>;
};

export default React.memo(Memo);
