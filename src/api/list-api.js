export const getListManga = async(route) => {
  try {
      const response = await fetch(route, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;

  }catch (error) {
    console.error("Error fetching list manga:", error);
    throw error;
  }
}