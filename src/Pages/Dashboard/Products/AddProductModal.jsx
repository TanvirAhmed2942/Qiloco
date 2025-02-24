import React from "react";
import { Modal, Form, Input, Select, Button, ConfigProvider } from "antd";
import UploadComponent from "./UploadComponent";

function AddProductModal({ isModalOpen, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
            labelColor: "#ffffff",
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
        <Form layout="vertical" className="flex flex-col">
          {/* Two Sections Side by Side */}
          <div className="flex  gap-4">
            {/* Left Section */}
            <div className="w-1/2 bg-transparent p-4 rounded-md">
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Product Name required!" }]}
              >
                <Input placeholder="Enter your product name" />
              </Form.Item>

              <Form.Item
                label="Product Descriptions"
                name="productDescription"
                rules={[
                  { required: true, message: "Product Description required!" },
                ]}
              >
                <Input.TextArea placeholder="Write product description" />
              </Form.Item>

              <Form.Item
                label="Filter"
                name="filter"
                rules={[{ required: true, message: "Filter required!" }]}
              >
                <Input placeholder="High" />
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
                  <Select.Option value="red">Red</Select.Option>
                  <Select.Option value="green">Green</Select.Option>
                  <Select.Option value="blue">Blue</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Price"
                name="productPrice"
                rules={[{ required: true, message: "Product Price required!" }]}
              >
                <Input placeholder="Enter your product price" />
              </Form.Item>

              <Form.Item label="Size (Optional)" name="productSize">
                <Input placeholder="1kg" />
              </Form.Item>
            </div>

            {/* Right Section (Upload) */}
            <div className="w-1/2">
              <UploadComponent />
            </div>
          </div>

          {/* Full-Width Submit Button */}
          <Form.Item className="mt-4">
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

export default AddProductModal;
