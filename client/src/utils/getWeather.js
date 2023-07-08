export const getWeather = async (address) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_URL}/forecast?address=${address}`
    );

    if (!res.ok) {
      return { error: res.statusText };
    }

    const json = await res.json();

    return json;
  } catch (error) {
    return { error };
  }
};
