---
title: 第一篇文章
---


# 第一篇文章

Flutter 吐血整理组件继承关系图
老孟导读：前几天一个读者和我说能不能整理一个各个控件之间的继承关系，这2天抽时间整理了一下，不整理不知道，一整理真的吓一跳啊，仅仅Widget的子类（包括间接子类）就高达353个，今天发群里给大家浏览的时候，有人说：“看见这个，会让初学者从入门到放弃的“，其实不必担心，虽然很多，但常用的就那几十个，很快就入门了，剩余其他的用到的时候在查就好了。

## Widget
先看Widget的直接子类，仅仅4个（其实还有一个抽象类）



### RenderObjectWidget
看看RenderObjectWidget:


太长了，截取一份吧，RenderObjectWidget共有89个子类。

### ProxyWidget
在来欣赏下ProxyWidget：


### ProxyWidget相对少一些，有34个。

### StatelessWidget
重头戏来了，我们看看StatelessWidget：


### StatelessWidget有89个

## StatefulWidget
最后看看StatefulWidget：


StatefulWidget的子类最多，高达141个。

## 控件介绍
我在每一个控件的备注里面都添加了当前控件的说明，介绍当前控件：


## 写在最后
虽然控件的数量高达353个，但依然不能阻挡我，目前个人网站已经收录了179个组件的详细用法和介绍，很快就会收录全部353个控件，欢迎大家收藏。

## 获取源文件
或者扫描顶部公众号二维码关注我公众号（sadad或者微信直接搜【老孟程序员】），回复：控件。