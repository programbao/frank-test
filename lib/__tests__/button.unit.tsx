import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";
describe("我的第一个测试用例", () => {
  it("是一个div", () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
