// 对 css 文件, 类型的声明
// import css为后缀名时候，都会遵循下面的约定
declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}
