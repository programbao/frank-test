// 测试函数
function add(a: number, b: number) {
  return a + b;
}
describe("我的第一个测试用例", () => {
  it("函数输出等于目标", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
