1. **分析用户请求**
   - 输入：一张包含 C++ 可变参数模板代码的图片。
   - 目标：解释 `Args... args`、`Args&... args` 和 `Args&&... args`。

2. **拆解代码**

   ```cpp
   template <class... Args>
   void Func(Args&&... args) {
       // 保留缩进、尖括号和换行
       call(std::forward<Args>(args)...);
   }
   ```

3. **整理解释**

   | 写法 | 说明 |
   | --- | --- |
   | `Args... args` | 按值接收 |
   | `Args&... args` | 左值引用 |
   | `Args&&... args` | 满足推导条件时为转发引用 |

先检查模板参数。
再确认实参类型。

> 注意：类型推导与引用折叠需要结合分析。

公式示例：\(E = mc^2\)。

\[
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
