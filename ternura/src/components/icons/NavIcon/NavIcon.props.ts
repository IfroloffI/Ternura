export default interface Props {
  variant: string;
  width?: number | undefined;
  height?: number | undefined;
  style?: NonNullable<JSX.IntrinsicElements['img']['style']>;
}
