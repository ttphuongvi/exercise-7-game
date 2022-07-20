function getNewGames(item = 10) {
  return Array.from(Array(item).keys()).map((i) => ({
    id: i,
    caption: "null",
    image: `/images/${i}.png`,
    description: "null",
    linkGame: "ht",
  }));
}
export default getNewGames;
