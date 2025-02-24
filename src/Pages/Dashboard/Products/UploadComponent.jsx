// import React, { useState } from "react";
// import { Upload, Image, Button } from "antd";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import { AiOutlineDelete } from "react-icons/ai";
// const UploadComponent = () => {
//   const [fileList, setFileList] = useState([]);

//   const handleChange = ({ fileList }) => {
//     setFileList(fileList);
//   };

//   const handleDelete = (file) => {
//     setFileList(fileList.filter((item) => item.uid !== file.uid));
//   };

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <div>
//       {/* Upload Component */}
//       <Upload
//         action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={handleChange}
//         showUploadList={false} // Hide default upload list
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>

//       {/* Display Uploaded Images Below */}
//       <div
//         style={{
//           marginTop: 10,
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       >
//         {fileList.map((file) => (
//           <div
//             key={file.uid}
//             style={{
//               position: "relative",
//               display: "flex",
//               alignItems: "center",
//             }}
//             className="w-full flex justify-between border rounded-md p-1.5"
//           >
//             <Image
//               src={file.url || file.thumbUrl}
//               width={60}
//               height={60}
//               style={{ borderRadius: "5px", objectFit: "cover" }}
//             />
//             <p>file name</p>
//             <Button
//               onClick={() => handleDelete(file)}
//               icon={<AiOutlineDelete size={30} />}
//               className="bg-transparent border-none text-gray-300"
//             ></Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadComponent;

import React, { useState } from "react";
import { Upload, Image, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AiOutlineDelete } from "react-icons/ai";

const UploadComponent = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleDelete = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      {/* Upload Component */}
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        showUploadList={true} // Hide default upload list
        className="bg-transparent"
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      {/* Display Uploaded Images Below */}
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {fileList.map((file) => (
          <div
            key={file.uid}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
            className="w-full flex justify-between border rounded-md p-1.5"
          >
            <div className="flex items-center gap-5 w-ful">
              <Image
                src={file.url || file.thumbUrl}
                width={60}
                height={60}
                style={{ borderRadius: "5px", objectFit: "cover" }}
              />

              <p>{file.name}</p>
            </div>

            <Button
              onClick={() => handleDelete(file)}
              icon={<AiOutlineDelete size={30} />}
              className="bg-transparent border-none text-gray-300 hover:bg-transparent"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadComponent;
