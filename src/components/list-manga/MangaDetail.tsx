import { Button } from "antd";
import { FaBookOpen, FaEye } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const story = {
  title: "Dragon Ball",
  author: "Akira Toriyama",
  genres: ["Hành động", "Phiêu lưu", "Hài hước"],
  description:
    "Dragon Ball là một trong những bộ manga/anime nổi tiếng nhất thế giới, kể về cuộc phiêu lưu của Son Goku từ khi còn nhỏ cho đến khi trưởng thành, cùng với những người bạn và kẻ thù của mình. Câu chuyện xoay quanh việc tìm kiếm các viên ngọc rồng để triệu hồi rồng thần và thực hiện những điều ước.",
  cover:
    "https://i.pinimg.com/736x/b3/fe/c2/b3fec21548803b617854f2ee4addd67e.jpg",
  updatedAt: "2025-05-20",
  slug: "vo-than-chua-te",
  chapters: [
    { id: 1, number: 1, title: "Khởi đầu", date: "2025-01-01" },
    { id: 2, number: 2, title: "Cuộc gặp định mệnh", date: "2025-01-02" },
    { id: 3, number: 3, title: "Thức tỉnh", date: "2025-01-03" },
    { id: 4, number: 4, title: "Hành trình bắt đầu", date: "2025-01-04" },
    { id: 5, number: 5, title: "Đối đầu với kẻ thù", date: "2025-01-05" },
    { id: 6, number: 6, title: "Khám phá bí mật", date: "2025-01-06" },
    { id: 7, number: 7, title: "Trận chiến quyết định", date: "2025-01-07" },
    { id: 8, number: 8, title: "Sự trở lại của anh hùng", date: "2025-01-08" },
  ],
};

const StoryDetail = () => {
  return (
    <div
      className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6"
      style={{ marginTop: "5px" }}
    >
      {/* Bìa truyện */}
      <div
        className="md:col-span-1"
        style={{ paddingLeft: "5px", marginLeft: "5px" }}
      >
        <img
          src={story.cover}
          alt={story.title}
          className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]"
        />
      </div>

      {/* Thông tin truyện */}
      <div
        className="md:col-span-2 flex flex-col gap-4"
        style={{ paddingLeft: "5px", marginLeft: "5px" }}
      >
        <h1 className="text-3xl font-bold">{story.title}</h1>
        <div className="text-sm text-gray-600">
          <span>Tác giả: {story.author}</span>
          <br />
          <span>Thể loại: {story.genres.join(", ")}</span>
          <br />
          <span>Cập nhật: {story.updatedAt}</span>
        </div>
        <p className="text-gray-800">{story.description}</p>

        {/* Nút hành động */}
        <div className="flex gap-3 mt-2">
          <Button color="purple" variant="dashed" icon={<FaBookOpen />}>
            Đọc từ đầu
          </Button>
          <Button color="purple" variant="dashed" icon={<MdNavigateNext />}>
            Đọc tiếp
          </Button>
          <Button color="purple" variant="dashed" icon={<FaEye />}>
            Theo dõi
          </Button>
        </div>
        <div
          className="col-span-full mt-8"
          style={{ paddingLeft: "5px", marginLeft: "5px" }}
        >
          <h2 className="text-2xl font-semibold mb-4">Danh sách chương</h2>
          <ul
            className="divide-y divide-gray-200 rounded-xl overflow-hidden space-y-2"
            style={{ maxHeight: "150px", overflowY: "auto" }}
          >
            {[...story.chapters].reverse().map((chap) => (
              <li
                key={chap.id}
                className="p-4 hover:bg-gray-50 transition flex justify-between"
              >
                <a
                  href={`/truyen/${story.slug}/chap-${chap.number}`}
                  className="text-blue-600 font-medium"
                >
                  Chương {chap.number}: {chap.title}
                </a>
                <span className="text-sm text-gray-500">{chap.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Danh sách chương */}
    </div>
  );
};

export default StoryDetail;
