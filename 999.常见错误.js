1.无法显示指定内容:script没有加window.onload事件
2.无法移动div的位置:没有加position:absolute属性样式
3.canvas的drawImage无法显示图片:把ctx.drawImage(bg_day,0,0);放在bg_day.onload中
4.使用Ajax读取R.json无反应或弹出空白弹窗:(1)是否加了xhr.onreadystatechange注意有on.(2)chrome跨源读取问题可通过webstorm或者git上传来解决.
5.script中的函数没有运行:(1)加载body的onload中.(2)加双括号.(3)在函数后运行一次.
6.无法drawImage:没有加getContext("2d")
7.无法drawImage:index.html没有引入js,主程序Game中没有调用
8.fillText没有显出来文字:把语句放到window.onload中即可ctx.font = "48px serif";ctx.fillText("Hello world", 50, 300);
9.drawImage卡顿:去掉img.onload事件
10.4.Hero.js:13 Uncaught TypeError: Failed to execute 'drawImage':drawImage的参数缺少或者不是图片格式
11.点击按键没反应:加在window.onload中,然后使用   window.onload=function () {
        window.onkeypress=function () {
            alert(event.which)
        }
    }
