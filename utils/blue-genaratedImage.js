import { getPlaiceholder } from "plaiceholder";

const getBlurData = async (imageSrc) => {
  const buffer = await fetch(imageSrc).then((res) => res.arrayBuffer());

  const data = await getPlaiceholder(buffer);

  return data;
};

export { getBlurData };
