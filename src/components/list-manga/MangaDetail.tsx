import { Button, Spin } from "antd";
import { FaBookOpen, FaEye } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { LoadingOutlined } from '@ant-design/icons';

interface StoryDetailProps {
  currentChapter: any; // bạn nên định nghĩa type rõ hơn nếu có thể
}

const StoryDetail: React.FC<StoryDetailProps> = ({ currentChapter }) => {
  if (!currentChapter) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
      </div>
    );
  }

  const {
    title,
    author,
    genres,
    description,
    cover,
    updatedAt,
    slug,
    chapters,
  } = currentChapter;

  console.log(cover);

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: "5px" }}>
      <div className="md:col-span-1" style={{ paddingLeft: "5px", paddingRight: "5px", marginLeft: "5px", marginRight:"5px" }}>
        <img
          src={cover}
          alt={title}
          className="w-full rounded-2xl shadow-md object-cover aspect-[3/4]"
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-4" style={{ paddingLeft: "5px", marginLeft: "5px" }}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-sm text-gray-600">
          <span>Tác giả: {author}</span>
          <br />
          <span>Thể loại: {genres.join(", ")}</span>
          <br />
          <span>Cập nhật: {updatedAt}</span>
        </div>
        <p className="text-gray-800">{description}</p>

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

        <div className="col-span-full mt-8" style={{ paddingLeft: "5px", paddingRight: "5px", marginLeft: "5px", marginRight:"5px" }}>
          <h2 className="text-2xl font-semibold mb-4">Danh sách chương</h2>
          <ul
            className="divide-y divide-gray-200 rounded-xl overflow-hidden space-y-2"
            style={{ maxHeight: "150px", overflowY: "auto" }}
          >
            {[...chapters].reverse().map((chap) => (
              <li
                key={chap.id}
                className="p-4 hover:bg-gray-50 transition flex justify-between"
              >
                <a
                  href={`/truyen/${slug}/chap-${chap.number}`}
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
    </div>
  );
};

export default StoryDetail;
