import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, ConfigProvider } from "antd";
import UploadComponent from "./UploadComponent";

function AddProductModal({ isModalOpen, setIsModalOpen }) {
  const [form] = Form.useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded images

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Form Data:", { ...values, images: uploadedFiles }); // Include images in form data
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#232323",
            headerBg: "#232323",
            titleColor: "#ffffff",
            titleFontSize: 24,
          },
          Form: {
            labelColor: "#efefef",
          },
          Select: {
            selectorBg: "black",
            activeOutlineColor: "grey",
            optionSelectedBg: "grey",
            multipleItemBorderColor: "grey",
            activeBorderColor: "grey",
            hoverBorderColor: "grey",
          },
          Input: {
            hoverBg: "black",
          },
        },
      }}
    >
      <Modal
        title="Add Product Details"
        open={isModalOpen}
        onOk={handleOk}
        width={1000}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col"
          style={{ padding: 5, marginBlockStart: 15 }}
          onFinish={onFinish}
        >
          {/* Two Sections Side by Side */}
          <div className="flex gap-4">
            {/* Left Section */}
            <div className="w-1/2 bg-transparent  rounded-md">
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Product Name required!" }]}
              >
                <Input
                  placeholder="Enter your product name"
                  className="bg-black border-none h-12"
                />
              </Form.Item>

              <Form.Item
                label="Product Descriptions"
                name="productDescription"
                rules={[
                  {
                    required: true,
                    message: "Product Description required!",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Write product description"
                  className="bg-black border-none"
                />
              </Form.Item>

              <Form.Item
                label="Filter"
                name="filter"
                rules={[{ required: true, message: "Filter required!" }]}
              >
                <Input
                  placeholder="High"
                  className="bg-black border-none h-12"
                />
              </Form.Item>

              <Form.Item
                name="filterMood"
                label="Filter by mood [Tag]"
                rules={[
                  {
                    required: true,
                    message: "Please select Tags",
                    type: "array",
                  },
                ]}
              >
                <Select mode="multiple" placeholder="[Tag]">
                  <Select.Option value="Chill">Chill</Select.Option>
                  <Select.Option value="Soothing">Soothing</Select.Option>
                  <Select.Option value="Euphoric">Euphoric</Select.Option>
                  <Select.Option value="Creative">Creative</Select.Option>
                  <Select.Option value="Happy">Happy</Select.Option>
                  <Select.Option value="Sad">Sad</Select.Option>
                  <Select.Option value="Medium">Medium</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Price"
                name="productPrice"
                rules={[{ required: true, message: "Product Price required!" }]}
              >
                <Input
                  placeholder="Enter your product price"
                  className="bg-black border-none h-12"
                />
              </Form.Item>

              <Form.Item label="Size (Optional)" name="productSize">
                <Input
                  placeholder="1kg"
                  className="bg-black border-none h-12"
                />
              </Form.Item>
            </div>

            {/* Right Section (Upload) */}
            <div className="w-1/2">
              <h5 className="text-[18px] text-[#efefef] font-normal mb-1 ">
                Product Gallery
              </h5>
              <UploadComponent onFileUpload={setUploadedFiles} />
              {/* Receive uploaded images */}
            </div>
          </div>

          {/* Full-Width Submit Button */}
          <Form.Item className="">
            <button
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-quilocoD hover:bg-quilocoD/90 text-white text-[18px] font-medium rounded-lg "
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

export default AddProductModal;
