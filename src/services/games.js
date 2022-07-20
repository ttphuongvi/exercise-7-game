function getNewGames(item = 10) {
  return Array.from(Array(item).keys()).map((i) => ({
    id: i,
    caption: "Trò chơi",
    image: `/images/${i}.png`,
    description:
      "Cross The Bridge là trò chơi Xây dựng một cây cầu với kích thước chính xác và băng qua phía bên kia, đi càng xa càng tốt, mọi cấp độ đều khó khăn hơn. Cố gắng xây dựng Cầu của riêng bạn bằng cách cạnh tranh với những người khác để có được các khối có thể sưu tầm được! Bạn nên tìm kiếm những kẻ cướp bóc tiềm năng. Các tính năng chính của trò chơi bao gồm: tùy chỉnh màu sắc của nhân vật và khối: Bạn có thể chơi với hơn 80 loại nhân vật khác nhau, chọn hơn 30 khối và hơn 30 màu! Tùy chỉnh da nhân vật của bạn mà còn cả màu sắc của nhân vật! Gói: Bạn cũng có thể nhận các gói chứa các ký tự thú vị, các khối và hoạt ảnh nhân vật độc đáo! Bản đồ đường đi: Bạn có thể xem bản đồ đường đi của mình và quay lại mức cũ để đạt được kết quả tốt hơn, thậm chí có thể hoàn hảo hơn! Bạn có thể chơi trên khắp thế giới ở các thành phố khác nhau! Bảng xếp hạng: Hãy nhanh hơn và thu thập nhiều hơn và nhận được nhiều sao hơn để leo lên trong bảng xếp hạng!",
    linkGame: "ht",
  }));
}
export default getNewGames;
