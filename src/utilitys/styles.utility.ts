export type StyleMap<T> = {
  [P in keyof T]: string | number;
};

export function showTypeStyle(
  args: Partial<
    StyleMap<{
      background: string;
      color: string;
      padding: string;
      border: string;
    }>
  >
) {
  return args;
}
