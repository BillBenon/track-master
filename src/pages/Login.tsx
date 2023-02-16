import { Button, Checkbox, Form, Input, Space } from "antd";
import { useEffect, useState } from "react";
import login from "../assets/login.png";
import logo from "../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

function Login() {
  const navs = ["Home", "About Us", "Contact Us", "Terms & Conditions"];
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="relative h-full w-1/2">
        <div className="absolute bg-[rgba(10,10,10,0.84)] px-10 py-5 h-full text-white flex flex-col justify-between  w-full">
          <img src={logo} className="h-10 w-10" />
          <div className="leading-[4rem] text-5xl font-bold">
            This is a test <br /> piece that helps designers and deves
          </div>
          <div className="flex items-center gap-4">
            {navs.map((nav, index) => (
              <span
                key={index}
                className="text-[#E0E0E0] cursor-pointer text-sm"
              >
                {" "}
                {nav}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{ background: `url(${login})` }}
          className="w-full h-full"
        ></div>
      </div>
      <div className="w-1/2 text-white h-full flex flex-col justify-end items-center bg-[#141414]">
        <div className="flex flex-col">
          <h1 className=" text-3xl mb-7 font-semibold">Login to TrackMaster</h1>
          <Form
            layout="vertical"
            name="complex-form"
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              label={<span className="text-white">Username</span>}
              rules={[{ message: "Please input your Username!" }]}
            >
              <Input
                className="bg-transparent px-3 text-white py-3 border-[gray]"
                prefix={
                  <BsFillPersonFill
                    size={25}
                    color="#4D4D4D"
                    className="site-form-item-icon"
                  />
                }
                placeholder="Enter Username"
              />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Password</span>}
              name="password"
              rules={[{ message: "Please input your Username!" }]}
            >
              <Input.Password
                className="bg-transparent px-3 text-white py-3 border-[gray]"
                type="password"
                prefix={
                  <FaKey
                    size={17}
                    color="#4D4D4D"
                    className="site-form-item-icon"
                  />
                }
                placeholder="Enter Password"
              />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="items-start justify-start"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox className="text-white ">Remember me</Checkbox>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button type="primary" className="bg-[#DB1D60] w-full pt-5 pb-10" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
