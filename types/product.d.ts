export interface IProduct {
  id: number;
  localizeInfos: { title: Record<string, any> };
  price: number | null;
  attributeValues: {
    d_discription: { value: { htmlValue: string }[] };
    p_price: { value: number };
    p_image: { value: { downloadLink: string } };
    p_title: { value: string };
  };
}
