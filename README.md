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

### 创建分支开发新功能

1. 在github上先创建出一个新的分支
2. git pull   //线上代码拉回本地仓库
3. git checkout 分支名  //切换分支
在这个新的分支下进行新功能的开发

开发完成后

git add .
git commit -m "****"  // 提交代码到本地仓库

git push  // 推到线上仓库

git checkout master   // 切回master分支

git merge origin/分支名  // 将分支上新增的代码合并到master上

git push // 把master中内容提交到线上
