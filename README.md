vue开发去哪儿app练习项目

### 抽离公共样式
创建varibles.styl,在其中定义全局样式变量
```
$bgColor = #oobc4d
```

在组件中的style标签中引入
**这里的styles是在webpack中定义的别名**
```
@import '~styles/varibiles.styl'
```
最后将对应的颜色换成变量名即可
```css
bgckground: $bgColor;
```
效果如下：
![p1.png](https://i.loli.net/2019/08/30/vmjcZr9iS2K1kJH.png)