import { ReactNode, useMemo } from "react";

type Stricted<T extends Record<string, unknown>> = {
  [key in keyof T]-?: NonNullable<T[key]>;
};

export type GuardProps<T extends Record<string, unknown>> =
  | {
      data?: undefined;
      when: boolean;
      children: () => ReactNode;
      fallback?: ReactNode;
    }
  | {
      data: T;
      when?: true;
      children: (data: Stricted<T>) => ReactNode;
      fallback?: ReactNode;
    };

export const Guard = <T extends Record<string, unknown>>(
  props: GuardProps<T>
) => {
  const { fallback, children } = props;

  const isOk = useMemo(() => {
    if (props.data === undefined) {
      return props.when;
    } else {
      const values = Object.values(props.data);
      return values.every((value) => value !== undefined && value !== null);
    }
  }, [props.data, props.when]);

  const component = useMemo(() => {
    if (!isOk && !fallback) {
      return <></>;
    }
    if (!isOk && !!fallback) {
      return <>{fallback}</>;
    }
    if (props.data === undefined) {
      return (children as () => ReactNode)();
    } else {
      return children(props.data as Stricted<T>);
    }
  }, [children, isOk, fallback, props.data]);

  return component;
};
