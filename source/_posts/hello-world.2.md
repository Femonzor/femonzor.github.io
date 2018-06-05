---
title: Hello World
tags: ["aaa", "bbb"]
categories: 娱乐
---
Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub.
<!-- more -->
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` java
package cn.com.songjy;
import java.text.NumberFormat;
//Java 中给数字左边补0
public class NumberFormatTest {
    public static void main(String[] args) {
        // 待测试数据
        int i = 1;
        // 得到一个NumberFormat的实例
        NumberFormat nf = NumberFormat.getInstance();
        // 设置是否使用分组
        nf.setGroupingUsed(false);
        // 设置最大整数位数
        nf.setMaximumIntegerDigits(4);
        // 设置最小整数位数
        nf.setMinimumIntegerDigits(4);
        // 输出测试语句
        System.out.println(nf.format(i));
    }
}
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` javascript
<script type="text/javascript">
function a() {
    console.log("haha");
}
</script>
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)
